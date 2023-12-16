import { useSelector } from 'react-redux'
import styles from './OrderFeedBlockBurgerPrice.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const OrderFeedBlockBurgerPrice = ({ ingredients }) => {
    /* const burgers = useSelector(store => store.orders.burgers.orders) */
    const product = useSelector(store => store.ingredients.ingredients)
    // проверить ingredients на null. Сейчас просто ингредиент = null отсеивается some. Нижно убрать заказ
    const ingredientList = product.filter((elem) =>  ingredients.some((element) =>
       element === elem._id))
        
    const price = ingredientList.reduce((acc, elem) => acc + elem.price, 0)     

    return (
        <div className={`${styles.OrderFeedBlockBurgerPrice}`}>
            <p className="text text_type_digits-default pr-2">{price}</p>
            <CurrencyIcon type="primary" />
        </div>
    )
}

export default OrderFeedBlockBurgerPrice