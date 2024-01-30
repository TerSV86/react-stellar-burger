import { HISTORY_ORDERS_CONNECT, HISTORY_ORDERS_WS_CLOSE, HISTORY_ORDERS_WS_CONNECTING, HISTORY_ORDERS_WS_ERROR, HISTORY_ORDERS_WS_MESSAGE } from "../services/historyorder/actions/wsHistoryOrdersActions";
import { BURGER_JOINT_WS_CLOSE, BURGER_JOINT_WS_CONNETIN, BURGER_JOINT_WS_ERROR, BURGER_JOINT_WS_MESSAGE, BURGER_JOINT_WS_OPEN } from "../services/orderfeed/actions/wsActions";
import { TWSActions, TWSHistoryOrdersActions } from "../services/store";
import { THistoryOrderAction, TUserOrders } from "./typeHistoryOrder";
import { TBurgers, TOrderFeedAction } from "./typeOrderFeed";

export type TAction = {
    type:
    | typeof BURGER_JOINT_WS_CONNETIN
    | typeof BURGER_JOINT_WS_CLOSE
    | typeof BURGER_JOINT_WS_ERROR
    | typeof BURGER_JOINT_WS_MESSAGE
    | typeof HISTORY_ORDERS_WS_CONNECTING
    | typeof BURGER_JOINT_WS_OPEN
    | typeof HISTORY_ORDERS_CONNECT
    | typeof HISTORY_ORDERS_WS_ERROR
    | typeof HISTORY_ORDERS_WS_MESSAGE
    | typeof HISTORY_ORDERS_WS_CONNECTING
    | typeof HISTORY_ORDERS_WS_CLOSE;
    payload?: TBurgers | TUserOrders | string;
}







