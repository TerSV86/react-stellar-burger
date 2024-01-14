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
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage/LoginPage'
import PasswordRecoveryPage from "../../pages/PasswordRecoveryPage/PasswordRecoveryPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import ResetPasswordPage from '../../pages/ResetPasswordPage/ResetPasswordPage'
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import { burgerApiConfig } from "../../utils/burger-api";
import { AnonymousRoute, ProtectedRouter } from "../ProtectedRouterElement/ProtectedRouterElement";
import HistoryOrder from "../HistoryOrder/HistoryOrder";
import { checkAutoLogin, getUser, getUser1 } from "../../services/auth/actions/actions";
import OrderFeedPage from "../../pages/OrderFeedPage/OrderFeedPage";
import OrderInfo from "../../pages/OrderInfo/OrderInfo";
import { disconnect, connect } from "../../services/orderfeed/actions/wsActions";
import { connectHistoryOrder } from '../../services/historyorder/actions/wsHistoryOrdersActions'
/* import { getUserRefresh } from "../../services/auth/actions/actions"; */
import NotFound404 from "../NotFound404/NotFound404";

function App() {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;
  const { isOpen } = useSelector(store => store.ingredients.openModalOrder)
  const ingredientDetails = useSelector(store => store.ingredients.openModalIngredient)
  const { error, loading } = useSelector(store => store.ingredients)

  const handleModalClose = () => {
    // Возвращаемся к предыдущему пути при закрытии модалки
    navigate(-1);
  };

  useEffect(() => {
    dispatch(checkAutoLogin())
    dispatch(loadIngredients())
  }, [])

  if (loading) {
    return <h2 style={{ color: 'red' }}>Загрузка...</h2>
  }

  if (error && !loading) {
    return <h2>{`Ошибка. Запрос не выполнен: ${error}`}</h2>
  }

  return (
    <div className={`${styles.app} pb-10`}>
      <DndProvider backend={HTML5Backend}>
        <AppHeader />
        <Routes location={background || location}>
          <Route path='/' element={<AnonymousRoute element={<ConstructorPage />} />} />
          <Route path='/ingredient/:ingredientId' element={<AnonymousRoute element={<IngredientDetails />} />} />
          <Route path='/login' element={<AnonymousRoute element={<LoginPage />} />} />
          <Route path='/forgot-password' element={<AnonymousRoute element={<PasswordRecoveryPage />} />} />
          <Route path='/register' element={<AnonymousRoute element={<RegistrationPage />} />} />
          <Route path='/reset-password' element={<AnonymousRoute element={<ResetPasswordPage />} />} />
          <Route path='/profile' element={<ProtectedRouter element={<ProfilePage />} />} >
            <Route path='order' element={<ProtectedRouter element={<HistoryOrder />} />} />
            <Route path='order/:number' element={<ProtectedRouter element={<OrderInfo />} />} />
          </Route>
          <Route path='/feed' element={<AnonymousRoute element={<OrderFeedPage />} />}>
            <Route path=':number' element={<AnonymousRoute element={<OrderInfo />} />} />
          </Route>
          <Route path="*" element={<AnonymousRoute element={<NotFound404 />} />} />
        </Routes>

        {background && (
          <Routes>
            <Route
              path='/ingredient/:ingredientId'
              element={
                <AnonymousRoute
                  element={
                    <Modal title={"Детали ингредиента"} onClose={handleModalClose} >
                      {<IngredientDetails ingredient={ingredientDetails} />}
                    </Modal>}
                />}
            />
            <Route
              path='/feed/:number'
              element={
                <AnonymousRoute
                  element={
                    <Modal onClose={handleModalClose}>
                      <OrderInfo />
                    </Modal>}
                />}
            />
            <Route
              path='profile/order/:number'
              element={
                <ProtectedRouter element={
                  <Modal onClose={handleModalClose}>
                    {<OrderInfo />}
                  </Modal>}
                />}
            />
          </Routes>
        )}
        {isOpen && (
          <Routes>
            <Route
              path='/'
              element={<ProtectedRouter element={
                <Modal onClose={handleModalClose} >
                  <OrderDetails />
                </Modal>
              } />} />
          </Routes>)
        }
      </DndProvider>
    </div >
  );
}


export default App;
