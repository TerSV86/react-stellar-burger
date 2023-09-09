import { getProductData } from "../../utils/burger-api";
import { getNumberOrder } from "../../utils/burger-api";

export const GET_INGREDIENTS = 'GET_INGREDIENTS';


export const ADD_BUN = 'ADD_BUN';


export const ADD_INGREDIENT = 'ADD_INGREDIENT';


export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';


/* export const PROCESSING_ORDER = 'PROCESSING_ORDER'; */
export const PROCESSING_ORDER_SUCCESS = 'PROCESSING_ORDER_SUCCESS';

export const INGREDIENTS_LOAD_SUCCESS = 'INGREDIENTS_LOAD_SUCCESS'

export const OPEN_MODAL_ORDER_SUCCESS = 'OPEN_MODAL_ORDER_SUCCESS'


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

export const deleteIngredientOther = (id) => ({
    type: DELETE_INGREDIENT,
    id
})

export const loadIngredients = () => (dispatch) => {    
    return getProductData().then(res => {        
        dispatch({
            type: INGREDIENTS_LOAD_SUCCESS,
            payload: res
        })
    })
}

export const openModalOrder = (selectIngredient) => (dispatch) => {
    console.log('open');
    return getNumberOrder(selectIngredient).then(res => {
        dispatch({
            type: OPEN_MODAL_ORDER_SUCCESS,
            payload: res 
        })
    })
}