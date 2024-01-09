import { setCookie, getCookie } from "./cookie";


export const burgerApiConfig = {
    baseUrl: 'https://norma.nomoreparties.space/api/',
    headers: {
        "Content-Type": "application/json",
        "authorization": /* localStorage.getItem('accessToken') */'Bearer ' + getCookie('token'),
    },
}

const getRespons = (res) => {
    if (res.ok) {
        return res.json();
    }
    return res.json().then((err) => Promise.reject((err => console.log('Ошибка: ', err))));
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

    return fetch(`${burgerApiConfig.baseUrl}password-reset`, {
        method: "POST",
        headers: burgerApiConfig.headers,
        body: JSON.stringify({
            "email": email
        })
    }).then(getRespons)
}

export const resetPassword = (pass, pin) => {

    return fetch(` ${burgerApiConfig.baseUrl}password-reset/reset`, {
        method: "POST",
        headers: burgerApiConfig.headers,
        body: JSON.stringify({
            "password": pass,
            "token": pin
        })
    }).then(getRespons)
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
    }).then(getRespons)
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

    return fetch(`${burgerApiConfig.baseUrl}auth/logout`, {
        method: "POST",
        headers: burgerApiConfig.headers,
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken')
        })
    }).then(getRespons)

}

export const userApi = (data) => {

    return fetch(`${burgerApiConfig.baseUrl}auth/user`, {
        method: 'PATCH',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: burgerApiConfig.headers,
        body: JSON.stringify(data),
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
        headers: burgerApiConfig.headers,
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    }).then(getRespons)
}


export const checkReponse = (res) => {

    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const refreshToken = () => {
    
    return fetch(`${burgerApiConfig.baseUrl}auth/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    }).then(checkReponse)

};

export const fetchWithRefresh = async (url, options) => {

    try {
        const res = await fetch(url, options);
        return await checkReponse(res);
    } catch (err) {

        if (err.message === "jwt expired") {

            const refreshData = await refreshToken(); //обновляем токен

            if (!refreshData.success) {
                
                return Promise.reject(refreshData);
            }

            localStorage.setItem("refreshToken", refreshData.refreshToken);
            localStorage.setItem("accessToken", refreshData.accessToken);

            options.headers.authorization = refreshData.accessToken;
            const res = await fetch(url, options); //повторяем запрос

            return await checkReponse(res);

        } else {
            return Promise.reject(err);
        }
    }
};