import styles from './OrderFeed.module.css'
import OrderFeedBlock from '../OrderFeedBlock/OrderFeedBlock'
import { useSelector } from 'react-redux'

const OrderFeed = () => {
    
    const orders = useSelector(store => store.orders.burgers.orders)
   
    if (!orders) {
        return <h2>Loading ...</h2>
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            <div className={`${styles.OrderFeed} custom-scroll`}>
                {orders.map((order, index) =>
                    <OrderFeedBlock key={order._id} ingredients={order.ingredients} number={order.number} name={order.name} date={order.updatedAt} />)
                }
            </div>
        </div>

    )
}

export default OrderFeed