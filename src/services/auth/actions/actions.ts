import { loginApi, userRegister, logoutApi, userApi, getUserApi, fetchWithRefresh, burgerApiConfig } from "../../../utils/burger-api";
import { getCookie, setCookie } from "../../../utils/cookie";
import { optionsFetchWithRefresh } from "../../../utils/burger";
import { refreshToken, checkReponse } from "../../../utils/burger-api";
import { AppDispatch, AppThunk } from "../../../utils/typeThunk";

export const REGISTER_SEND: 'AUTH/REGISTER_SEND' = 'AUTH/REGISTER_SEND'
export const REGISTER_SUCCESS: 'AUTH/REGISTER_SUCCESS' = 'AUTH/REGISTER_SUCCESS';
export const REGISTER_ERROR: 'AUTH/REGISTER_ERROR' = 'AUTH/REGISTER_ERROR'

export const LOGIN_SEND: 'AUTH/LOGIN_SEND' = 'AUTH/LOGIN_SEND';
export const LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS' = 'AUTH/LOGIN_SUCCESS';
export const LOGIN_ERROR: 'AUTH/LOGIN_ERROR' = 'AUTH/LOGIN_ERROR'

export const LOGOUT: 'AUTH/LOGOUT' = 'AUTH/LOGOUT'
export const SET_USER: 'AUTH/GET_USER' = 'AUTH/GET_USER'


export const register: AppThunk = ({ login, password, email }) => (dispatch: AppDispatch) => {

    dispatch({ type: REGISTER_SEND })
    return userRegister({ login, password, email })
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.user
            })
            console.log('regisrt', res.user);

            const token = res.accessToken.split('Bearer ')[1]
            setCookie('token', token, { expires: 1200 })

            burgerApiConfig.headers.authorization = 'Bearer ' + getCookie('token')

            localStorage.setItem('accessToken', res.accessToken)
            localStorage.setItem('refreshToken', res.refreshToken)
        })
        .catch((err) => {
            dispatch({
                type: REGISTER_ERROR,
                payload: err
            })
            console.error('Ошибка регистрации:', err)
        })
}

export const login: AppThunk = ({ email, password }) => (dispatch: AppDispatch) => {
    dispatch({ type: LOGIN_SEND });
    return loginApi({ email, password })
        .then((res) => {
            console.log('login', res);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.user
            })
            const token = res.accessToken.split('Bearer ')[1]
            setCookie('token', token, { expires: 1200 })
            burgerApiConfig.headers.authorization = 'Bearer ' + getCookie('token')
            console.log('login cookie', burgerApiConfig.headers.authorization = 'Bearer ' + getCookie('token'));
            localStorage.setItem('accessToken', res.accessToken)
            localStorage.setItem('refreshToken', res.refreshToken)
        })
        .catch((err) => {

            dispatch({
                type: LOGIN_ERROR,
                payload: err
            })
            fetchWithRefresh(`${burgerApiConfig.baseUrl}/auth/token`)
            return Promise.reject(err)
        })
}

export const logout: AppThunk = () => (dispatch: AppDispatch) => {
    return logoutApi()
        .then((res) => {
            dispatch({
                type: LOGOUT,
            })
            localStorage.clear()
            setCookie('token', '', { expires: -1 })
        })
        .catch((err) => {
            console.error('Ошибка при выходе:', err)
        })

}

export const getUser: AppThunk = (data) => (dispatch: AppDispatch) => {

    return userApi(data)
        .then((res) => {
            dispatch({
                type: SET_USER,
                payload: res.user
            })
        })
        .catch((err) => {
            dispatch({
                type: LOGIN_ERROR,
                payload: err
            })
            console.error('Ошибка получения данных о пользователе:', err)
        })
}



export const getUser1: AppThunk = () => (dispatch: AppDispatch) => {

    return getUserApi()
        .then((res) => {

            dispatch({
                type: SET_USER,
                payload: res.user
            })
        })
        .catch((err) => {

            dispatch({
                type: LOGIN_ERROR,
                payload: err
            })
            console.error('Ошибка получения данных о пользователе:', err)
        })
}

export const checkAutoLogin: AppThunk = () => (dispatch: AppDispatch) => {

    const token = localStorage.getItem('accessToken');
    console.log(token);
    if (!token) {
        return;
    }
    fetchWithRefresh(`${burgerApiConfig.baseUrl}auth/user`, optionsFetchWithRefresh)
        .then((res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res
            })

        })
        .catch((err) => {

            dispatch({
                type: LOGIN_ERROR,
                payload: err
            })
            console.error('Ошибка при автологировании:', err)
        })
}




