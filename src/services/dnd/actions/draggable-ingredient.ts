import { TIngredient } from "../../../utils/type";
import { AppDispatch, AppThunk } from "../../../utils/typeThunk";

export const UPDATE_TYPE:'UPDATE_TYPE'  = 'UPDATE_TYPE';
export const ITEM_TYPE:'ITEM_TYPE' = 'ITEM_TYPE';
export const DELETE_INGREDIENT:'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const UPDATE_TYPE_BUN: 'UPDATE_TYPE_BUN' = 'UPDATE_TYPE_BUN';

export const deleteIngredientOther = (newArray: Array<TIngredient>) => ({
    type: DELETE_INGREDIENT,
    payload: newArray    
})

export const addIngredientSort:AppThunk = (newSel:Array<TIngredient>, newSor:Array<TIngredient>) => (dispatch: AppDispatch) => {    
    dispatch({
        type: UPDATE_TYPE,        
        productSort: newSor,
        productSelect: newSel,        
    })
}

export const addIngredientBun: AppThunk = (newArray:Array<TIngredient>) => (dispatch:AppDispatch) => {
    dispatch ({
        type: UPDATE_TYPE_BUN,
        product: newArray,
    })
}