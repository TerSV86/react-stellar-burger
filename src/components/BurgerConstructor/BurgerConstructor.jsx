import IngredientsContainer from '../IngredientsContainer/IngredientsContainer'
import styles from './BurgerConstructor.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderBlock from '../OrderBlock/OrderBlock'
import { burgerConstructorPropType } from '../../utils/prop-types'
import { useContext} from 'react'
import { AppContext } from '../../services/appContext'
import { SelectIngredient } from '../../services/appContext'
import { useSelector } from 'react-redux'



const BurgerConstructor = () => {

    /* const {selectIngredient, deleteIngredient} = useContext(SelectIngredient) */
    const selectIngredient = useSelector(store => store.selectIngredient)
    const ingredient = selectIngredient.map(ing => ing.ingredient)
    const sum = ingredient.reduce((acc, ingr) => acc + ingr.price + ((ingr.type === 'bun') ? ingr.price : 0), 0)
    console.log(sum);
 
    return (
        <section className={`${styles.BurgerConstructor} pt-25 `}>
            {selectIngredient.map((el) => {
                if (el.ingredient.type === 'bun') {
                    return (<div ><ConstructorElement
                        key={'2'}
                        type="top"
                        isLocked={true}
                        text={`${el.ingredient.name} (верх)`}
                        price={el.ingredient.price}
                        thumbnail={el.ingredient.image}
                        extraClass='ml-9'                        
                    /></div>);
                }
            })}
            < IngredientsContainer   />
            {selectIngredient.map((el) => {
                if (el.ingredient.type === 'bun') {
                    return (<div><ConstructorElement
                        key={'1'}
                        type="bottom"
                        isLocked={true}
                        text={`${el.ingredient.name} (низ)`}
                        price={el.ingredient.price}
                        thumbnail={el.ingredient.image}
                        extraClass='ml-9'
                        
                    /></div>);
                }
            })}
            <OrderBlock sum = {sum} />
        </section>
    )
}

BurgerConstructor.propTypes = burgerConstructorPropType;

export default BurgerConstructor

