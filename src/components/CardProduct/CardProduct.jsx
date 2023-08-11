import { useState } from 'react'
import styles from './CardProduct.module.css'
import ProductImage from '../ProductImage/ProductImage'
import ProductPrice from '../ProductPrice/ProductPrice'
import ProductName from '../ProductName/ProductName'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'


const CardProduct = ({ link, name, price }) => {
    const [count, setCount] = useState(0);

    const handleClickProduct = () => {
        setCount(count + 1);
    }

    return (
        <div className={`${styles.CardProduct} `} onClick={handleClickProduct}>
            <ProductImage link={link} />
            <ProductPrice prise={price} />
            <ProductName name={name} />
            {(count === 0) ? null : <Counter count={count} size="default" extraClass="m-1" />}
        </div>
    )
}

export default CardProduct