import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/actions/productAction";

const ViewSearchProductHook = () => {
  // dispatch the action
    const dispatch = useDispatch();
    // useEffect to dispatch the action of all category
    useEffect(() => {
        dispatch(getAllProduct());
    }, [])
    // Select Sub products
    const allProducts = useSelector(state => state.allProduct.allProducts);
    return [allProducts]
}

export default ViewSearchProductHook
