import { useState } from 'react'
import styles from './CardProduct.module.css'
import ProductImage from '../ProductImage/ProductImage'
import ProductPrice from '../ProductPrice/ProductPrice'
import ProductName from '../ProductName/ProductName'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { cardProductPropType } from '../../utils/prop-types'

const CardProduct = ({ link, name, price, onClick}) => {
    const [count, setCount] = useState(1);

    /* const handleClickProduct = () => {
        setCount(count + 1);
    } */

    return (
        <article className={`${styles.CardProduct} `} /* onClick={handleClickProduct} */ onClick={onClick} >
            <ProductImage link={link} />
            <ProductPrice price={price} />
            <ProductName name={name} />
            {(count === 0) ? null : <Counter count={count} size="default" extraClass="m-1" />}
        </article>
    )
}

CardProduct.propTypes = cardProductPropType;

export default CardProduct