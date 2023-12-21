import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { loadIngredients } from "../../services/ingredients/action";
import { useEffect } from 'react'


export const ProtectedRouterElement = ({ anonymous = false, element }) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const user = useSelector(store => store.auth.user)
    const ingredients = useSelector((store) => store.ingredients.ingredients)
    const { loading } = useSelector((store) => store.ingredients)
    console.log('Rout', ingredients, anonymous, loading);



    if (!user && !anonymous) {
        return <Navigate to='/login' state={{ from: location }} />
    }
    console.log('Router', (!ingredients.length));
    if (!ingredients.length) {
        console.log("Router");
        return <p>Загрузка ингредиентов ...</p>
    }


    return (element)
}

export const AnonymousRoute = ({ element }) => {
    return <ProtectedRouterElement anonymous={true} element={element} />

}

export const ProtectedRouter = ProtectedRouterElement;

/* export default function ProtectedRoute({ children, anonymous = false }) {
    const isLoggedIn = useSelector((store) => store.auth.isAuthChecked);
  
    const location = useLocation();
    const from = location.state?.from || '/';
    // Если разрешен неавторизованный доступ, а пользователь авторизован...
    if (anonymous && isLoggedIn) {
      // ...то отправляем его на предыдущую страницу
      return <Navigate to={ from } />;
    }
  
    // Если требуется авторизация, а пользователь не авторизован...
    if (!anonymous && !isLoggedIn) {
      // ...то отправляем его на страницу логин
      return <Navigate to="/login" state={{ from: location}}/>;
    }
  
    // Если все ок, то рендерим внутреннее содержимое
    return children;
  } */