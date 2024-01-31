import { DELETE_INGREDIENT } from "../dnd/actions/draggable-ingredient";
import { CLOSE_MODAL, OPEN_MODAL, OPEN_MODAL_INGREDIENT } from "./action";
import { INGREDIENTS_LOAD_SUCCESS, LOADING, ERROR, OPEN_MODAL_ORDER_SUCCESS } from './action'
import { TIngredientActions, TIngredientsState, TOpenModalOrder, } from "../../utils/type";

const initialState: TIngredientsState = {
    ingredients: [],
    error: null,
    loading: false,
    openModalOrder: {
        isOpen: false,
        numberOrder: 0,
        isClickButtonOrder: false
    },
};

export const reducer = (state = initialState, action: TIngredientActions) => {
    switch (action.type) {
        case INGREDIENTS_LOAD_SUCCESS:
            return {
                ...state,
                ingredients: [...action.payload.data],
                loading: false 
            }

        case LOADING:

            return {
                ...state,
                loading: true,
                error: null
            }
        case ERROR:
            return {
                ...state,
                error: action.payload,
            }        

        case OPEN_MODAL_ORDER_SUCCESS:       
            return {
                ...state,
                openModalOrder: {
                    isOpen: true ,
                    numberOrder: action.payload.order.number,
                    isClickButtonOrder: true,
                },
            }

        case CLOSE_MODAL:
            return {
                ...state,
                openModalOrder: {
                    ...state.openModalOrder,
                    isOpen: false,
                    numberOrder: 0,
                    isClickButtonOrder: false
                },
                openModalIngredient: null
            }
        default:
            return state;
    }
}