import { UPDATE_TYPE, UPDATE_TYPE_BUN, DELETE_INGREDIENT  } from '../actions/draggable-ingredient'
import { INGREDIENTS_LOAD_SUCCESS, OPEN_MODAL_ORDER_SUCCESS, } from '../../ingredients/action'
import { ITEM_TYPE } from '../actions/draggable-ingredient'
import { TDraggableIngredientAction, TDraggableIngredientsState } from '../../../utils/type'

const initialState: TDraggableIngredientsState = {
    ingredients: [],
    selectIngredient: [],
    sortIngredient: [],
}

export const draggableIngredientReducer = (state = initialState, action:TDraggableIngredientAction) => {
;
    switch (action.type) {
        case UPDATE_TYPE: {             
            
            return {
                ...state,                
                selectIngredient: [...action.productSelect],                
                sortIngredient:[ ...action.productSort],
            }
        }

        case UPDATE_TYPE_BUN: {
            return {
                ...state,
                selectIngredient: [...action.product],
            }
        }

        case ITEM_TYPE: {            
            
            return {
                ...state,
                sortIngredient: action.payload
            }
        }

        case INGREDIENTS_LOAD_SUCCESS:
            return {
                ...state,
                ingredients: [...action.payload.data]
            }

        case OPEN_MODAL_ORDER_SUCCESS:
            return {
                ...state,
                selectIngredient: [],
                sortIngredient: []
            }

        case DELETE_INGREDIENT:
            
            return {
                ...state,
                selectIngredient: action.payload,
                sortIngredient: action.payload,
            }
            
        default:
            return state;
    }
}




