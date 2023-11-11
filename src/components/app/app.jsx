import styles from "./app.module.css";
import AppHeader from "../AppHeader/AppHeader";
import ConstructorPage from "../../pages/ConstructorPage/ConstructorPage";
import { useEffect } from 'react'
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { loadIngredients } from "../../services/ingredients/action";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Routes, Route, Outlet } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage/LoginPage'
import PasswordRecoveryPage from "../../pages/PasswordRecoveryPage/PasswordRecoveryPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import ResetPasswordPage from '../../pages/ResetPasswordPage/ResetPasswordPage'
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import { burgerApiConfig } from "../../utils/burger-api";
import { ProtectedRouterElement } from "../ProtectedRouterElement/ProtectedRouterElement";
import IngredientPage from "../../pages/IngredientPage/IngredientPage";
import HistoryOrder from "../HistoryOrder/HistoryOrder";
import { getUser, getUser1 } from "../../services/auth/actions/actions";



function App() {
  console.log('app');
  const dispatch = useDispatch();
  const { /*isOpen,*/ isClickButtonOrder } = useSelector(store => store.ingredients.openModalOrder)
  //const ingredientDetails = useSelector(store => store.ingredients.openModalIngredient)
  const { error, loading } = useSelector(store => store.ingredients)

  useEffect(() => {

    setInterval(() => {
      console.log(localStorage.refreshToken);
      if (localStorage.refreshToken) {
        fetch(`${burgerApiConfig.baseUrl}auth/token`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            authorization: localStorage.getItem('accessToken')
          },
          body: JSON.stringify({
            "token": localStorage.refreshToken,
          })
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            localStorage.access = data.accessToken;
            localStorage.refreshToken = data.refreshToken;
          })
      }
    }, 1200000)

  }, [])

  useEffect(() => {
    console.log('get');
    dispatch(loadIngredients())
    dispatch(getUser1())
  }, [])

  if (loading) {
    return <h2>Загрузка...</h2>
  }

  if (error && !loading) {
    return <h2>{`Ошибка. Запрос не выполнен: ${error}`}</h2>
  }

  return (
    <div className={`${styles.app} pb-10`}>
      <DndProvider backend={HTML5Backend}>

        <AppHeader />
        <Routes>
          <Route path='/' exact element={<ConstructorPage />} >
            <Route path='ingredient/:id' element={<IngredientPage />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgot-password' element={<PasswordRecoveryPage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
          <Route path='/profile' element={<ProtectedRouterElement element={<ProfilePage />} />}>
            <Route path='order' exact element={<HistoryOrder />} />
            <Route path='order/:id' element={<h2>Заказ</h2>} />
          </Route>

        </Routes>


        {isClickButtonOrder && (<Modal title={"Детали ингредиента"}>
          {
            <OrderDetails />}
        </Modal>)}
      </DndProvider>
    </div >
  );
}

export default App;
