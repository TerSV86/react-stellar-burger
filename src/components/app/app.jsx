import styles from "./app.module.css";
import AppHeader from "../AppHeader/AppHeader";
import Content from "../Content/Content";
import { useState, useEffect, useReducer } from 'react'
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { url } from "../../utils/data";

import { AppContext } from "../../services/appContext";
import { SelectIngredient } from "../../services/appContext";
import { ingredientDetailsPropType } from "../../utils/prop-types";
import { loadIngredients } from "../../services/ingredients/action";
import { useDispatch, useSelector } from "react-redux";
import { openModalOrder } from "../../services/ingredients/action";



function App() {
  const dispatch = useDispatch();
const {isOpen, isClickButtonOrder} = useSelector(store => store.openModalOrder)
console.log(isOpen, isClickButtonOrder);



  /* const [isOpen, setIsOpen] = useState(false);
  const [isClickButtonOrder, setIsClickButtonOrsder] = useState(false);
  const [dataModal, setDataModal] = useState({}) */




  useEffect(() => {
    dispatch(loadIngredients())
  }, [])

  

  /*  useEffect(() => {
     try {
       const createOrder = async () => {
         const res = await fetch("https://norma.nomoreparties.space/api/orders", {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ 'ingredients': state.selectIngredient })
         })
           .then((respons) => {
             if (!respons.ok) {
               return Promise.reject(`Ошибка ${respons.status}`);
             }
             return respons.json()
           })
           .then((data) => {
             dispatch({
               type: 'PROCESSING_ORDER',
               order: data
             })
           })
 
       }
       createOrder()
     } catch (err) {
       console.error(err)
     }
   }, [isClickButtonOrder]) */


  /* function handleClickOpenModal(e, el) {

    (e.target.id === 'buttonOrder') && setIsClickButtonOrsder(true);
    (el) && setDataModal(el)
    setIsOpen(true)
  }


  function handleClickCloseModal() {
    setIsClickButtonOrsder(false)
    setIsOpen(false)
    setDataModal({})
  } */

const dataModal = 0
  return (
    <div className={`${styles.app} pb-10`}>
      <AppHeader />
      <Content />
      {isOpen && (<Modal /* onClick={handleClickCloseModal} */ title={isClickButtonOrder ? null : "Детали ингредиента"}>
        {
          isClickButtonOrder ?
            <OrderDetails /> :
            <IngredientDetails ingredient={dataModal} />
        }
      </Modal>)}
    </div >
  );
}

export default App;
