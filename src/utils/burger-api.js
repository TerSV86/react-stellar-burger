const burgerApiConfig = {
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