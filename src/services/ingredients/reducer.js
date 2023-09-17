import { CLOSE_MODAL, OPEN_MODAL_INGREDIENT } from "./action";

const initialState = {
    ingredients: [],
    selectIngredient: [],
};

export const reducer = (state = initialState, action) => {
   
    switch (action.type) {

        case 'INGREDIENTS_LOAD_SUCCESS':
            return {
                ...state,
                ingredients: [...action.payload.data]
            }

        case 'ADD_INGREDIENT':
            console.log('addIng');
            const newStateDelBun = state.selectIngredient.filter(ingredient => ingredient.type !== 'bun')
            console.log(newStateDelBun);
            return {
                ...state,
                selectIngredient: [...newStateDelBun, action.payload]
            }
        case 'DELETE_INGREDIENT':
            console.log(action.element);
            const newProduct = state.selectIngredient.filter((ingr) => ingr.id !== action.id)
            console.log(newProduct);
            return {
                ...state,
                selectIngredient: [...newProduct]
            }

        case 'OPEN_MODAL_ORDER_SUCCESS':
            console.log(action.payload.order.number);
            return {
                ...state,
                openModalOrder: {
                    isOpen: !state.isOpen,
                    numberOrder: action.payload.order.number,
                    isClickButtonOrder: !state.isClickButtonOrder,
                }
            }

        case OPEN_MODAL_INGREDIENT:
            console.log('OPEN_MODAL_INGREDIENT')
            console.log(action);
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