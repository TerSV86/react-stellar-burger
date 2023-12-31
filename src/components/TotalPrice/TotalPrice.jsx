import { useSelector } from 'react-redux';
import styles from './TotalPrice.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const TotalPrice = ({ date }) => {

    const ingredients = useSelector(store => store.ingredients.ingredients)
    const orderIngredients = ingredients.filter((elem) => date.ingredients.some((element) => element === elem._id))

    const sum = orderIngredients.reduce((acc, ingr) => acc + ingr.price + ((ingr.type === 'bun') ? ingr.price : 0), 0)

    return (
        <div className={`${styles.TotalPrice}`}>
            <p className="text text_type_digits-medium pr-2">{sum}</p>
            <CurrencyIcon type="primary" />
        </div>
    )
}

export default TotalPrice