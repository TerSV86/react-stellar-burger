import { reducer as ingredientsReducer } from './ingredients/reducer';
import { draggableIngredientReducer } from './dnd/reducers/draggableIngredientReducer'
import { dropTargetReducer } from './dnd/reducers/drop-target'
import { combineReducers } from 'redux';
import { scrollIngredientsReducer } from './scroll/reducer/scrollIngredientsReduser';

export const reducer = combineReducers({
    ingredients: ingredientsReducer,
    ingredientList: draggableIngredientReducer,
    boardList: dropTargetReducer,
    scrollIngredients:  scrollIngredientsReducer,
})

