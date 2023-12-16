export const HISTORY_ORDERS_CONNECT = 'HISTORY_ORDERS_CONNECT';
export const HISTORY_ORDERS_DISCONNECT = 'HISTORY_ORDERS_DISCONNECT';

export const HISTORY_ORDERS_WS_CONNECTING = 'HISTORY_ORDERS_WS_CONNECTING';
export const HISTORY_ORDERS_WS_OPEN = 'HISTORY_ORDERS_WS_OPEN'; 
export const HISTORY_ORDERS_WS_CLOSE = 'HISTORY_ORDERS_WS_CLOSE';
export const HISTORY_ORDERS_WS_ERROR = 'HISTORY_ORDERS_WS_ERROR';
export const HISTORY_ORDERS_WS_MESSAGE = 'HISTORY_ORDERS_WS_MESSAGE';


export const connectHistoryOrder = (url) => (    
    {
        type: HISTORY_ORDERS_CONNECT,
        payload: url
    });
    
    export const disconnect = () => ({
        type: HISTORY_ORDERS_DISCONNECT,
    })