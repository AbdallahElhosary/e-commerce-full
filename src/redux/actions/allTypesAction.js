import useGetData from "../../hooks/useGetData";
import { GET_ALL_TYPES, GET_ERROR } from "../type";

// Action to get all types
export const getAllTypes = () => async (dispatch) => {
    try {
        const products = await useGetData(`/api/v1/products`);
        console.log(products);
        
        dispatch({
            type: GET_ALL_TYPES,
            products:products,
            
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            products: "Erorr" + e
        })
    }
}