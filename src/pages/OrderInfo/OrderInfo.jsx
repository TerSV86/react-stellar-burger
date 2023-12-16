import OrderIngredient from '../../components/OrderIngredient/OrderIngredient'
import styles from './OrderInfo.module.css'
import OrderIngredientList from '../../components/OrderIngredientList/OrderIngredientList'
import OrderInfoTimePrice from '../../components/OrderInfoTimePrice/OrderInfoTimePrice'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { connect } from '../../services/orderfeed/actions/wsActions'

const wsUrl = 'wss://norma.nomoreparties.space/orders/all';
const OrderInfo = () => {
    console.log("orderinfo");
    const location = useLocation()
    const dispatch = useDispatch()
    const { number } = useParams()
    console.log('OrderInfo ', location);
    const orders = useSelector(store => store.orders.burgers.orders)
    const userOrders = useSelector(store => store.userOrders.userOrders.orders)
    const user = useSelector(store => store.auth.user)
    console.log(userOrders);
    useEffect(() => {

        dispatch(connect(wsUrl))
    }, [])

    console.log(number);
    const order =  orders.find((elem) => elem.number === +number);
    const userOrder = user ? userOrders.find((elem) => console.log('elem',elem)||elem.number === +number) : null
    console.log(userOrder);
    let data;
    order ? (data = order) : (data = userOrder)
    console.log(data);
    return (
        console.log('tyt') || <div className={`${styles.OrderInfo}`}>
            <p className='text text_type_digits-default pb-10'>{`#${data.number}`}</p>
            <p className="text text_type_main-medium pb-3">{`${data.name}`}</p>
            <p className="text text_type_main-default pb-15">{`${data.status}`}</p>
            <p className="text text_type_main-medium pb-6">Состав:</p>
            <OrderIngredientList burgerIngr={data.ingredients} />
            <OrderInfoTimePrice date={data} />
        </div>
    )
}

export default OrderInfo