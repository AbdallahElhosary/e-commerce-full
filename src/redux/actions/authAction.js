import { useInsertData } from "../../hooks/useInsertData";
import { CREATE_ACCOUNT, FORGET_PASSWORD, LOGIN } from "../type";

// Method to create a Account
export const createAccount = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/signup`, data);
        dispatch({
            type: CREATE_ACCOUNT,
            payload: response,
            loading:true
        })
    } catch (e) {
        dispatch({
            type: CREATE_ACCOUNT,
            payload:  e.response
        })
    }
}

// Method to Login
export const loginAction = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/login`, data);
        dispatch({
            type: LOGIN,
            payload: response,
            loading:true
        })
    } catch (e) {
        dispatch({
            type: LOGIN,
            payload:  e.response
        })
    }
}

// Method to Forget Password
export const forgetPassword = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/auth/forgotPasswords`, data);
        dispatch({
            type: FORGET_PASSWORD,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: FORGET_PASSWORD,
            payload: e.response
        })
    }
}