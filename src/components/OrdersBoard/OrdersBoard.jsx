import styles from './OrdersBoard.module.css'
import DoneOrders from '../DoneOrders/DoneOrders'
import OrdersInWork from '../OrdersInWork/OrdersInWork'
import { useSelector } from 'react-redux'

const OrdersBoard = () => {
    
    return (
        <div className={`${styles.OrdersBoard}`}>
            <DoneOrders />
            <OrdersInWork />
        </div>
    )
}

export default OrdersBoard