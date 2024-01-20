import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
/* import { customMiddleware } from "./middleware/custom-middleware" */
import thunkMiddleware from "redux-thunk"
import { RootState, reducer } from './reducer'
import { socketMiddleware } from "./middleware/socetMiddleware"
import {
    BURGER_JOINT_CONNECT,
    BURGER_JOINT_DISCONNECT,
    BURGER_JOINT_WS_CONNETING,
    BURGER_JOINT_WS_OPEN,
    BURGER_JOINT_WS_ERROR,
    BURGER_JOINT_WS_CLOSE,
    BURGER_JOINT_WS_MESSAGE,
} from "./orderfeed/actions/wsActions"
import {
    HISTORY_ORDERS_CONNECT,
    HISTORY_ORDERS_DISCONNECT,
    HISTORY_ORDERS_WS_CONNECTING,
    HISTORY_ORDERS_WS_OPEN,
    HISTORY_ORDERS_WS_CLOSE,
    HISTORY_ORDERS_WS_ERROR,
    HISTORY_ORDERS_WS_MESSAGE
} from './historyorder/actions/wsHistoryOrdersActions'

import { store } from ".."
import { TDraggableIngredientsState, TIngredientActions, TIngredientsState } from "../utils/type"

const wsActions = {
    wsInit: BURGER_JOINT_CONNECT,
    wsDisconnect: BURGER_JOINT_DISCONNECT,
    wsConnecting: BURGER_JOINT_WS_CONNETING,
    onOpen: BURGER_JOINT_WS_OPEN,
    onClose: BURGER_JOINT_WS_CLOSE,
    onError: BURGER_JOINT_WS_ERROR,
    onMessage: BURGER_JOINT_WS_MESSAGE
}

const wsHistoryOrdersActions = {
    wsInit: HISTORY_ORDERS_CONNECT,
    wsDisconnect: HISTORY_ORDERS_DISCONNECT,
    wsConnecting: HISTORY_ORDERS_WS_CONNECTING,
    onOpen: HISTORY_ORDERS_WS_OPEN,
    onClose: HISTORY_ORDERS_WS_CLOSE,
    onError: HISTORY_ORDERS_WS_ERROR,
    onMessage: HISTORY_ORDERS_WS_MESSAGE
}




export const configureStore = (initialState: RootState) => {
    const store = createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware, socketMiddleware(wsActions), socketMiddleware(wsHistoryOrdersActions))) //функция обеспечивающая поддержку reduxDevTools
    )
    return store;
}