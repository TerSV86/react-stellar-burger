import styles from './OrderFeed.module.css'
import OrderFeedBlock from '../OrderFeedBlock/OrderFeedBlock'
import { useSelector } from '../../hooks/hooks'

const OrderFeed = () => {

    const orders = useSelector(store => store.orders.burgers)

    if (!orders) {
        return <h2>Loading ...</h2>
    }
    const arrOrders = (orders) ? orders.orders : null;
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={`${styles.OrderFeed} custom-scroll`}>
                {(arrOrders) ? arrOrders.map((order, index) =>
                    <OrderFeedBlock key={order._id} ingredients={order.ingredients} number={order.number} name={order.name} date={order.updatedAt} />)
                : null}
            </div>
        </div>

    )
}

export default OrderFeed