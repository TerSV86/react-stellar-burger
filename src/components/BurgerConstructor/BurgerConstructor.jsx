import IngredientsContainer from '../IngredientsContainer/IngredientsContainer'
import styles from './BurgerConstructor.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderBlock from '../OrderBlock/OrderBlock'
import { burgerConstructorPropType } from '../../utils/prop-types'
import { useContext} from 'react'
import { AppContext } from '../../services/appContext'
import { SelectIngredient } from '../../services/appContext'



const BurgerConstructor = () => {

    const {selectIngredient, deleteIngredient} = useContext(SelectIngredient)
    
    const sum = selectIngredient.reduce((acc, ingr) => acc + ingr.price + ((ingr.type === 'bun') ? ingr.price : 0), 0)
    console.log(sum);
 
    return (
        <section className={`${styles.BurgerConstructor} pt-25 `}>
            {selectIngredient.map((el) => {
                if (el.type === 'bun') {
                    return (<div ><ConstructorElement
                        key={'2'}
                        type="top"
                        isLocked={true}
                        text={`${el.name} (верх)`}
                        price={el.price}
                        thumbnail={el.image}
                        extraClass='ml-9'                        
                    /></div>);
                }
            })}
            < IngredientsContainer /* product={productData} */  />
            {selectIngredient.map((el) => {
                if (el.type === 'bun') {
                    return (<div><ConstructorElement
                        key={'1'}
                        type="bottom"
                        isLocked={true}
                        text={`${el.name} (низ)`}
                        price={el.price}
                        thumbnail={el.image}
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

