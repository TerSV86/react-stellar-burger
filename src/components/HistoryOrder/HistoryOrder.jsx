import { useDispatch, useSelector } from 'react-redux';
import OrderFeedBlock from '../OrderFeedBlock/OrderFeedBlock';
import styles from './HistoryOrder.module.css'
import HistoryOrderBlock from '../HistoryOrderBlock/HistoryOrderBlock';
import { connect } from '../../services/historyorder/actions/wsHistoryOrdersActions'
import { useEffect } from 'react'
import { getCookie } from '../../utils/cookie';
import { Link } from 'react-router-dom';

const wsUrl = 'wss://norma.nomoreparties.space/orders'

const HistoryOrder = () => {    
    const userOrders = useSelector(store => store.userOrders.userOrders.orders)
    
    if (!userOrders) {
        return <h2>Загрузка ...</h2>
    }
    return (
       
            <div className={`${styles.HistoryOrder} custom-scroll`}>
                {(userOrders.length) ? (userOrders.map((order) =>
                    <HistoryOrderBlock key={order._id} ingredients={order.ingredients} number={order.number} name={order.name} date={order.updatedAt} status={order.status} />)) : (<h2>Заказы отсутствуют</h2>)}
            </div>
        

    )
}

export default HistoryOrder