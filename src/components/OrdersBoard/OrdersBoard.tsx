import styles from './OrdersBoard.module.css'
import DoneOrders from '../DoneOrders/DoneOrders'
import OrdersInWork from '../OrdersInWork/OrdersInWork'


const OrdersBoard = () => {
    
    return (
        <div className={`${styles.OrdersBoard}`}>
            <DoneOrders />
            <OrdersInWork />
        </div>
    )
}

export default OrdersBoard