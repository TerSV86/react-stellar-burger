import { orderIngredientListPropType } from '../../utils/prop-types';
import OrderIngredient from '../OrderIngredient/OrderIngredient'
import styles from './OrderIngredientList.module.css'
import { useSelector } from 'react-redux';

const OrderIngredientList = ({ burgerIngr }) => {
    const ingredients = useSelector(store => store.ingredients.ingredients)
    const orderIngredients = ingredients.filter((elem) => burgerIngr.some((id) => id === elem._id))

    return (
        <div className={`${styles.OrderIngredientList} pr-6 mb-10 custom-scroll`}>
            {orderIngredients.map((ingredient) => {                
                let counters = burgerIngr.filter((elem) => elem === ingredient._id).length
                if (ingredient.type === 'bun') {
                    counters = 2
                }
                return (
                    <OrderIngredient key={ingredient._id} product={ingredient} count={counters} />
                )
            })}
        </div>
    )
}

OrderIngredientList.propTypes = orderIngredientListPropType;

export default OrderIngredientList