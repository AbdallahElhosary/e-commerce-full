import useDeleteData from "../../hooks/useDelete";
import  { useEdittDataImage } from "../../hooks/useEdit";
import {useGetData} from "../../hooks/useGetData";
import { useInsertDataImage } from "../../hooks/useInsertData";
import { CREATE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_ALL_PRODUCTS, GET_ERROR, GET_SIMILER_PRODUCTS, GET_ONE_PRODUCTS, GET_PRODUCT_LIKE } from "../type";


// funciton to create a product
export const createProduct = (data) => async (dispatch) => {
    try {
        const response = await useInsertDataImage(`/api/v1/products`, data);
        dispatch({
            type: CREATE_PRODUCT,
            payload: response,
            loading:true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Erorr" + e
        })
    }
}

// function to get all products

export const getAllProduct = (limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?limit=${limit}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response,
            loading:true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Erorr" + e
        })
    }
}
// Action to get all products with pagination
export const getAllProductsPage = (page,limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?limit=${limit}&page=${page}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Erorr" + e
        })
    }
}


//get one similer products
export const getSimilerProducts = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?category=${id}`);
        dispatch({
            type: GET_SIMILER_PRODUCTS,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}


// Action to delete a product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/products/${id}`);
        dispatch({
            type: DELETE_PRODUCT,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

// Action to Edit a product
export const editProduct = (id, formData) => async (dispatch) => {
    try {
        const response = await useEdittDataImage(`/api/v1/products/${id}`,formData);
        dispatch({
            type: EDIT_PRODUCT,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

// Action to get all products with pagination
export const getAllProductsSearch = (queryString) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?${queryString}`);
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Erorr" + e
        })
    }
}
// Action to get one product by id
export const getOneProduct = (prodID) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products/${prodID}`);
        dispatch({
            type: GET_ONE_PRODUCTS,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Erorr" + e
        })
    }
}
//get one product with id
export const getProductLike = (id) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/v1/products?category=${id}`);
        dispatch({
            type: GET_PRODUCT_LIKE,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}