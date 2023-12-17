import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import OrderFeedBlockHeader from '../OrderFeedBlockHeader/OrderFeedBlockHeader'
import OrderFeedBlockIngredientsBurger from '../OrderFeedBlockIngredientsBurger/OrderFeedBlockIngredientsBurger'
import OrderFeedBlockTitle from '../OrderFeedBlockTitle/OrderFeedBlockTitle'
import styles from './HistoryOrderBlock.module.css'
import { statusOrder } from '../../utils/burger'
import { historyOrderBlockPropType } from '../../utils/prop-types'
import React from 'react'

const HistoryOrderBlock = ({ ingredients, number, name, date, status }) => {
    const location = useLocation();   

    return (
        <Link
            key={number}
            to={`${number}`}
            state={{ background: location }}            
            className={styles.link}        >
            <article className={`${styles.HistoryOrderBlock} p-6`}>
                <OrderFeedBlockHeader date={date} number={number} />
                <OrderFeedBlockTitle name={name} />
                <p className="text text_type_main-default pt-2 pb-6" style={{ color: (status === 'done') ? '#00CCCC' : 'inherit' }}>{statusOrder(status)}</p>
                <OrderFeedBlockIngredientsBurger ingredients={ingredients} />
            </article>
        </Link>

    )
}

HistoryOrderBlock.propTypes = historyOrderBlockPropType;

export default React.memo (HistoryOrderBlock)