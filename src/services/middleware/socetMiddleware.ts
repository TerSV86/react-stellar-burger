import { Middleware, MiddlewareAPI } from "redux";
import { TAction, } from "../../utils/typeStore";
import { TWSActions, TWSHistoryOrdersActions } from "../store";
import { RootState } from "../reducer";


export const socketMiddleware = (wsActions: TWSActions | TWSHistoryOrdersActions): Middleware<{}, RootState> => {

    return (store: MiddlewareAPI) => {
        let socket: WebSocket | null = null;
        return (next) => (action: TAction) => {

            const { getState, dispatch } = store;
            const { type, payload } = action;
            const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;
            const { auth } = getState()
            if (type === wsInit) {
                if (typeof payload === 'string') {
                    socket = new WebSocket(payload);
                } else {
                    console.error('Invalid WebSocket URL:', payload);                   
                }
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
                    dispatch({ type: onMessage, payload: restParsedData })
                }
                socket.onclose = event => {
                    dispatch({ type: onClose, payload: event })
                }
            }
            next(action);
        }
    }
}
