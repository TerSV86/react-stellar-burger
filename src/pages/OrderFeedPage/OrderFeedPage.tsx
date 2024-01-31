import styles from './OrderFeedPage.module.css'
import OrdersMainBlock from '../../components/OrdersMainBlock/OrdersMainBlock'
import { useDispatch,} from 'react-redux'
import { useEffect, memo } from 'react'
import { connect, disconnect } from '../../services/orderfeed/actions/wsActions'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { wsUrl } from '../../utils/burger'



const OrderFeedPage = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { number } = useParams() 

    useEffect(() => {
        dispatch(connect(wsUrl))
        return () => {
            dispatch(disconnect())
        }
    }, [])

    if (location.pathname === `/feed/${number}`) {
        return (
            <div className={`${styles.outlet}`}>
                <Outlet />
            </div>
        )
    }
    
    return (
        <main className={`${styles.OrderFeedPage}`}>
            <h1 className='text text_type_main-large pt-10 pb-5'>Лента заказов</h1>
            <OrdersMainBlock />
        </main>
    )
}

export default OrderFeedPage