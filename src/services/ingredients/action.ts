import { optionsFetchWithRefresh, optionsFetchWithRefreshPostOrders } from "../../utils/burger";
import { fetchWithRefresh, getProductData, /* sendBurgerApi */ } from "../../utils/burger-api";
import { getNumberOrder } from "../../utils/burger-api";
import { burgerApiConfig } from "../../utils/burger-api";
import { DELETE_INGREDIENT, deleteIngredientOther } from "../dnd/actions/draggable-ingredient";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { store } from "../..";

import { TIngredient, } from "../../utils/type";
import { AppDispatch, AppThunk } from "../../utils/typeThunk";


export const GET_INGREDIENTS: 'GET_INGREDIENTS' = 'GET_INGREDIENTS';
/* export const ADD_BUN:'ADD_BUN' = 'ADD_BUN'; */
/* export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT'; */
/* export const PROCESSING_ORDER_SUCCESS:'PROCESSING_ORDER_SUCCESS' = 'PROCESSING_ORDER_SUCCESS'; */
export const INGREDIENTS_LOAD_SUCCESS: 'INGREDIENTS_LOAD_SUCCESS' = 'INGREDIENTS_LOAD_SUCCESS';
export const OPEN_MODAL_ORDER_SUCCESS: 'OPEN_MODAL_ORDER_SUCCESS' = 'OPEN_MODAL_ORDER_SUCCESS';
export const OPEN_MODAL_INGREDIENT: 'OPEN_MODAL_INGREDIENT' = 'OPEN_MODAL_INGREDIENT';
export const CLOSE_MODAL: 'CLOSE_MODAL' = 'CLOSE_MODAL';
export const ERROR: 'ERRORS' = 'ERRORS';
export const LOADING: 'LOADING' = 'LOADING';
export const OPEN_MODAL: 'OPEN_MODAL' = 'OPEN_MODAL';

/* export const SEND_ORDER_BURGER: 'SEND_ORDER_BURGER' = 'SEND_ORDER_BURGER'; */




/* export const addBunIngredient = (element) => ({
    type: ADD_BUN,
    payload: {
        ingredient: element,
        id: Math.random()
    }
}) */

/* export const addIngredientOther = (element) => ({
    type: ADD_INGREDIENT,
    payload: {
        ingredient: element,
        id: Math.random()
    }
}) */

export const loadIngredients: AppThunk = () => (dispatch: AppDispatch) => {

    dispatch({type: LOADING })
    return getProductData()
        .then(res => {
            res.data.map((element:TIngredient) => {
                element.board = 'default';
            })
            dispatch({
                type: INGREDIENTS_LOAD_SUCCESS,
                payload: res,
                loading: false
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err.message
            })
        })
}

export const openModalOrder:AppThunk = (selectIngredient: TIngredient) => (dispatch: AppDispatch) => {

    return getNumberOrder(selectIngredient)
        .then(res => {

            dispatch({
                type: OPEN_MODAL_ORDER_SUCCESS,
                payload: res,
                isClickButtonOrder: true
            })
        })
        .catch(err => {

            dispatch({
                type: ERROR,
                payload: err.message
            })

            fetchWithRefresh(`${burgerApiConfig.baseUrl}orders`, optionsFetchWithRefreshPostOrders(selectIngredient))
                .then((res) => {
                    dispatch({
                        type: OPEN_MODAL_ORDER_SUCCESS,
                        payload: res
                    })
                })


        })
}

/* export const openModalIngredient = (ingredient) => ({
    type: OPEN_MODAL_INGREDIENT,
    payload: ingredient
}) */

/* export const openModal = () => ({
    type: OPEN_MODAL
}) */

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

/* const checkSetUserOrders = (selectIngredient) => (dispatch) => {
    
    fetchWithRefresh(`${burgerApiConfig.baseUrl}auth/user`, optionsFetchWithRefresh)
        .then((res) => {
            
            getNumberOrder(selectIngredient)
        })
} */
