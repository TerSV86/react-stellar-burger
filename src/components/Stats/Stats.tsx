import styles from './Stats.module.css'
import OrdersBoard from '../OrdersBoard/OrdersBoard'
import CompletedOrders from '../CompletedOrders/CompletedOrders'
import { useSelector } from '../../hooks/hooks'


const Stats = () => {
    const orders = useSelector((store) => store.orders.burgers);
    let totalTodayOrders;
    let totalOrders;
    if (orders) {
        totalOrders =  orders.total;
        totalTodayOrders = orders.totalToday;
    }

    return (
        <div className={`${styles.Stats}`}>
            <OrdersBoard />
            <CompletedOrders title={'Выполнено за все время'} value={ (totalOrders) ? totalOrders: null} />
            <CompletedOrders title={'Выполнено за сегодня'} value={(totalTodayOrders) ? totalTodayOrders: null} />
        </div>

    )
}

export default Stats