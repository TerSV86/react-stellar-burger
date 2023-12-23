import styles from './Stats.module.css'
import OrdersBoard from '../OrdersBoard/OrdersBoard'
import CompletedOrders from '../CompletedOrders/CompletedOrders'
import { useSelector } from 'react-redux'

const Stats = () => {
    const totalOrders = useSelector((store)=> store.orders.burgers.total)
    const totalTodayOrders = useSelector((store)=> store.orders.burgers.totalToday)
    return (
        <div className={`${styles.Stats}`}>
            <OrdersBoard />
            <CompletedOrders title={'Выполнено за все время'} value={totalOrders}/>
            <CompletedOrders  title={'Выполнено за сегодня'} value={totalTodayOrders}/>             
        </div>
        
    )
}

export default Stats