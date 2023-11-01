import {  GET_ALL_TYPES, GET_ERROR } from "../type";

const inital = {
    products:[],
    
    loading: true,

}

const allTypesReducer = (state=inital,action) => {
    switch (action.type) {
        case GET_ALL_TYPES:
            return {
                ...state,
                products: action.products,
                
                loading: false,
            }
        case GET_ERROR:
            return {
                loading: true,
                products: action.products,
                
            }
        default:
            return state
    }
}

export default allTypesReducer;