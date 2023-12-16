import { LOGIN_ERROR, LOGIN_SEND, LOGIN_SUCCESS, LOGOUT, REGISTER_ERROR, REGISTER_SEND, REGISTER_SUCCESS, SET_USER } from "../actions/actions";
const initialState = {
    user: null,
    tokenUpdate: false,
    tokenUpdateSuccess: false,
    registerSending: false,
    registerError: null,
    loginSending: false,
    loginError: null,
    isAuthChecked: false, //*
}

export const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case REGISTER_SEND:
            return {
                ...state,
                registerSending: true,
                registerError: false
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registerSending: false,
                registerError: false,
                user: action.payload,
                tokenUpdate: true,
                tokenUpdateSuccess: true
            }
        case REGISTER_ERROR:
            return {
                ...state,
                registerError: action.payload
            }
        case LOGIN_SEND:
            return {
                ...state,
                loginSending: true,
                loginError: false
            }
        case LOGIN_SUCCESS:
           console.log('LoginSuccess',action.payload);
            return {
                ...state,
                loginSending: false,
                loginError: false,
                user: action.payload,
                tokenUpdate: true,
                tokenUpdateSuccess: true
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loginError: action.payload
            }
        case LOGOUT:
            
            return {
                ...state,
                user: null,
                tokenUpdate: false,
                tokenUpdateSuccess: false,
                registerSending: false,
                registerError: null,
                loginSending: false,
                loginError: null
            }
        case SET_USER:
           
            return {
                ...state,
                user: {
                    ...state,
                    user: action.payload,                    
                },
                isAuthChecked: true, //*
            }
        default:
            return state
    }

}