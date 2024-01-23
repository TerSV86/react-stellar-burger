import styles from './OrderFeedBlock.module.css'
import OrderFeedHeader from "../OrderFeedBlockHeader/OrderFeedBlockHeader"
import OrderFeedBlockTitle from '../OrderFeedBlockTitle/OrderFeedBlockTitle'
import OrderFeedBlockIngredientsBurger from '../OrderFeedBlockIngredientsBurger/OrderFeedBlockIngredientsBurger'
import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import { TIngredient } from '../../utils/type'

type Prop = {
    ingredients: string[];
    number: number;
    name: string;
    date: string;
}

const OrderFeedBlock = ({ ingredients, number, name, date }: Prop) => {    
    const location = useLocation()

    return (
        <Link
            key={number}
            to={`/feed/${number}`}
            state={{ background: location }}
            className={styles.link}>
            <article className={`${styles.OrderFeedBlock} p-6`}>
                <OrderFeedHeader date={date} number={number} />
                <OrderFeedBlockTitle name={name} />
                <OrderFeedBlockIngredientsBurger ingredients={ingredients} />
            </article>
        </Link>

    )
}

export default React.memo(OrderFeedBlock)