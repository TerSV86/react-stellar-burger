import { reducer as ingredientsReducer } from './ingredients/reducer';
import { draggableIngredientReducer } from './dnd/reducers/draggableIngredientReducer'
import { dropTargetReducer } from './dnd/reducers/drop-target'
import { combineReducers } from 'redux';
import { scrollIngredientsReducer } from './scroll/reducer/scrollIngredientsReduser';
import { authReducer } from './auth/reducers/reducers'
import { wsReducer } from './orderfeed/reducer/wsReducer';
import { wsHistoryOrdersReducer } from './historyorder/reducer/wsHistoryOrdersReducer';

export const reducer = combineReducers({
    ingredients: ingredientsReducer,
    ingredientList: draggableIngredientReducer,
    boardList: dropTargetReducer,
    scrollIngredients: scrollIngredientsReducer,
    auth: authReducer,
    orders: wsReducer,
    userOrders: wsHistoryOrdersReducer
})

