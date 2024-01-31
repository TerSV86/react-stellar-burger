import { LOGIN_ERROR, LOGIN_SEND, LOGIN_SUCCESS, LOGOUT, REGISTER_ERROR, REGISTER_SEND, REGISTER_SUCCESS, SET_USER } from "../services/auth/actions/actions";

export interface IUser {
    email: string;
    name: string;
}

export type TAuthState = {
    user: null | IUser;
    tokenUpdate: boolean;
    tokenUpdateSuccess: boolean;
    registerSending: boolean;
    registerError: any; 
    loginSending: boolean;
    loginError: any; 
    isAuthChecked: boolean;
}

export interface IRegistrSend {
    readonly type: typeof REGISTER_SEND;
}

export interface IRegistrSuccess {
    readonly type: typeof REGISTER_SUCCESS;
    readonly payload: IUser;
}

export interface IRegistrError {
    readonly type: typeof REGISTER_ERROR;
    readonly payload: any; 
}

export interface ILoginSend {
    readonly type: typeof LOGIN_SEND;
}

export interface ILoginSuccess {
    readonly type: typeof LOGIN_SUCCESS;
    readonly payload: IUser;

}

export interface ILoginError {
    readonly type: typeof LOGIN_ERROR;
    readonly payload: any; 
}

export interface ILogout {
    readonly type: typeof LOGOUT;
}

export interface ISetUser {
    readonly type: typeof SET_USER;
    readonly payload: IUser
}

export type TAuthActions =
    | IRegistrSend
    | IRegistrSuccess
    | IRegistrError
    | ILoginSend
    | ILoginSuccess
    | ILoginError
    | ILogout
    | ISetUser;

