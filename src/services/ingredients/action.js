import { getProductData, sendBurgerApi } from "../../utils/burger-api";
import { getNumberOrder } from "../../utils/burger-api";

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const ADD_BUN = 'ADD_BUN';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const PROCESSING_ORDER_SUCCESS = 'PROCESSING_ORDER_SUCCESS';
export const INGREDIENTS_LOAD_SUCCESS = 'INGREDIENTS_LOAD_SUCCESS';
export const OPEN_MODAL_ORDER_SUCCESS = 'OPEN_MODAL_ORDER_SUCCESS';
export const OPEN_MODAL_INGREDIENT = 'OPEN_MODAL_INGREDIENT';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const ERROR = 'ERRORS';
export const LOADING = 'LOADING';
export const OPEN_MODAL = 'OPEN_MODAL';

export const SEND_ORDER_BURGER = 'SEND_ORDER_BURGER';



export const addBunIngredient = (element) => ({
    type: ADD_BUN,
    payload: {
        ingredient: element,
        id: Math.random()
    }
})

export const addIngredientOther = (element) => ({
    type: ADD_INGREDIENT,
    payload: {
        ingredient: element,
        id: Math.random()
    }
})

export const loadIngredients = () => (dispatch) => {
    console.log('lod');
    dispatch({
        type: LOADING
    })
    return getProductData()
        .then(res => {
            res.data.map((element) => {
                element.board = 'default';
            })
            dispatch({
                type: INGREDIENTS_LOAD_SUCCESS,
                payload: res
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err.message
            })
        })
}

export const openModalOrder = (selectIngredient) => (dispatch) => {
    return getNumberOrder(selectIngredient)
    .then(res => {
        dispatch({
            type: OPEN_MODAL_ORDER_SUCCESS,
            payload: res
        })
    })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err.message
            })
        })
}

export const openModalIngredient = (ingredient) => ({
    type: OPEN_MODAL_INGREDIENT,
    payload: ingredient
})

export const openModal = () => console.log('action click') || ({
    type: OPEN_MODAL
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})

/* export const sendOrderBurger = (ingredient) => (dispatch) => {
    return sendBurgerApi(ingredient).then(res => {
        dispatch({
            type: SEND_ORDER_BURGER,
            payload: ingredient
        })
    })
} */

