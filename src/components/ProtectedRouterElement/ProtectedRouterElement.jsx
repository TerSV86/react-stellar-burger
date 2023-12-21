import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useParams } from "react-router-dom";


export const ProtectedRouterElement = ({ anonymous = false, element }) => {
    const location = useLocation()
    const user = useSelector(store => store.auth.user)
    const ingredients = useSelector(store => store.ingredients.ingredients)
    /* const orders = useSelector(store => store.orders.burgers.orders) */
    /*  const userOrders = useSelector(store => store.userOrders.userOrders.orders) */


    if (!user && !anonymous) {
        return <Navigate to='/login' state={{ from: location }} />
    }

    console.log(ingredients);
    if (!ingredients) {
        console.log(ingredients);
        return <p>Загрузка ингредиентов ...</p>
    }
    console.log(anonymous);
    if (!ingredients && anonymous) {        
        console.log(ingredients);
        return <p>Загрузка ингредиентов ...</p>
    }

    /* if (!orders) {
        return <p>Загрузка заказов ...</p>
    } */
    /* if (!userOrders && user) {
        return <p>Загрузка заказов пользователя</p>
    } */

    return (element)
}

export const AnonymousRoute = ({ element }) => {

    return <ProtectedRouterElement anonymous={true} element={element} />
}

export const ProtectedRouter = ProtectedRouterElement;