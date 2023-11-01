import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/actions/productAction";

const ViewHomeProductHook = () => {
  // dispatch the action
    const dispatch = useDispatch();
    // useEffect to dispatch the action of all category
    useEffect(() => {
        dispatch(getAllProduct());
    }, [])
    // Select Sub products
  const allProducts = useSelector(state => state.allProduct.allProducts);

  let products = [];
  if (allProducts.data) {
    products = allProducts.data
  } else {
    products = [];
  }

    
    

    return [products]
}

export default ViewHomeProductHook
