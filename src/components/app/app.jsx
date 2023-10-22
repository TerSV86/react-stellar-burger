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
import { closeModal } from "../../services/ingredients/action";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage/LoginPage'
import PasswordRecoveryPage from "../../pages/PasswordRecoveryPage/PasswordRecoveryPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import ResetPasswordPage from '../../pages/ResetPasswordPage/ResetPasswordPage'
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import { burgerApiConfig } from "../../utils/burger-api";
import { ProtectedRouterElement } from "../ProtectedRouterElement/ProtectedRouterElement";



function App() {
  const dispatch = useDispatch();
  const { isOpen, isClickButtonOrder } = useSelector(store => store.ingredients.openModalOrder)
  const ingredientDetails = useSelector(store => store.ingredients.openModalIngredient)
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
    dispatch(loadIngredients())
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
        <Router>
          <AppHeader />
          <Routes>
            <Route path='/' element={<ConstructorPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/forgot-password' element={<PasswordRecoveryPage />} />
            <Route path='/register' element={<RegistrationPage />} />
            <Route path='/reset-password' element={<ResetPasswordPage />} />
            <Route path='/profile' element = {<ProtectedRouterElement  element={<ProfilePage />} />}/>
          </Routes>
        </Router>

        {isOpen && (<Modal title={isClickButtonOrder ? null : "Детали ингредиента"}>
          {
            isClickButtonOrder ?
              <OrderDetails /> :
              <IngredientDetails ingredient={ingredientDetails} />
          }
        </Modal>)}
      </DndProvider>
    </div >
  );
}

export default App;
