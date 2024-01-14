import { optionsFetchWithRefresh, optionsFetchWithRefreshPostOrders } from "../../utils/burger";
import { fetchWithRefresh, getProductData, /* sendBurgerApi */ } from "../../utils/burger-api";
import { getNumberOrder } from "../../utils/burger-api";
import { burgerApiConfig } from "../../utils/burger-api";
import { DELETE_INGREDIENT, deleteIngredientOther } from "../dnd/actions/draggable-ingredient";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { store } from "../..";

export const GET_INGREDIENTS: 'GET_INGREDIENTS' = 'GET_INGREDIENTS';
/* export const ADD_BUN:'ADD_BUN' = 'ADD_BUN'; */
/* export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT'; */
/* export const PROCESSING_ORDER_SUCCESS:'PROCESSING_ORDER_SUCCESS' = 'PROCESSING_ORDER_SUCCESS'; */
export const INGREDIENTS_LOAD_SUCCESS: 'INGREDIENTS_LOAD_SUCCESS' = 'INGREDIENTS_LOAD_SUCCESS';
export const OPEN_MODAL_ORDER_SUCCESS: 'OPEN_MODAL_ORDER_SUCCESS' = 'OPEN_MODAL_ORDER_SUCCESS';
export const OPEN_MODAL_INGREDIENT: 'OPEN_MODAL_INGREDIENT' = 'OPEN_MODAL_INGREDIENT';
export const CLOSE_MODAL: 'CLOSE_MODAL' = 'CLOSE_MODAL';
export const ERROR: 'ERRORS' = 'ERRORS';
export const LOADING: 'LOADING' = 'LOADING';
export const OPEN_MODAL: 'OPEN_MODAL' = 'OPEN_MODAL';

/* export const SEND_ORDER_BURGER: 'SEND_ORDER_BURGER' = 'SEND_ORDER_BURGER'; */

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

export type TOpenModalOrder = {
    isOpen: boolean,
    numberOrder: number,
    isClickButtonOrder: boolean
}
type TOwner = {
    name: string,
    email: string,
    createsAt: string,
    updateAt: string,
}

type TOrder = {
    createdAt: string,
    ingredients: Array<TIngredient>,
    name: string,
    number: number,
    owner: TOwner,
    price: number,
    status: string,
    updatedAt: string,
    _id: string
}

type TOrderResponse = {
    name: string,
    order: TOrder,
    success: boolean
}

type TAction = {
    success: boolean,
    data: Array<TIngredient>
}

export interface IGetIngredientsAction { // есть сомнения о необходимости
    readonly type: typeof GET_INGREDIENTS;
}

/* export interface IAddBunAction {
    readonly type: typeof ADD_BUN;
    readonly selectIngredient: TIngredient[];
} */

/* export interface IAddIngredientAction {
    readonly type: typeof ADD_INGREDIENT;
    readonly payload: TAction;
} */

export interface IIngredientsLoadSuccessAction {
    readonly type: typeof INGREDIENTS_LOAD_SUCCESS;
    readonly loading: boolean;
    readonly payload: TAction;
}

export interface IOpenModalOrderSuccess {
    readonly type: typeof OPEN_MODAL_ORDER_SUCCESS;
    readonly payload: TOrderResponse;
}

export interface IOpenModalIngredient { //возможно не нужен
    readonly type: typeof OPEN_MODAL_INGREDIENT;
    readonly openModalOrder: TOpenModalOrder;
    readonly payload: TIngredient | null;
}

export interface ICloseModal {
    readonly type: typeof CLOSE_MODAL;
    readonly openModalOrder: TOpenModalOrder;
    readonly openModalIngredient: TIngredient | null;
}

export interface IError {
    readonly type: typeof ERROR;
    readonly payload: TAction;
}

export interface ILoading {
    readonly type: typeof LOADING;
    readonly loading: boolean;
    readonly error: any;
}

export interface IOpenModal {
    readonly type: typeof OPEN_MODAL;
    readonly openModalOrder: TOpenModalOrder;
}

/* export interface IDeleteIngredient {
    readonly type: typeof DELETE_INGREDIENT;
    readonly payload: Array<TIngredient>; 

} */

export type TIngredientActions =
    | IGetIngredientsAction
    /* | IAddIngredientAction */
    | IIngredientsLoadSuccessAction
    | IOpenModalOrderSuccess
    | IOpenModalIngredient
    | ICloseModal
    | IError
    | ILoading
    | IOpenModal
    /* | IDeleteIngredient */;

// Типизация Thunk
type TApplicationActions = TIngredientActions;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;
export type AppDispatch = typeof store.dispatch;


/* export const addBunIngredient = (element) => ({
    type: ADD_BUN,
    payload: {
        ingredient: element,
        id: Math.random()
    }
}) */

/* export const addIngredientOther = (element) => ({
    type: ADD_INGREDIENT,
    payload: {
        ingredient: element,
        id: Math.random()
    }
}) */

export const loadIngredients: AppThunk = () => (dispatch: AppDispatch) => {

    dispatch({
        type: LOADING
    })
    return getProductData()
        .then(res => {
            res.data.map((element:TIngredient) => {
                element.board = 'default';
            })
            dispatch({
                type: INGREDIENTS_LOAD_SUCCESS,
                payload: res,
                loading: false
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err.message
            })
        })
}

export const openModalOrder:AppThunk = (selectIngredient) => (dispatch: AppDispatch) => {

    return getNumberOrder(selectIngredient)
        .then(res => {

            dispatch({
                type: OPEN_MODAL_ORDER_SUCCESS,
                payload: res,
                isClickButtonOrder: true
            })
        })
        .catch(err => {

            dispatch({
                type: ERROR,
                payload: err.message
            })

            fetchWithRefresh(`${burgerApiConfig.baseUrl}orders`, optionsFetchWithRefreshPostOrders(selectIngredient))
                .then((res) => {
                    dispatch({
                        type: OPEN_MODAL_ORDER_SUCCESS,
                        payload: res
                    })
                })


        })
}

/* export const openModalIngredient = (ingredient) => ({
    type: OPEN_MODAL_INGREDIENT,
    payload: ingredient
}) */

/* export const openModal = () => ({
    type: OPEN_MODAL
}) */

export const closeModal = () => ({
    type: CLOSE_MODAL
})

/* export const sendOrderBurger = (ingredient) => (dispatch) => {
    return sendBurgerApi(ingredient).then(res => {
        dispatch({
            type: SEND_ORDER_BURGER,
            payload: ingredient
        })
    })
} */

/* const checkSetUserOrders = (selectIngredient) => (dispatch) => {
    
    fetchWithRefresh(`${burgerApiConfig.baseUrl}auth/user`, optionsFetchWithRefresh)
        .then((res) => {
            
            getNumberOrder(selectIngredient)
        })
} */
