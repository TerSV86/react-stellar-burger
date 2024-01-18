import { HISTORY_ORDERS_WS_CONNECTING } from "../services/historyorder/actions/wsHistoryOrdersActions";
import { BURGER_JOINT_WS_CLOSE, BURGER_JOINT_WS_CONNETING, BURGER_JOINT_WS_ERROR, BURGER_JOINT_WS_MESSAGE, BURGER_JOINT_WS_OPEN } from "../services/orderfeed/actions/wsActions";
import { TOrderWS } from "./typeHistoryOrder";


export type TOrderFeedState = {
    status: String;
    burgers: Array<string>;
    connectingError: String;
}

export interface IBurgerJointWSConnecting {
    readonly type: typeof BURGER_JOINT_WS_CONNETING;
    readonly payload: string;
}

export interface IDisconnect {
    readonly type: typeof BURGER_JOINT_WS_CLOSE;
}

export interface IBurgerJointWSError {
readonly type: typeof BURGER_JOINT_WS_ERROR;
readonly payload: string;
}

export interface IBurgerJointWSMessage {
    readonly type: typeof BURGER_JOINT_WS_MESSAGE;
    readonly payload: Array<TOrderWS>;
}

export interface IHistoryOrdersWSConnecting {
    readonly type: typeof HISTORY_ORDERS_WS_CONNECTING;
    
}

export interface IBurgerJointWSClose {
    readonly type: typeof BURGER_JOINT_WS_CLOSE;

}

export interface IBurgerJointWSOpen {
    readonly type: typeof BURGER_JOINT_WS_OPEN;
}

export type TOrderFeedAction = 
|IBurgerJointWSConnecting
|IBurgerJointWSError
|IBurgerJointWSMessage
|IBurgerJointWSClose
|IBurgerJointWSOpen