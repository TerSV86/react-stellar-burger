import { getProductData } from "../../utils/burger-api";
import { getNumberOrder } from "../../utils/burger-api";

export const GET_INGREDIENTS = 'GET_INGREDIENTS';


export const ADD_BUN = 'ADD_BUN';


export const ADD_INGREDIENT = 'ADD_INGREDIENT';





/* export const PROCESSING_ORDER = 'PROCESSING_ORDER'; */
export const PROCESSING_ORDER_SUCCESS = 'PROCESSING_ORDER_SUCCESS';

export const INGREDIENTS_LOAD_SUCCESS = 'INGREDIENTS_LOAD_SUCCESS'

export const OPEN_MODAL_ORDER_SUCCESS = 'OPEN_MODAL_ORDER_SUCCESS'

export const OPEN_MODAL_INGREDIENT = 'OPEN_MODAL_INGREDIENT'

export const CLOSE_MODAL = 'CLOSE_MODAL'

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
    return getProductData().then(res => {        
        res.data.map(element => element.board = 'default') 
            
        dispatch({
            type: INGREDIENTS_LOAD_SUCCESS,
            payload: res             
        })
    })
}

export const openModalOrder = (selectIngredient) => (dispatch) => {
    
    return getNumberOrder(selectIngredient).then(res => {
        dispatch({
            type: OPEN_MODAL_ORDER_SUCCESS,
            payload: res 
        })
    })
}

export const openModalIngredient = (ingredient) =>  ({    
    type: OPEN_MODAL_INGREDIENT,
    payload: ingredient    
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})