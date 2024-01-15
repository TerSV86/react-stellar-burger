import {v4 as uuid4} from 'uuid'
export const UPDATE_TYPE:'UPDATE_TYPE'  = 'UPDATE_TYPE';

export const ITEM_TYPE:'ITEM_TYPE' = 'ITEM_TYPE'

export const DELETE_INGREDIENT:'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';

export const UPDATE_TYPE_BUN: 'UPDATE_TYPE_BUN' = 'UPDATE_TYPE_BUN';

export const deleteIngredientOther = (ingredients) => ({
    type: DELETE_INGREDIENT,
    payload: ingredients    
})

export const addIngredientSort = (newSel, newSor) => (dispatch) => {
    
    dispatch({
        type: UPDATE_TYPE,        
        productSort: newSor,
        productSelect: newSel,        
    })
}


export const addIngredientBun = (newArray) => (dispatch) => {
    dispatch ({
        type: UPDATE_TYPE_BUN,
        product: newArray,
    })
}