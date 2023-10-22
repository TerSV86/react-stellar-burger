import { setCookie, getCookie } from "./cookie";


export const burgerApiConfig = {
    baseUrl: 'https://norma.nomoreparties.space/api/',
    headers: {
        "Content-Type": "application/json",
    },
}

const getRespons = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export const getProductData = () => {
    return fetch(`${burgerApiConfig.baseUrl}ingredients`, {
        headers: burgerApiConfig.headers,
    }).then(getRespons)
}


export const getNumberOrder = (selectIngredient) => {
    return fetch(`${burgerApiConfig.baseUrl}orders`, {
        method: "POST",
        headers: burgerApiConfig.headers,
        body: JSON.stringify({
            'ingredients': selectIngredient
        })
    }).then(getRespons)
}

export const getMassegeForRecoveryPassword = (email) => {
    console.log(email);
    return fetch(`${burgerApiConfig.baseUrl}password-reset`, {
        method: "POST",
        headers: burgerApiConfig.headers,
        body: JSON.stringify({
            "email": email
        })
    })
}

export const resetPassword = (pass, pin) => {

    return fetch(` https://norma.nomoreparties.space/api/password-reset/reset`, {
        method: "POST",
        headers: burgerApiConfig.headers,
        body: JSON.stringify({
            "password": pass,
            "token": pin
        })
    })
}

export const createUser = () => {
    return fetch(`${burgerApiConfig.baseUrl}auth/register`, {
        method: "POST",
        headers: burgerApiConfig.headers,
        body: JSON.stringify({
            "email": "test-data7775@yandex.ru",
            "password": "password",
            "name": "Username"
        })
    })
}

export const userRegister = ({ email, password, login }) => {

    return fetch(`${burgerApiConfig.baseUrl}auth/register`, {
        method: "POST",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: burgerApiConfig.headers,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            "email": email,
            "password": password,
            "name": login
        })
    }).then(getRespons)
}

export const loginApi = ({ email, password }) => {
    return fetch(`${burgerApiConfig.baseUrl}auth/login`, {
        method: "POST",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: burgerApiConfig.headers,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            "password": password,
            "email": email
        })
    }).then(getRespons)
}

export const logoutApi = () => {
    console.log('logoutApi');
    return fetch(`${burgerApiConfig.baseUrl}auth/logout`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            authorization: localStorage.getItem('accessToken')
        },
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken')
        })
    })
}

export const userApi = (data) => {
    console.log('userApi');
    return fetch(`${burgerApiConfig.baseUrl}auth/user`, {
        method: 'PATCH',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',            
            Authorization: 'Bearer ' + getCookie('token')
        },
        body: JSON.stringify({
           
            "name": data.name
        }),       
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    }).then(getRespons)
}

export const getUserApi = () => {
    return fetch(`${burgerApiConfig.baseUrl}auth/user`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',            
            Authorization: 'Bearer ' + getCookie('token')
        },        
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    }).then(getRespons) 
}