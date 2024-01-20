import { TWSActions, TWSHistoryOrdersActions } from "../services/store";
import { THistoryOrderAction, TUserOrders } from "./typeHistoryOrder";
import { TBurgers, TOrderFeedAction } from "./typeOrderFeed";

export type TAction = {
    type: TOrderFeedAction|THistoryOrderAction;
    payload?: TBurgers | TUserOrders | string;
}







