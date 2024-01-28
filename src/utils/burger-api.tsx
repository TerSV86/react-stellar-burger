import { TForm } from "../pages/ProfilePage/ProfilePage";
import { TOptionsFetch } from "./burger";
import { setCookie, getCookie } from "./cookie";
import { TIngredient } from "./type";

type BurgerApiConfig = {
    baseUrl: string;
    headers: THeaders ;
     /* {
        "Content-Type": "application/json";
        "authorization": string | null;
    } */
}


export const burgerApiConfig: BurgerApiConfig = {
    baseUrl: 'https://norma.nomoreparties.space/api/',
    headers: {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem('accessToken')/* 'Bearer ' + getCookie('token') */,
    },
}

/* type THeaders = {
    'Content-Type': string;
    'authorization': string | null;
} */


export const headers: HeadersInit = {
    "Content-Type": "application/json",
    "authorization": burgerApiConfig.headers.authorization || null,
};

const getRespons = (res: Response) => {
    if (res.ok) {
        return res.json();
    }
    return res.json().then((err: Response) => Promise.reject(((err: Response) => console.log('Ошибка: ', err))));
}



export const getProductData = () => {
    return fetch(`${burgerApiConfig.baseUrl}ingredients`, {
        headers: headers,
    }).then(getRespons)
}


export const getNumberOrder = (selectIngredient: TIngredient) => {

    return fetch(`${burgerApiConfig.baseUrl}orders`, {
        method: "POST",
        headers: headers/* burgerApiConfig.headers */,
        body: JSON.stringify({
            'ingredients': selectIngredient
        })
    }).then(getRespons)
}

export const getMassegeForRecoveryPassword = (email: string) => {

    return fetch(`${burgerApiConfig.baseUrl}password-reset`, {
        method: "POST",
        headers: headers/* burgerApiConfig.headers */,
        body: JSON.stringify({
            "email": email
        })
    }).then(getRespons)
}

export const resetPassword = (pass: string, pin: number) => {

    return fetch(` ${burgerApiConfig.baseUrl}password-reset/reset`, {
        method: "POST",
        headers: headers /* burgerApiConfig.headers */,
        body: JSON.stringify({
            "password": pass,
            "token": pin
        })
    }).then(getRespons)
}

/* export const createUser = () => {
    return fetch(`${burgerApiConfig.baseUrl}auth/register`, {
        method: "POST",
        headers: headers burgerApiConfig.headers,
        body: JSON.stringify({
            "email": "test-data7775@yandex.ru",
            "password": "password",
            "name": "Username"
        })
    }).then(getRespons)
} */

type TUser = {
    email: string;
    password: string;
    login?: string;
}

export const userRegister = ({ email, password, login }: TUser) => {

    return fetch(`${burgerApiConfig.baseUrl}auth/register`, {
        method: "POST",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: headers/* burgerApiConfig.headers */,
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            "email": email,
            "password": password,
            "name": login
        })
    }).then(getRespons)

}

export const loginApi = ({ email, password }: TUser) => {

    return fetch(`${burgerApiConfig.baseUrl}auth/login`, {
        method: "POST",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: headers/* burgerApiConfig.headers */,
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
        headers: headers/* burgerApiConfig.headers */,
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken')
        })
    }).then(getRespons)

}

export const userApi = (data: TForm) => {

    return fetch(`${burgerApiConfig.baseUrl}auth/user`, {
        method: 'PATCH',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: headers /* burgerApiConfig.headers */,
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
        headers: headers /* burgerApiConfig.headers */,
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

/* type TFetchWithRefresh = {
    url: string;
    options: TOptionsFetch;
} */

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