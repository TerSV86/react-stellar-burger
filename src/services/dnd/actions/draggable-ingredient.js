import {v4 as uuid4} from 'uuid'
export const UPDATE_TYPE = 'UPDATE_TYPE';

export const ITEM_TYPE = 'ITEM_TYPE'

export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export const deleteIngredientOther = (id) => ({
    type: DELETE_INGREDIENT,
    id
})

export const addIngredientSort = ( product, board) => (dispatch) => {
    
    const randomId = uuid4();
    const updatedProduct = { ...product, randomId, board };
    product.board = board
    dispatch({
        type: UPDATE_TYPE,        
        product: updatedProduct,
        board
    })
}
