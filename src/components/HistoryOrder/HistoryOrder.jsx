import { useDispatch, useSelector } from 'react-redux';
import OrderFeedBlock from '../OrderFeedBlock/OrderFeedBlock';
import styles from './HistoryOrder.module.css'
import HistoryOrderBlock from '../HistoryOrderBlock/HistoryOrderBlock';
import { connectHistoryOrder, disconnect } from '../../services/historyorder/actions/wsHistoryOrdersActions'
import { useEffect } from 'react'
import { checkAutoLogin } from '../../services/auth/actions/actions';
import { getCookie } from '../../utils/cookie';
import { Link } from 'react-router-dom';
import { wsUrlHistoryOrders } from '../../utils/burger';


/* const wsUrl = 'wss://norma.nomoreparties.space/orders' */

const HistoryOrder = () => {
    const dispatch = useDispatch();
    const userOrders = useSelector(store => store.userOrders.userOrders.orders);
    const user = useSelector (store => store.auth.user)    

    useEffect(() => {
        console.log('dispatch');
        /* dispatch(checkAutoLogin()) */
        dispatch(connectHistoryOrder(wsUrlHistoryOrders))
        return (() => {
            dispatch(disconnect())
        })
    }, [])

    if (!userOrders) {
        return <h2>Загрузка ...</h2>
    }
    const reverseUserOrders = [...userOrders].reverse();
    return (

        <div className={`${styles.HistoryOrder} custom-scroll`}>
            {(userOrders.length) ? (reverseUserOrders.map((order) =>
                <HistoryOrderBlock key={order._id} ingredients={order.ingredients} number={order.number} name={order.name} date={order.updatedAt} status={order.status} />)) : (<h2>Заказы отсутствуют</h2>)}
        </div>


    )
}

export default HistoryOrder