import styles from './IngredientsContainer.module.css'
import { useDispatch, useSelector } from '../../hooks/hooks'
import { UPDATE_TYPE, addIngredientSort } from '../../services/dnd/actions/draggable-ingredient'
import { useDrop } from 'react-dnd'
import Ingredient from '../Ingredient/Ingredient'

import {v4 as uuid4} from 'uuid'
import { TIngredient } from '../../utils/type'
import { FC } from 'react'




const IngredientsContainer: FC = () => {
    const board = "burgerIngredient";
    const selectIngredient = useSelector(store => store.ingredientList.sortIngredient)
    const ingredients = useSelector(store => store.ingredients.ingredients)
    const dispatch = useDispatch()

    const arraySelectIngredient = useSelector(store => store.ingredientList.selectIngredient) // добавил



    const [{ isHover }, drop] = useDrop({
        accept: 'ingredient',
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),
        drop(product:TIngredient) {
            const randomId = uuid4();
            product.board = board
            const updatedProduct = { ...product, randomId, board };
            
            let newStateSelectIngerdient;
            let newSortIngredient;           
            newSortIngredient = [...selectIngredient, updatedProduct];
            newStateSelectIngerdient = [...arraySelectIngredient, updatedProduct]
            console.log('dnd', newStateSelectIngerdient, newSortIngredient);
            dispatch(addIngredientSort(newStateSelectIngerdient, newSortIngredient))
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

