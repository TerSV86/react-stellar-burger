import styles from './OrdersMainBlock.module.css'
import OrderFeed from '../OrderFeed/OrderFeed'
import Stats from '../Stats/Stats'

const OrdersMainBlock = () => {
    return (
        <div className={`${styles.OrdersMainBlock}`}>
            <OrderFeed />
            <Stats />
        </div>
    )
}

export default OrdersMainBlock