import { getCookie } from "../../utils/cookie";

export const socketMiddleware = (wsActions) => {
    
    return store => {
        let socket = null;
        return next => action => {
            console.log(wsActions);
            const { dispatch, getState } = store;
            const { type, payload } = action;
            const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;
            const { auth } = getState()
            const cookie = getCookie('token')
            
            const token = (localStorage.accessToken) ? localStorage.accessToken.split(' ')[1] : null;
            if (type === wsInit && auth) {                
                socket = new WebSocket(`${action.payload}?token=${token}`);
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