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
            const cookie = getCookie('token')

            const token = (localStorage.accessToken) ? localStorage.accessToken.split(' ')[1] : null;
            if (type === wsInit && auth) {

                socket = new WebSocket(`${action.payload}?token=${/* cookie */token}`);/* ?token=${user.token} */
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

                    console.log(parsedData);
                    if (parsedData.message === 'Invalid or missing token') dispatch(checkAutoLogin())
                    /* if (parsedData.message === 'Invalid or missing token') {
                        console.log('if');
                        fetchWithRefresh(`${burgerApiConfig.baseUrl}auth/user`, {
                            method: 'GET',
                            mode: 'cors',
                            cache: 'no-cache',
                            credentials: 'same-origin',
                            headers: {
                                'Content-Type': 'application/json',
                                'authorization': localStorage.accessToken
                            },
                            redirect: 'follow',
                            referrerPolicy: 'no-referrer'
                        })
                        //dispatch(checkAutoLogin())
                        socket.onMessage = event => {
                            const { data } = event;
                            const parsedData = JSON.parse(data);
                            const { success, ...restParsedData } = parsedData;
                            console.log('dispatch fetchWith');
                            dispatch({ type: onMessage, payload: restParsedData })
                        }

                    } else {
                        console.log('dispatch');
                        dispatch({ type: onMessage, payload: restParsedData })
                    } */
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