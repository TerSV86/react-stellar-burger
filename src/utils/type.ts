import { ActionCreator, Action } from "redux"
import { ThunkAction } from "redux-thunk"
import { store } from ".."
import { GET_INGREDIENTS, INGREDIENTS_LOAD_SUCCESS, OPEN_MODAL_ORDER_SUCCESS, OPEN_MODAL_INGREDIENT, CLOSE_MODAL, ERROR, LOADING, OPEN_MODAL } from "../services/ingredients/action"
import { DELETE_INGREDIENT, ITEM_TYPE, UPDATE_TYPE, UPDATE_TYPE_BUN } from "../services/dnd/actions/draggable-ingredient"
import { HISTORY_ORDERS_CONNECT, HISTORY_ORDERS_WS_CLOSE, HISTORY_ORDERS_WS_CONNECTING, HISTORY_ORDERS_WS_ERROR, HISTORY_ORDERS_WS_MESSAGE } from "../services/historyorder/actions/wsHistoryOrdersActions"
import { RootState } from "../services/store"

export type TIngredient = {
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

export type TIngredientsState = {
    ingredients: ReadonlyArray<TIngredient>;
    /* selectIngredient: ReadonlyArray<TIngredient>; */
    error: any | null;
    loading: boolean;
    openModalOrder: TOpenModalOrder;
}

export type TDraggableIngredientsState = {
    ingredients: ReadonlyArray<TIngredient>;
    selectIngredient: ReadonlyArray<TIngredient>;
    sortIngredient: ReadonlyArray<TIngredient>;
}

export type TOpenModalOrder = {
    isOpen: boolean,
    numberOrder: number,
    isClickButtonOrder: boolean
}
export type TOwner = {
    name: string,
    email: string,
    createsAt: string,
    updateAt: string,
}

export type TOrder = {
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




export type TOrderResponse = {
    name: string,
    order: TOrder,
    success: boolean
}

export type TAction = {
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
    /* readonly loading: boolean; */
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
   /*  readonly error: any; */
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

//Типизация dnd   
export interface IDeleteIngredientOther {
    readonly type: typeof DELETE_INGREDIENT;
    readonly payload: Array<TIngredient>
}

export interface IAddIngredientSort {
    readonly type: typeof UPDATE_TYPE;
    readonly productSort: Array<TIngredient>;
    readonly productSelect: Array<TIngredient>;
}

export interface IAddIngredientBun {
    readonly type: typeof UPDATE_TYPE_BUN;
    readonly product: Array<TIngredient>;
}

export interface IItemType {
    readonly type: typeof ITEM_TYPE;
    readonly payload: Array<TIngredient>
}



export type TDraggableIngredientAction =
    | IDeleteIngredientOther
    | IAddIngredientSort
    | IAddIngredientBun
    | IItemType
    | IIngredientsLoadSuccessAction
    | IOpenModalOrderSuccess

//Типизация historyorder

// Типизация Thunk
export type TApplicationActions = TIngredientActions;
