import { CLOSE_MODAL, OPEN_MODAL_INGREDIENT, SEND_ORDER_BURGER } from "./action";


const initialState = {
    ingredients: [],
    selectIngredient: [],
    error: null,
    loading: false
};

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'INGREDIENTS_LOAD_SUCCESS':
            return {
                ...state,
                ingredients: [...action.payload.data],
                loading: false //*
            }

        case 'LOADING':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'ERROR':
            return {
                ...state,
                error: action.payload,
            }
        case 'ADD_INGREDIENT':
            const newStateDelBun = state.selectIngredient.filter(ingredient => ingredient.type !== 'bun')
            console.log(newStateDelBun);
            return {
                ...state,
                selectIngredient: [...newStateDelBun, action.payload]
            }
        case 'DELETE_INGREDIENT':
            const newProduct = state.selectIngredient.filter((ingr) => ingr.id !== action.id)
            return {
                ...state,
                selectIngredient: [...newProduct]
            }

        case 'OPEN_MODAL_ORDER_SUCCESS':
            return {
                ...state,
                openModalOrder: {
                    isOpen: !state.isOpen,
                    numberOrder: action.payload.order.number,
                    isClickButtonOrder: !state.isClickButtonOrder,
                },               
            }
            

        case OPEN_MODAL_INGREDIENT:

            return {
                ...state,
                openModalOrder: {
                    ...state.openModalOrder,
                    isOpen: !state.isOpen
                },
                openModalIngredient: action.payload

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