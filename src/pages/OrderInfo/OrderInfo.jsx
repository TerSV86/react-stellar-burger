import styles from './OrderInfo.module.css'
import OrderIngredientList from '../../components/OrderIngredientList/OrderIngredientList'
import OrderInfoTimePrice from '../../components/OrderInfoTimePrice/OrderInfoTimePrice'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { connect, disconnect } from '../../services/orderfeed/actions/wsActions'
import { statusOrder } from '../../utils/burger'
import { connectHistoryOrder } from '../../services/historyorder/actions/wsHistoryOrdersActions'
import { checkAutoLogin } from '../../services/auth/actions/actions'
import { wsUrl, wsUrlHistoryOrders } from '../../utils/burger'

/* const wsUrl = 'wss://norma.nomoreparties.space/orders/all';
const wsUrlUser = 'wss://norma.nomoreparties.space/orders'; */
const OrderInfo = () => {    
    const location = useLocation()
    const dispatch = useDispatch()
    const { number } = useParams()

    const orders = useSelector(store => store.orders.burgers.orders)
    const userOrders = useSelector(store => store.userOrders.userOrders.orders)
    const user = useSelector(store => store.auth.user)

    useEffect(() => {        
        if (location.pathname === `/feed/${number}`) {
            dispatch(connect(wsUrl))
            return () => {
                dispatch(disconnect())
            }
        } else if (location.pathname === `/profile/order/${number}`) {
            /* dispatch(checkAutoLogin()) */
            dispatch(connectHistoryOrder(wsUrlHistoryOrders))
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
        data = orders.find((elem) => elem.number === +number);
    } else if (location.pathname === `/profile/order/${number}`) {
        console.log(`tyt`, number);        
        data = userOrders.find((elem) => console.log(elem.number === +number) || elem.number === +number)        
    }
console.log(data, userOrders);
    return (
        <div className={`${styles.OrderInfo}`}>
            <p className='text text_type_digits-default pb-10'>{`#${data.number}`}</p>
            <p className="text text_type_main-medium pb-3">{`${data.name}`}</p>
            <p className="text text_type_main-default pb-15">{statusOrder(`${data.status}`)}</p>
            <p className="text text_type_main-medium pb-6">Состав:</p>
            <OrderIngredientList burgerIngr={data.ingredients} />
            <OrderInfoTimePrice date={data} />
        </div>
    )
}

export default OrderInfo