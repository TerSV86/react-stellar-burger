import { optionsFetchWithRefresh, optionsFetchWithRefreshPostOrders } from "../../utils/burger";
import { fetchWithRefresh, getProductData } from "../../utils/burger-api";
import { getNumberOrder } from "../../utils/burger-api";
import { burgerApiConfig } from "../../utils/burger-api";
import { TIngredient, } from "../../utils/type";
import { AppThunk } from "../../utils/typeThunk";


export const GET_INGREDIENTS: 'GET_INGREDIENTS' = 'GET_INGREDIENTS';
export const INGREDIENTS_LOAD_SUCCESS: 'INGREDIENTS_LOAD_SUCCESS' = 'INGREDIENTS_LOAD_SUCCESS';
export const OPEN_MODAL_ORDER_SUCCESS: 'OPEN_MODAL_ORDER_SUCCESS' = 'OPEN_MODAL_ORDER_SUCCESS';
export const OPEN_MODAL_INGREDIENT: 'OPEN_MODAL_INGREDIENT' = 'OPEN_MODAL_INGREDIENT';
export const CLOSE_MODAL: 'CLOSE_MODAL' = 'CLOSE_MODAL';
export const ERROR: 'ERRORS' = 'ERRORS';
export const LOADING: 'LOADING' = 'LOADING';
export const OPEN_MODAL: 'OPEN_MODAL' = 'OPEN_MODAL';


export const loadIngredients: AppThunk = () => (dispatch) => {
    dispatch({type: LOADING })
    return getProductData()
        .then((res) => {
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

export const openModalOrder:AppThunk = (selectIngredient: TIngredient) => (dispatch) => {
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

export const closeModal = () => ({
    type: CLOSE_MODAL
})

