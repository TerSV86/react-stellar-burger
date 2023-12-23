import {
    BURGER_JOINT_WS_CONNETING,
    BURGER_JOINT_WS_OPEN,
    BURGER_JOINT_WS_ERROR,
    BURGER_JOINT_WS_CLOSE,
    BURGER_JOINT_WS_MESSAGE,
} from "../actions/wsActions";
import { WebSocketStatus } from "../../../utils/burger";

const initialState = {
    status: WebSocketStatus.OFFLINE,
    burgers: [],
    connectingError: ''
}

export const wsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case BURGER_JOINT_WS_CONNETING:
            
            return {
                ...state,
                status: true
            }
            case BURGER_JOINT_WS_OPEN:
            return{
                ...state,
                status: WebSocketStatus.ONLINE
            }
        case BURGER_JOINT_WS_CLOSE:
            
            return {
                ...state,
                status: false
            }
        case BURGER_JOINT_WS_ERROR:
            return {
                ...state,
                status: false
            }
        case BURGER_JOINT_WS_MESSAGE:
            
            return {
                ...state,
                burgers: action.payload // state.burgers.legth ? [...state.burgers, {...action.payload}]
            }
        default:
            return state;
    }

}