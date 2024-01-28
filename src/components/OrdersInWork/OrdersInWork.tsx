import styles from './OrdersInWork.module.css'
import { useSelector } from '../../hooks/hooks'


const OrdersInWork = () => {
    const orders = useSelector(store => store.orders.burgers)
    const arrOrders = (orders) ? orders.orders : null;
    const ordersInWork = (arrOrders) ? arrOrders.filter((order) => !(order.status === 'done')) : null;

    return (
        <div className={`${styles.OrdersInWork}`}>
            <h1 className='text text_type_main-large pb-6'>В работе:</h1>
            {(ordersInWork) ? ordersInWork.map((order) => {
                return (
                    <p key={order._id} className="text text_type_digits-default pb-2">{order.number}</p>
                )
            }): null}
        </div>
    )
}

export default OrdersInWork