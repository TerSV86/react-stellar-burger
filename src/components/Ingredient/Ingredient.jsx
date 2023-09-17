import { useDrag, useDrop } from 'react-dnd'
import styles from './Ingredient.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useRef } from 'react'
import { ITEM_TYPE } from '../../services/dnd/actions/draggable-ingredient'
import { useDispatch } from 'react-redux'
import { deleteIngredientOther } from '../../services/dnd/actions/draggable-ingredient'

const Ingredient = ({ el, index }) => {
    const dispatch = useDispatch()
    const ref = useRef(null);
    let dragIndex = el.id;
    const hoverIndex = index;
    const [, drop] = useDrop({
        accept: 'ingredientSort',
        hover(dragIndex, monitor) {

            if (dragIndex !== index) {
                dispatch({
                    type: ITEM_TYPE,
                    dragIndex,
                    hoverIndex
                })
                dragIndex = hoverIndex;

            }

        },
        
    })

    const [{ isDragging }, drag] = useDrag({
        type: 'ingredientSort',
        item: { ...el, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    function deleteIngredient() {
        dispatch(deleteIngredientOther(el._id))
    }   

    return (
        <div key={Math.random()} ref={(node) => (drag(drop(node)))}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={el.name}
                price={el.price}
                thumbnail={el.image}
                handleClose={() => deleteIngredient()}
            />
        </div>
    )
}

export default Ingredient