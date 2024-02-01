import { WebSocketStatus } from "../../../utils/burger";
import { THistoryOrderAction, THistoryOrderState } from "../../../utils/typeHistoryOrder";
import { HISTORY_ORDERS_WS_CLOSE, HISTORY_ORDERS_WS_CONNECTING, HISTORY_ORDERS_WS_ERROR, HISTORY_ORDERS_WS_MESSAGE } from "../actions/wsHistoryOrdersActions";



const initialState:THistoryOrderState = {
    status: WebSocketStatus.OFFLINE,
    userOrders: null,
    connectingError: ''
}

export const wsHistoryOrdersReducer = (state = initialState, action: THistoryOrderAction) => {
    
    switch (action.type) {
        case HISTORY_ORDERS_WS_CONNECTING:            
            return {
                ...state,
                status: WebSocketStatus.ONLINE
            }
        case HISTORY_ORDERS_WS_CLOSE:
            return {
                ...state,
                status: WebSocketStatus.OFFLINE
            }
        case HISTORY_ORDERS_WS_ERROR:
            return {
                ...state,
                connectingError: action.payload
            }
        case HISTORY_ORDERS_WS_MESSAGE:
            
            return {
                ...state,
                status: WebSocketStatus.ONLINE,
                userOrders: action.payload
            }
        default:
            return state;
    }
}