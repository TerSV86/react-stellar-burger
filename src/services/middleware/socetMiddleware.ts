import { getCookie } from "../../utils/cookie";
import { checkAutoLogin } from "../auth/actions/actions";
import { fetchWithRefresh } from "../../utils/burger-api";
import { burgerApiConfig } from "../../utils/burger-api";
import { AppThunk } from "../../utils/typeThunk";
import { THistoryOrderAction } from "../../utils/typeHistoryOrder";
/* import { Middleware } from "./middleware"; */
import { Middleware } from "redux";
import { TAction, } from "../../utils/typeStore";
import { TWSActions, TWSHistoryOrdersActions } from "../store";
import { Dispatch } from "react";


export const socketMiddleware: Middleware = (wsActions: TWSActions | TWSHistoryOrdersActions | any) => {

    return (store: any) => {
        let socket: WebSocket | null = null;
        return (next) => (action: TAction) => {
            
            const { dispatch, getState } = store;
            const { type, payload } = action;
            const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;
            const { auth } = getState()


            if (type === wsInit) {
                (typeof payload === 'string') ? socket = new WebSocket(payload) : '';
            }

            if (socket) {

                socket.onopen = event => {
                    dispatch({ type: onOpen, payload: event });
                }
                socket.onerror = event => {
                    dispatch({ type: onError, payload: event })
                }
                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    const { success, ...restParsedData } = parsedData;
                    if (parsedData.message === 'Invalid or missing token') {
                        dispatch(checkAutoLogin())
                        if (socket !== null) {
                            socket.onmessage = event => {
                                const { data } = event;
                                const parsedData = JSON.parse(data);
                                const { success, ...restParsedData } = parsedData;
                                dispatch({ type: onMessage, payload: restParsedData })
                            }
                        }

                    } else {
                        dispatch({ type: onMessage, payload: restParsedData })
                    }

                }
                socket.onclose = event => {

                    dispatch({ type: onClose, payload: event })
                }
            }
            next(action);
        }
    }
}