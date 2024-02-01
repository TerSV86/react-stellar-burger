import styles from './OrderInfo.module.css'
import OrderIngredientList from '../../components/OrderIngredientList/OrderIngredientList'
import OrderInfoTimePrice from '../../components/OrderInfoTimePrice/OrderInfoTimePrice'
import { useSelector, useDispatch } from '../../hooks/hooks'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { connect, disconnect } from '../../services/orderfeed/actions/wsActions'
import { statusOrder } from '../../utils/burger'
import { connectHistoryOrder } from '../../services/historyorder/actions/wsHistoryOrdersActions'
import { wsUrl, wsUrlHistoryOrders } from '../../utils/burger'


const OrderInfo = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const { number } = useParams()
    const orders = useSelector(store => store.orders.burgers)
    const userOrders = useSelector(store => store.userOrders.userOrders)    
    const arrOrders = (orders) ? orders.orders : null;
    const arrUserOrders = (userOrders) ? userOrders.orders : null
    useEffect(() => {
        if (location.pathname === `/feed/${number}`) {
            dispatch(connect(wsUrl))
            return () => {
                dispatch(disconnect())
            }
        } else if (location.pathname === `/profile/order/${number}`) {
            const wsUrl = wsUrlHistoryOrders + '?token=' + localStorage.accessToken.split(' ')[1]
            dispatch(connectHistoryOrder(wsUrl))
            return (() => {
                dispatch(disconnect())
            })
        }

    }, [])

    if (!orders && !userOrders) {
        return <p>Загрузка заказов ...</p>
    }

    let data;
    if (location.pathname === `/feed/${number}`) {
        data = arrOrders?.find((elem) => (number) ? elem.number === +(number) : []);
    } else if (location.pathname === `/profile/order/${number}`) {
        data = arrUserOrders?.find((elem) => (number) ? elem.number === +number : []);
    }

    return (
        <div className={`${styles.OrderInfo}`}>
            <p className='text text_type_digits-default pb-10'>{`#${data?.number}`}</p>
            <p className="text text_type_main-medium pb-3">{`${data?.name}`}</p>
            <p className="text text_type_main-default pb-15">{statusOrder(`${data?.status}`)}</p>
            <p className="text text_type_main-medium pb-6">Состав:</p>
            <OrderIngredientList burgerIngr={data?.ingredients} />
            <OrderInfoTimePrice date={data} />
        </div>
    )
}

export default OrderInfo