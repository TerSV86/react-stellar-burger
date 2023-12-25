import { getCookie } from "../../utils/cookie";
import { checkAutoLogin } from "../auth/actions/actions";
import { fetchWithRefresh } from "../../utils/burger-api";
import { burgerApiConfig } from "../../utils/burger-api";

export const socketMiddleware = (wsActions) => {

    return store => {
        let socket = null;
        return next => action => {

            const { dispatch, getState } = store;
            const { type, payload } = action;
            const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;
            const { auth } = getState()
            /* const cookie = getCookie('token') */
            /* console.log(payload, type, wsInit); */
            const token = (localStorage.accessToken) ? localStorage.accessToken.split(' ')[1] : null;
            if (type === wsInit && auth) {
                /* socket = new WebSocket(`${action.payload}?token=${token}`); */
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
                            console.log('dispatch fetchWith');
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