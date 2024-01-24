import { useDispatch, useSelector } from "../../hooks/hooks";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { loadIngredients } from "../../services/ingredients/action";
import { useEffect } from 'react'
import { checkAutoLogin } from "../../services/auth/actions/actions";

type Prop = {
  element: JSX.Element;
  anonymous?: boolean;
}

export const ProtectedRouterElement = ({ anonymous = false, element }: Prop) => {
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
    
    return <Navigate to='/login' state={{ from: location }} />
  }

  if (!ingredients.length) {

    return <p>Загрузка ингредиентов ...</p>
  }


  return (element)
}


export const AnonymousRoute = ({ element }: Prop) => {
  return <ProtectedRouterElement anonymous={true} element={element} />

}

export const ProtectedRouter = ProtectedRouterElement;

