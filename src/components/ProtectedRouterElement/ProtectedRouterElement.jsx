import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { loadIngredients } from "../../services/ingredients/action";
import { useEffect } from 'react'
import { checkAutoLogin } from "../../services/auth/actions/actions";


export const ProtectedRouterElement = ({ anonymous = false, element }) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const user = useSelector(store => store.auth.user)
  const ingredients = useSelector((store) => store.ingredients.ingredients)
  const { loading } = useSelector((store) => store.ingredients)

  useEffect(() => {
    if (!user) {
      dispatch(checkAutoLogin())
    }
  }, [])

  if (!user && !anonymous) {
    console.log('login');
    return <Navigate to='/login' state={{ from: location }} />
  }

  if (!ingredients.length) {

    return <p>Загрузка ингредиентов ...</p>
  }


  return (element)
}

export const AnonymousRoute = ({ element }) => {
  return <ProtectedRouterElement anonymous={true} element={element} />

}

export const ProtectedRouter = ProtectedRouterElement;

