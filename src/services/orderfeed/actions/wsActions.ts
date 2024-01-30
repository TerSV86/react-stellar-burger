//возможно нужно перенести в папку actions-types
export const BURGER_JOINT_CONNECT:'BURGER_JOINT_CONNECT' = 'BURGER_JOINT_CONNECT';
export const BURGER_JOINT_DISCONNECT: 'BURGER_JOINT_DISCONNECT' = 'BURGER_JOINT_DISCONNECT'

export const BURGER_JOINT_WS_CONNETIN:'BURGER_JOINT_WS_CONNETIN' = 'BURGER_JOINT_WS_CONNETIN';
export const BURGER_JOINT_WS_OPEN:'BURGER_JOINT_WS_OPEN' = 'BURGER_JOINT_WS_OPEN';
export const BURGER_JOINT_WS_ERROR:'BURGER_JOINT_WS_ERROR' = 'BURGER_JOINT_WS_ERROR';
export const BURGER_JOINT_WS_CLOSE:'BURGER_JOINT_WS_CLOSE' = 'BURGER_JOINT_WS_CLOSE';
export const BURGER_JOINT_WS_MESSAGE: 'BURGER_JOINT_WS_MESSAGE' = 'BURGER_JOINT_WS_MESSAGE';


export const WS_SEND_BURGER = 'WS_SEND_BURGER'; //определить необходимость экшина
export const WS_USER_NAME_UPDATE = 'WS_USER_NAME_UPDATE'; //определить необходимость экшина

export const connect = (url: string) => ({
    type: BURGER_JOINT_CONNECT,
    payload: url
});

export const disconnect = () => (
    {
        type: BURGER_JOINT_WS_CLOSE,
    })


