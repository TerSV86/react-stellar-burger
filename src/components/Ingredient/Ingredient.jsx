import { useDrag, useDrop } from 'react-dnd'
/* import styles from './Ingredient.module.css' */
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ITEM_TYPE } from '../../services/dnd/actions/draggable-ingredient'
import { useDispatch, useSelector } from 'react-redux'
import { deleteIngredientOther } from '../../services/dnd/actions/draggable-ingredient'
import React from 'react'


const Ingredient = React.memo(({ el, index }) => {
    const dispatch = useDispatch()
    const selectIngredient = useSelector(state => state.ingredientList.selectIngredient)
    console.log('select',selectIngredient);

    const sortIngredient = useSelector(state => state.ingredientList.sortIngredient)

    let dragIndexIngredient;
    let hoverIndexIngredient;

    const [, drop] = useDrop({
        accept: 'ingredientSort',
        hover(dragIndex, monitor) {
            const hoverIndex = index;

            if (dragIndex !== index) {
                dragIndexIngredient = dragIndex;
                hoverIndexIngredient = hoverIndex;
            }

            if (dragIndex === index) {
                return
            }

        },
        drop() {
            const item = sortIngredient[dragIndexIngredient.index]
            const newItems = sortIngredient.filter((i, idx) => idx !== dragIndexIngredient.index);
            newItems.splice(hoverIndexIngredient, 0, item)

            dispatch({
                type: ITEM_TYPE,
                payload: newItems               
            })
        }

    })

    const [{ isDragging }, drag] = useDrag({
        type: 'ingredientSort',
        item: { ...el._id, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    function deleteIngredient() {
        console.log(el.randomId);
        const newArrayIngredients = selectIngredient.filter((ingr) => console.log('ingr',ingr, ingr.randomId !== el.randomId)|| ingr.randomId !== el.randomId)
        console.log('newArrayIngredients', newArrayIngredients);
        dispatch(deleteIngredientOther(/* el.randomId */newArrayIngredients))
    }

    return (
        <div ref={(node) => (drag(drop(node)))}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={el.name}
                price={el.price}
                thumbnail={el.image}
                handleClose={() => deleteIngredient()}
            />
        </div>
    )
})

export default Ingredient