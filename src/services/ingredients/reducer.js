const initialState = {
    ingredients: [],
    selectIngredient: [],
};

export const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        /* case 'INGREDIENTS':
            return {
                ...state,
                ingredients: action.payload
            } */
        case 'INGREDIENTS_LOAD_SUCCESS':
            console.log(action.payload.data)
            return {                
                ...state,
                ingredients: [... action.payload.data]
            }
        case 'ADD_BUN':
            const newState = state.selectIngredient.filter((ingredient) =>
                ingredient.ingredient.type !== 'bun')

            return {
                ...state,
                selectIngredient: [...newState, action.payload]
            }
        case 'ADD_INGREDIENT':
            return {
                ...state,
                selectIngredient: [...state.selectIngredient, action.payload]
            }
        case 'DELETE_INGREDIENT':
            console.log(action.element);
            const newProduct = state.selectIngredient.filter((ingr) => ingr.id !== action.id)
            console.log(newProduct);
            return {
                ...state,
                selectIngredient: [...newProduct]
            }
        case 'PROCESSING_ORDER':
            return {
                ...state,
                order: action.order.order.number
            }
            case 'OPEN_MODAL_ORDER_SUCCESS':
                console.log(action.payload.order.number);
                return {
                    ...state,
                    openModalOrder: {
                        isOpen: !state.isOpen,
                        numberOrder: action.payload.order.number,
                        isClickButtonOrder: !state.isClickButtonOrder,                        
                    }
                }
        default:
            return state;
    }
}