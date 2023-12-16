import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { getUserRefresh } from "../../services/auth/actions/actions";

export const ProtectedRouterElement = ({ anonymous = false, element }) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const user = useSelector(store => store.auth.user)
    const isAuthChecked = useSelector(store => store.auth.isAuthChecked)
    const ingredients = useSelector(store => store.ingredients.ingredients)
    const orders = useSelector(store => store.orders.burgers.orders)
    const status = useSelector(store => store.orders.status)
    const userOrders = useSelector(store => store.userOrders.userOrders.orders)
    

   
    /* if (!isAuthChecked) {
        console.log('Загрузка Protected');
        return <Navigate to='/login'  />
    } */
    if(!user && !anonymous) {

        return <Navigate to='/login' />
    }

   /*  if (user && anonymous) {
        console.log('/');
        return <Navigate to='/' />
    } */

    if (!ingredients) {
        return <p>Загрузка ингредиентов ingredient...</p>
    }

    /* if (!user && !anonymous) {
        console.log('Protected login');
        return <Navigate to='/login' replace />
    } */
    if (!orders) {
        console.log("protected");
        return <p>Загрузка ингредиентов orders ...</p>
    }

    /* if(!userOrders && user ) {
        console.log("protected");
      return  <p>Загрузка ингредиентов ...</p>
    } */

    return (element)
}

export const AnonymousRoute = ({ element }) => {

    return <ProtectedRouterElement anonymous={true} element={element} />
}

export const ProtectedRouter = ProtectedRouterElement;