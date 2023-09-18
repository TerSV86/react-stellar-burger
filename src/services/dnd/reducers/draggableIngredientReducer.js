import { UPDATE_TYPE } from '../actions/draggable-ingredient'
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
            let newStateSelectIngerdient;            
            let newSortIngredient;
            if (action.product.type === 'bun') {
                newStateSelectIngerdient = state.selectIngredient.filter(ingredient => ingredient.type !== 'bun');
                newSortIngredient = state.selectIngredient.filter(ingredient => ingredient.type !== 'bun')
            } else {
                newStateSelectIngerdient = state.selectIngredient;
                newSortIngredient = [...state.sortIngredient, action.product];                
            }
            
            return {
                ...state,
                ingredients: state.ingredients.filter(ingredient => ingredient._id === action.id ? {
                    ...ingredient.board = action.board
                } : ingredient),
                selectIngredient: [...newStateSelectIngerdient, action.product],
                sortIngredient: newSortIngredient,
            }
        }

        case ITEM_TYPE: {            
            const item = state.sortIngredient[action.dragIndexIngredient.index]
            const newItems = state.sortIngredient.filter((i, idx) => idx !== action.dragIndexIngredient.index);
            newItems.splice(action.hoverIndexIngredient, 0, item)
            return {
                ...state,
                sortIngredient: newItems
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
                selectIngredient: []
            }

        case 'DELETE_INGREDIENT':
            
            return {
                ...state,
                selectIngredient: state.selectIngredient.filter(ingredient => ingredient.randomId !== action.id),
                sortIngredient: state.sortIngredient.filter(ingredient => ingredient.randomId !== action.id)
            }
        default:
            return state;
    }
}