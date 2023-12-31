import { orderIngredientPricePropType } from '../../utils/prop-types';
import styles from './OrderIngredientPrice.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const OrderIngredientPrice = ({ price, count }) => {
    
    const displayCount = (count>1)? `${count}x`: '';
    return (
        <div className={`${styles.OrderIngredientPrice}`}>
            <p className="text text_type_digits-default"> {`${displayCount}${price}`} </p>
            <CurrencyIcon type="primary" />
        </div>
    )
}

OrderIngredientPrice.propTypes = orderIngredientPricePropType;

export default OrderIngredientPrice