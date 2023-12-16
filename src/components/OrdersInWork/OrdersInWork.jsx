import styles from './OrdersInWork.module.css'
import { useSelector } from 'react-redux'

const OrdersInWork = () => {
    const orders = useSelector(store => store.orders.burgers.orders)
    const ordersInWork = orders.filter((order) => !(order.status === 'done'))
    console.log(ordersInWork);
    return (
        <div className={`${styles.OrdersInWork}`}>
            <h1 className='text text_type_main-large pb-6'>В работе:</h1>
            {ordersInWork.map((order) => {
                return (
                    <p className="text text_type_digits-default pb-2">{order.number}</p>
                )
            })}
        </div>
    )
}

export default OrdersInWork