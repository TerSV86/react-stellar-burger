import styles from './OrderFeedPage.module.css'
import OrderFeed from '../../components/OrderFeed/OrderFeed'
import Stats from '../../components/Stats/Stats'
import OrdersMainBlock from '../../components/OrdersMainBlock/OrdersMainBlock'
import { useDispatch } from 'react-redux'
import { useEffect, memo } from 'react'
import { connect, disconnect } from '../../services/orderfeed/actions/wsActions'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'

const wsUrl = 'wss://norma.nomoreparties.space/orders/all';


const OrderFeedPage = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const {number} = useParams()
    console.log(location);

    useEffect(() => {
        dispatch(connect(wsUrl))
    }, [])
console.log(location.pathname == `/feed/${number}`, location.pathname, `/feed/${number}` );
    if (location.pathname === `/feed/${number}`) {
        console.log('ryr');
        return (
            <Outlet />
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