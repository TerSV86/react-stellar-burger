import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ITEM_TYPE } from '../../services/dnd/actions/draggable-ingredient'
import { useDispatch, useSelector } from '../../hooks/hooks'
import { deleteIngredientOther } from '../../services/dnd/actions/draggable-ingredient'
import React from 'react'
import { TIngredient } from '../../utils/type'


type Prop = {
    el: TIngredient;
    index: number;
}

type DragIndex = Record<string, string> & { index: number }

const Ingredient = React.memo(({ el, index }: Prop) => {    
    const dispatch = useDispatch()
    const selectIngredient = useSelector(state => state.ingredientList.selectIngredient)
    const sortIngredient = useSelector(state => state.ingredientList.sortIngredient)

    let dragIndexIngredient: DragIndex;
    let hoverIndexIngredient: number;

    const [, drop] = useDrop({
        accept: 'ingredientSort',
        hover(dragIndex: DragIndex, monitor: DropTargetMonitor): void {           
            const hoverIndex = index;
            if (dragIndex.index !== index) {
                dragIndexIngredient = dragIndex;
                hoverIndexIngredient = hoverIndex;
            }
            if (dragIndex.index === index) {
                return
            }
        },
        drop() {
            if (dragIndexIngredient && dragIndexIngredient.index !== undefined) {
                const item = sortIngredient[dragIndexIngredient.index]
                const newItems = sortIngredient.filter((i, idx) => idx !== dragIndexIngredient.index);
                newItems.splice(hoverIndexIngredient, 0, item)
                dispatch({
                    type: ITEM_TYPE,
                    payload: newItems
                })
            }
        }
    })

    const [{ isDragging }, drag] = useDrag({
        type: 'ingredientSort',
        item: { el, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    function deleteIngredient() {
        const newArrayIngredients = selectIngredient.filter((ingr) => ingr.randomId !== el.randomId)
        dispatch(deleteIngredientOther(newArrayIngredients))
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