import styles from './ProductPrice.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const ProductPrice = ({prise}) => {
    return (
        <div className={`${styles.ProductPrice} m-1`}>
        <span className="text text_type_digits-default">{prise}</span>
        <CurrencyIcon type="primary" />
        </div>
    )
}

export default ProductPrice