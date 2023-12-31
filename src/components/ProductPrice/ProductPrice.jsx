import { productPricePropType } from '../../utils/prop-types'
import styles from './ProductPrice.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'

const ProductPrice = ({price}) => {
    return (
        <div className={`${styles.ProductPrice} m-1`}>
        <span className="text text_type_digits-default">{price}</span>
        <CurrencyIcon type="primary" />
        </div>
    )
}

ProductPrice.propTypes = productPricePropType

export default React.memo(ProductPrice)