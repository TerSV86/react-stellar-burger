import {
    BURGER_JOINT_WS_CONNETIN,
    BURGER_JOINT_WS_OPEN,
    BURGER_JOINT_WS_ERROR,
    BURGER_JOINT_WS_CLOSE,
    BURGER_JOINT_WS_MESSAGE,
} from "../actions/wsActions";
import { WebSocketStatus } from "../../../utils/burger";
import { TOrderFeedAction, TOrderFeedState } from "../../../utils/typeOrderFeed";

const initialState: TOrderFeedState = {
    status: WebSocketStatus.OFFLINE,
    burgers: null,
    connectingError: ''
}



export const wsReducer = (state = initialState, action: TOrderFeedAction) => {
    
    switch (action.type) {
        case BURGER_JOINT_WS_CONNETIN:
            
            return {
                ...state,
                status: WebSocketStatus.ONLINE
            }
            case BURGER_JOINT_WS_OPEN:
            return{
                ...state,
                status: WebSocketStatus.ONLINE
            }
        case BURGER_JOINT_WS_CLOSE:
            
            return {
                ...state,
                status:  WebSocketStatus.OFFLINE
            }
        case BURGER_JOINT_WS_ERROR:
            return {
                ...state,
                status:  WebSocketStatus.OFFLINE
            }
        case BURGER_JOINT_WS_MESSAGE:
            
            return {
                ...state,
                burgers: action.payload 
            }
        default:
            return state;
    }

}