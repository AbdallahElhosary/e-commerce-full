import { CREATE_ACCOUNT, FORGET_PASSWORD, LOGIN } from "../type"
const inital = {
    createUser: [],
    loginUser: [],
    forgetPassword: [],
    loading: true,
}

const authReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_ACCOUNT:
            return {
                ...state,
                createUser: action.payload,
                loading: false,
            }
        case LOGIN:
            return {
                ...state,
                loginUser: action.payload,
            }
        case FORGET_PASSWORD:
            return {
                ...state,
                forgetPassword: action.payload,
            }
        default:
            return state
    }
}

export default authReducer;