import IngredientsContainer from '../IngredientsContainer/IngredientsContainer'
import styles from './BurgerConstructor.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderBlock from '../OrderBlock/OrderBlock'
import { useDispatch, useSelector } from 'react-redux'
import { useDrop } from 'react-dnd'
import { addIngredientBun, addIngredientSort } from '../../services/dnd/actions/draggable-ingredient'

import {v4 as uuid4} from 'uuid'



const BurgerConstructor = () => {
    const dispatch = useDispatch()
    const selectIngredient = useSelector(store => store.ingredientList.selectIngredient)
    console.log(selectIngredient);
    const sum = selectIngredient.reduce((acc, ingr) => acc + ingr.price + ((ingr.type === 'bun') ? ingr.price : 0), 0)
    const board = 'burgerBunIngredient';

    const [{ isHover }, drop] = useDrop({
        accept: 'ingredientBun',
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),
        drop(product) {
            const randomId = uuid4();
            product.board = board
            const updatedProduct = { ...product, randomId, board };
            
            let newArray;
            const delBun = selectIngredient.filter(ingredient => ingredient.type !== 'bun');
            newArray = [...delBun, updatedProduct]
            dispatch(addIngredientBun(newArray))    
            /* dispatch(addIngredientSort(product, board)) */
        }
    })

    const borderColor = isHover ? styles.lightgreen : null

    return (
        <section className={`${styles.BurgerConstructor}  pt-25 `}  >
            <div className={`${styles.BurgerConstructorBun} ${borderColor}`} board='burgerBunIngredient' ref={drop}>
                {selectIngredient
                    .filter(el => el.board === board)
                    .map((el) => {
                        if (el.type === 'bun') {
                            return (
                                <ConstructorElement
                                    key={el.randomId}
                                    type="top"
                                    isLocked={true}
                                    text={`${el.name} (верх)`}
                                    price={el.price}
                                    thumbnail={el.image}
                                    extraClass='ml-9'
                                />);
                        }
                    })}
            </div>
            < IngredientsContainer />
            {selectIngredient
                .filter(el => el.board === board)
                .map((el) => {
                    if (el.type === 'bun') {
                        return (<div key={el.randomId}><ConstructorElement

                            type="bottom"
                            isLocked={true}
                            text={`${el.name} (низ)`}
                            price={el.price}
                            thumbnail={el.image}
                            extraClass='ml-9'

                        /></div>);
                    }
                })}
            <OrderBlock sum={sum} />
        </section>
    )
}

export default BurgerConstructor

