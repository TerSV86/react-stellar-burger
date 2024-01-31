import { useSelector } from '../../hooks/hooks'
import styles from './OrderFeedBlockBurgerPrice.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

type Prop = {
    ingredients: string[];
}

const OrderFeedBlockBurgerPrice = ({ ingredients }: Prop) => {
    const product = useSelector(store => store.ingredients.ingredients)
    // проверить ingredients на null. Сейчас просто ингредиент = null отсеивается some. Нижно убрать заказ
    const ingredientList = product.filter((elem) => ingredients.some((element) =>
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