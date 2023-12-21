import styles from './OrderFeedBlock.module.css'
import OrderFeedHeader from "../OrderFeedBlockHeader/OrderFeedBlockHeader"
import OrderFeedBlockTitle from '../OrderFeedBlockTitle/OrderFeedBlockTitle'
import OrderFeedBlockIngredientsBurger from '../OrderFeedBlockIngredientsBurger/OrderFeedBlockIngredientsBurger'
import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import { openModal } from '../../services/ingredients/action'
import { useDispatch } from 'react-redux'

const OrderFeedBlock = ({ ingredients, number, name, date, order }) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const handleClick = () => {
        console.log('click');
        dispatch(openModal())
        const orderJSON = JSON.stringify(order)
        localStorage.setItem('order', orderJSON)
    } 

    return (
        <Link
            key={number}
            to={`/feed/${number}`}
            state={{ background: location }}
            className={styles.link}
            onClick={handleClick}>
            <article className={`${styles.OrderFeedBlock} p-6`}>
                <OrderFeedHeader date={date} number={number} />
                <OrderFeedBlockTitle name={name} />
                <OrderFeedBlockIngredientsBurger ingredients={ingredients} />
            </article>
        </Link>

    )
}

export default React.memo(OrderFeedBlock)