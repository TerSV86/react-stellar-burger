import { UPDATE_TYPE } from '../actions/draggagle-ingredient'

const initialState = {
    ingredients: [
        {
            ingredient: {},
            board: 'default' //при заполнении бургер ингредиентов добавить эту строку
        },
    ]
}

export const draggableIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TYPE: {
            return {
                ...state,
                ingredients: state.ingredients.map(ingredient => ingredient._id === action._id ? {...ingredient,
                 board: action.board} : ingredient)
            }
        }
    }
}