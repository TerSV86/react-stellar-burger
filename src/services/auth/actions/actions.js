import { loginApi, userRegister, logoutApi, userApi, getUserApi, fetchWithRefresh, burgerApiConfig } from "../../../utils/burger-api";
import { getCookie, setCookie } from "../../../utils/cookie";
import { refreshToken, checkReponse } from "../../../utils/burger-api";

export const REGISTER_SEND = 'AUTH/REGISTER_SEND'
export const REGISTER_SUCCESS = 'AUTH/REGISTER_SUCCESS';
export const REGISTER_ERROR = 'AUTH/REGISTER_ERROR'

export const LOGIN_SEND = 'AUTH/LOGIN_SEND';
export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'AUTH/LOGIN_ERROR'

export const LOGOUT = 'AUTH/LOGOUT'
export const SET_USER = 'AUTH/GET_USER'


export const register = ({ login, password, email }) => (dispatch) => {

    dispatch({ type: REGISTER_SEND })
    return userRegister({ login, password, email })
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res
            })

            const token = res.accessToken.split('Bearer ')[1]
            setCookie('token', token)
            localStorage.setItem('accessToken', res.accessToken)
            localStorage.setItem('refreshToken', res.refreshToken)
        })
        .catch((err) => {
            dispatch({
                type: REGISTER_ERROR,
                payload: err
            })
            return Promise.reject(err)
        })
}

export const login = ({ email, password }) => (dispatch) => {
    dispatch({ type: LOGIN_SEND });
    return loginApi({ email, password })
        .then((res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res
            })
            const token = res.accessToken.split('Bearer ')[1]
            setCookie('token', token, { expires: 1000 })
            localStorage.setItem('accessToken', res.accessToken)
            localStorage.setItem('refreshToken', res.refreshToken)
        })
        .catch((err) => {
            dispatch({
                type: LOGIN_ERROR,
                payload: err
            })
            fetchWithRefresh('https://norma.nomoreparties.space/api/auth/token')
            return Promise.reject(err)
        })
}

export const logout = () => (dispatch) => {
    return logoutApi()
        .then((res) => {
            dispatch({
                type: LOGOUT,
            })
            localStorage.clear()
        })

}

export const getUser = (data) => (dispatch) => {
    console.log('getUser', data);
    return userApi(data)
        .then((res) => {
            console.log(res.user);
            dispatch({
                type: SET_USER,
                payload: res.user
            })
        })
}



export const getUser1 = () => (dispatch) => {

    return getUserApi()
        .then((res) => {
            console.log('Получение пользователя ', res);
            dispatch({
                type: SET_USER,
                payload: res.user
            })
        })


    /* .catch((err) => {
        console.log(err);
        dispatch({
            type: LOGIN_ERROR,
            payload: err
        })
        
        
        return Promise.reject(err)
    }) */
}

export const getUserRefresh = () => (dispatch) => {
    console.log(localStorage.accessToken);
    return fetchWithRefresh(`${burgerApiConfig.baseUrl}auth/user`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.accessToken/* 'Bearer ' + getCookie('token') */
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    })
        .then((res) => {
            console.log('userRefresh', res);
            dispatch({
                type: SET_USER,
                payload: res.user
            })
        })
}




