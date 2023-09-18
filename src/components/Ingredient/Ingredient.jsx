import { useDrag, useDrop } from 'react-dnd'
/* import styles from './Ingredient.module.css' */
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ITEM_TYPE } from '../../services/dnd/actions/draggable-ingredient'
import { useDispatch } from 'react-redux'
import { deleteIngredientOther } from '../../services/dnd/actions/draggable-ingredient'
import React from 'react'


const Ingredient = React.memo(({ el, index }) => {
      const dispatch = useDispatch()

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
            dispatch({
                type: ITEM_TYPE,
                dragIndexIngredient,
                hoverIndexIngredient
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
        dispatch(deleteIngredientOther(el.randomId))
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