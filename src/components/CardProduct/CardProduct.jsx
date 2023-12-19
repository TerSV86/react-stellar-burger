import styles from './CardProduct.module.css'
import ProductImage from '../ProductImage/ProductImage'
import ProductPrice from '../ProductPrice/ProductPrice'
import ProductName from '../ProductName/ProductName'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { cardProductPropType } from '../../utils/prop-types'
import { useDrag } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { openModalIngredient } from '../../services/ingredients/action'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import React from 'react'

const CardProduct = ({ product, index }) => {

    const location = useLocation();
    const ingredientId = product['_id']

    const navigate = useNavigate()
    const id = product._id;
    const dispatch = useDispatch()
    const selectIngredient = useSelector(store => store.ingredientList.selectIngredient)
    const ingredientList = selectIngredient.filter(ingredient => ingredient._id === id)
    let count = 0;
    const countingIngredient = (ingredient) => {
        if (ingredient[0] !== undefined && ingredient[0].type === 'bun') {
            count = 2;
            return count
        }
        return count = ingredient.length
    }
    countingIngredient(ingredientList)

    const [{ isDrag }, dragRef] = useDrag({
        type: product.type !== 'bun' ? 'ingredient' : 'ingredientBun',
        item: product,
    })

    const handleClickIngredient = () => {
        console.log(product);
        dispatch(openModalIngredient(product))
        /* navigate(`/ingredient/${index}`) */
    }

    return (
        <Link key={ingredientId}
            to={`/ingredient/${ingredientId}`}
            state={{ background: location }}
            className={styles.link}
        >
            {(!isDrag) && <article className={`${styles.CardProduct} pb-6`} ref={dragRef} onClick={handleClickIngredient}>
                <ProductImage link={product.image} name={product.name} />
                <ProductPrice price={product.price} />
                <ProductName name={product.name} />
                {count === 0 ? null : <Counter count={count} size="default" extraClass="m-1" />}
            </article>}
        </Link>
    )
}

CardProduct.propTypes = cardProductPropType;

export default React.memo(CardProduct)