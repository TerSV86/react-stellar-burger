import { DELETE_INGREDIENT } from "../dnd/actions/draggable-ingredient";
import { CLOSE_MODAL, OPEN_MODAL, OPEN_MODAL_INGREDIENT,/*  SEND_ORDER_BURGER */ } from "./action";
import { INGREDIENTS_LOAD_SUCCESS, LOADING, ERROR, /* ADD_INGREDIENT,  */OPEN_MODAL_ORDER_SUCCESS, TIngredientActions, TOpenModalOrder } from './action'
type TIngredient = {
    board: string,
    colories: number,
    carbohydrates: number,
    fat: number,
    image: string,
    image_large: string,
    image_mobile: string,
    name: string,
    prise: number,
    proteines: number,
    type: string,
    __v: number,
    _id: string
}
type TIngredientsState = {
    ingredients: ReadonlyArray<TIngredient>;
    /* selectIngredient: ReadonlyArray<TIngredient>; */
    error: any | null;
    loading: boolean;
    openModalOrder: TOpenModalOrder;    
}

const initialState: TIngredientsState = {
    ingredients: [],
    /* selectIngredient: [], */
    error: null,
    loading: false,
    openModalOrder: {
        isOpen: false,
        numberOrder: 0,
        isClickButtonOrder: false
    },
};

export const reducer = (state = initialState, action:TIngredientActions) => {

    switch (action.type) {
        case INGREDIENTS_LOAD_SUCCESS:
            console.log('action', action);
            
            return {
                ...state,
                ingredients: [...action.payload.data],
                loading: false //*
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
        /* case ADD_INGREDIENT:
            const newStateDelBun = state.selectIngredient.filter(ingredient => ingredient.type !== 'bun')

            return {
                ...state,
                selectIngredient: [...newStateDelBun, action.payload]
            }
        case DELETE_INGREDIENT:
            //const newProduct = state.selectIngredient.filter((ingr) => ingr.id !== action.id) 
            console.log('DelIngr',action.payload);
            
            return {
                ...state,
                selectIngredient: action.payload//[...newProduct]
            } */

        case OPEN_MODAL_ORDER_SUCCESS:
            console.log('openModalOrder', action.payload);
            
            return {
                ...state,
                openModalOrder: {
                    isOpen: true /* !state.isOpen */,
                    numberOrder: action.payload.order.number,
                    isClickButtonOrder: /* !state.isClickButtonOrder */true,
                },
            }
        

        /* case OPEN_MODAL_INGREDIENT:

            return {
                ...state,
                openModalOrder: {
                    ...state,
                    isOpen: true
                },
                openModalIngredient: action.payload

            } */
        /* case OPEN_MODAL:

            return {
                ...state,
                openModalOrder: {
                    ...state.openModalOrder,
                    isOpen: !state.isOpen
                },
            } */
        case CLOSE_MODAL:
            return {
                ...state,
                openModalOrder: {
                    ...state/* .openModalOrder */,
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