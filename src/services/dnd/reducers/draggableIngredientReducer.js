import { UPDATE_TYPE } from '../actions/draggable-ingredient'
import { ITEM_TYPE } from '../actions/draggable-ingredient'

const initialState = {
    ingredients: [],
    selectIngredient: [],
    sortIngredient: [],
}

export const draggableIngredientReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_TYPE: {
            const addIngredient = state.ingredients.find(ingredient => ingredient._id === action.id)
            let newStateSelectIngerdient;
            let newSortIngredient;
            if (addIngredient.type === 'bun') {
                newStateSelectIngerdient = state.selectIngredient.filter(ingredient => ingredient.type !== 'bun');
                newSortIngredient = state.selectIngredient.filter(ingredient => ingredient.type !== 'bun')
            } else {
                newStateSelectIngerdient = state.selectIngredient;
                newSortIngredient = [...state.sortIngredient, addIngredient];                
            }
            return {
                ...state,
                ingredients: state.ingredients.filter(ingredient => ingredient._id === action.id ? {
                    ...ingredient.board = action.board
                } : ingredient),

                selectIngredient: [...newStateSelectIngerdient, addIngredient],

                sortIngredient: newSortIngredient,

            }
        }

        case ITEM_TYPE: {
            const item = state.sortIngredient[action.dragIndex.index]
            const newItems = state.sortIngredient.filter((i, idx) => idx !== action.dragIndex.index);
            newItems.splice(action.hoverIndex, 0, item)
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

        case 'DELETE_INGREDIENT':
            return {
                ...state,
                selectIngredient: state.selectIngredient.filter(ingredient => ingredient._id !== action.id),
                sortIngredient: state.sortIngredient.filter(ingredient => ingredient._id !== action.id)
            }
        default:
            return state;
    }
}