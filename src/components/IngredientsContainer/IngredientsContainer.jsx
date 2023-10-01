
import styles from './IngredientsContainer.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_TYPE, addIngredientSort } from '../../services/dnd/actions/draggable-ingredient'
import { useDrop } from 'react-dnd'
import Ingredient from '../Ingredient/Ingredient'




const IngredientsContainer = () => {
    const board = "burgerIngredient";
    const selectIngredient = useSelector(store => store.ingredientList.sortIngredient)
    const ingredients = useSelector(store => store.ingredients.ingredients)    
    const dispatch = useDispatch()

    const [{ isHover }, drop] = useDrop({
        accept: 'ingredient',
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),       
        drop(product) {           
            dispatch(addIngredientSort(product, board))
        }
    })    

    const borderColor = isHover ? styles.lightgreen : 'transparent'
    
    return (
        <div className={`${styles.IngredientsContainer} ${borderColor} custom-scroll ml-4`} ref={drop} >
            {selectIngredient
                .filter(el => el.board === board)
                .map((el, index) => {
                    if (!(el.type === 'bun')) {
                        return (
                            <Ingredient key={el.randomId} el={el} index={index} />
                        )
                    }
                })}
        </div>
    )
}

export default IngredientsContainer

