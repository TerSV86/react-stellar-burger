import { UPDATE_TYPE, UPDATE_TYPE_BUN } from '../actions/draggable-ingredient'
import { ITEM_TYPE } from '../actions/draggable-ingredient'

const initialState = {
    ingredients: [],
    selectIngredient: [],
    sortIngredient: [],
}

export const draggableIngredientReducer = (state = initialState, action) => {
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
        case 'INGREDIENTS_LOAD_SUCCESS':
            return {
                ...state,
                ingredients: [...action.payload.data]
            }
        case 'OPEN_MODAL_ORDER_SUCCESS':
            return {
                ...state,
                selectIngredient: [],
                sortIngredient: []
            }

        case 'DELETE_INGREDIENT':
            
            return {
                ...state,
                selectIngredient: /* state.selectIngredient.filter(ingredient => ingredient.randomId !== action.id) */action.payload,
                sortIngredient: /* state.sortIngredient.filter(ingredient => ingredient.randomId !== action.id) */action.payload,
            }
        default:
            return state;
    }
}




