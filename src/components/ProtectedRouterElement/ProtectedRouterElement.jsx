import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useParams } from "react-router-dom";


export const ProtectedRouterElement = ({ anonymous = false, element }) => {
    const location = useLocation()
    const user = useSelector(store => store.auth.user)
    const ingredients = useSelector(store => store.ingredients.ingredients)
    
    if (!user && !anonymous) {
        return <Navigate to='/login' state={{ from: location }} />
    }
    
    if (!ingredients) {
       
        return <p>Загрузка ингредиентов ...</p>
    }    

   
    return (element)
}

export const AnonymousRoute = ({ element }) => {

    return <ProtectedRouterElement anonymous={true} element={element} />
}

export const ProtectedRouter = ProtectedRouterElement;