import styles from './DoneOrders.module.css'
import { useSelector } from '../../hooks/hooks'

const DoneOrders = () => {
    const orders = useSelector((store) => store.orders.burgers)
    
    if (!orders) {
        return <h1>Загрузка ...</h1>
    }
    
    const arrOrders = orders.orders;
    const ordersDone = (arrOrders) ? arrOrders.filter(order => order.status === 'done') : null;
    const lastOrders = (ordersDone) ? ordersDone.slice(0, 30): null;

    return (
        <div className={`${styles.DoneOrders}`}>
            <h2 className={`text text_type_main-large pb-6`}>Готовы:</h2>
            {
                <div className={`${styles.columnsOrderDone}`}>
                    {(lastOrders) ? lastOrders.map((orderDone, index) => {
                        return (
                            <p key={orderDone._id} className={` text text_type_digits-default pr-3`}>{orderDone.number}</p>)

                    }): null}
                </div>
            }
        </div>
    )
}

export default DoneOrders