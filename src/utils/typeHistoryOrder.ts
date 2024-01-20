import { HISTORY_ORDERS_CONNECT, HISTORY_ORDERS_WS_CLOSE, HISTORY_ORDERS_WS_CONNECTING, HISTORY_ORDERS_WS_ERROR, HISTORY_ORDERS_WS_MESSAGE } from "../services/historyorder/actions/wsHistoryOrdersActions";
import { TOrder } from "./type";
import { TBurgerOrder } from "./typeOrderFeed";



export const CONNECTING: 'CONNECTING ...' = 'CONNECTING ...';
export const ONLINE: 'ONLINE' = 'ONLINE';
export const OFFLINE: 'OFFLINE' = 'OFFLINE';
export type TWebSocketStatus = {
    CONNECTING: typeof CONNECTING;
    ONLINE: typeof ONLINE;
    OFFLINE: typeof OFFLINE;
}

type TUserBurgerOrder = TBurgerOrder;

type TUserOrders = {
    orders: Array<TUserBurgerOrder>;
    total: number;
    totalToday: number;
}


export type THistoryOrderState = {
    status: string; // Почему не работает TWebSocketStatus[keyof TWebSocketStatus] или typeof CONNECTING | typeof ONLINE | typeof OFFLINE;
    userOrders: TUserOrders | {};
    connectingError: string;
}
export type TOrderWS = Omit<TOrder, 'ingredients' | 'owner' | 'prise'> & {
    ingredients: Array<string>;
}

export interface IConnectHistoryOrder {
    readonly type: typeof HISTORY_ORDERS_CONNECT;
    readonly payload: string;
}

export interface IDisconnect {
    readonly type: typeof HISTORY_ORDERS_WS_CLOSE;
}

export interface IHistoryOrdersWSError {
readonly type: typeof HISTORY_ORDERS_WS_ERROR;
readonly payload: string;
}

export interface IHistoryOrdersWSMessage {
    readonly type: typeof HISTORY_ORDERS_WS_MESSAGE;
    readonly payload: Array<TOrderWS>;
}

export interface IHistoryOrdersWSConnecting {
    readonly type: typeof HISTORY_ORDERS_WS_CONNECTING;
    
}

export interface IHustoryOrdersWSClose {
    readonly type: typeof HISTORY_ORDERS_WS_CLOSE;

}

export type THistoryOrderAction = 
|IHistoryOrdersWSMessage
|IHistoryOrdersWSError
|IHistoryOrdersWSConnecting
|IHustoryOrdersWSClose

