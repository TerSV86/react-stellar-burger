import styles from './DoneOrders.module.css'
import { useSelector } from 'react-redux'

const DoneOrders = () => {
    const orders = useSelector((store) => store.orders.burgers.orders)
    if (!orders) {
        return <h1>Загрузка ...</h1>
    }
    const ordersDone = orders.filter(order => order.status === 'done')
    const lastOrders = ordersDone.slice(0, 30)

    return (
        <div className={`${styles.DoneOrders}`}>
            <h2 className='text text_type_main-large pb-6' style={{ color: '##F2F2F3' }}>Готовы:</h2>
            {
                <div className={`${styles.columnsOrderDone}`}>
                    {lastOrders.map((orderDone, index) => {
                        return (
                            <p key={orderDone._id} className={` text text_type_digits-default pr-3`}>{orderDone.number}</p>)

                    })}
                </div>
            }
        </div>
    )
}

export default DoneOrders