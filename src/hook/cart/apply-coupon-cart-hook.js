import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotification";
import { useState } from "react";
import { applyCouponCart } from "../../redux/actions/cartAction";
import { useEffect } from "react";
const ApplyCouponCartHook = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [couponName, setCouponName] = useState("");
    
    const onChangeCouponName = (value) => {
        setCouponName(value)
    }


    const onApplyCoupon = async () => {
        setLoading(true)
        await dispatch(applyCouponCart({
            couponName: couponName
        }))
        setLoading(false)
    }

    const couponCartRes = useSelector(state => state.cart.applyCouponCart);

    useEffect(() => {
        if (loading === false) {
            if (couponCartRes) {
                if (couponCartRes.data.message === "Coupon is invalid or has expired") {
                    notify("Coupon is invalid or has expired", "error");
                    setTimeout(() => {
                        window.location.reload()
                    }, 1500);
                } else if (couponCartRes.status === 200) {
                    notify("Coupon Added Successfully", "success");
                    setTimeout(() => {
                        window.location.reload()
                    }, 1500);
                }
                else if (couponCartRes.status === 500) {
                    notify("There Is No Products In Cart", "error");
                    
                }
            }
        }
    }, [loading])
    
    return [couponName , onChangeCouponName , onApplyCoupon]
}

export default ApplyCouponCartHook
