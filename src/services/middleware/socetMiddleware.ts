import { getCookie } from "../../utils/cookie";
import { checkAutoLogin } from "../auth/actions/actions";
import { fetchWithRefresh } from "../../utils/burger-api";
import { burgerApiConfig } from "../../utils/burger-api";
import { AppThunk } from "../../utils/typeThunk";
import { THistoryOrderAction } from "../../utils/typeHistoryOrder"; 


export const socketMiddleware:  = (wsActions: THistoryOrderAction) => {

    return store => {
        let socket = null;
        return next => action => {

            const { dispatch, getState } = store;
            const { type, payload } = action;
            const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;
            const { auth } = getState()


            if (type === wsInit) {
                
                socket = new WebSocket(payload);
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
                        socket.onMessage = event => {
                            const { data } = event;
                            const parsedData = JSON.parse(data);
                            const { success, ...restParsedData } = parsedData;                            
                            dispatch({ type: onMessage, payload: restParsedData })
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