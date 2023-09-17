
import styles from './IngredientsContainer.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_TYPE } from '../../services/dnd/actions/draggable-ingredient'
import { useDrop } from 'react-dnd'
import Ingredient from '../Ingredient/Ingredient'


const IngredientsContainer = () => {  
    const board="burgerIngredient"; 
    const selectIngredient = useSelector(store => store.ingredientList.sortIngredient)
    const dispatch = useDispatch()  
    const [{ isHover }, drop] = useDrop({
        accept: 'ingredient',
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),
        drop(itemId) {            
            dispatch({
                type: UPDATE_TYPE,
                ...itemId,
                board
            })
        }
    })   

    // const boardClass = board === 'default' ? styles.IngredientsContainer : styles.ingredient //пока не нужно
    
    const borderColor = isHover ? styles.lightgreen : 'transparent'
   /*  const borderColor = isHover ? console.log('true') : console.log('false'); */
    return (
        <div className={`${styles.IngredientsContainer} ${borderColor} custom-scroll ml-4`} ref={drop} >
            {selectIngredient
                .filter(el => el.board === board)
                .map((el, index) => {
                    if (!(el.type === 'bun')) {
                        return (
                            <Ingredient el={el} index={index}/>                            
                        )
                    }
                })}
        </div>
    )
}



export default IngredientsContainer

