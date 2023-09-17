import styles from "./app.module.css";
import AppHeader from "../AppHeader/AppHeader";
import Content from "../Content/Content";
import { useState, useEffect } from 'react'
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { url } from "../../utils/data";



function App() {
  const [state, setState] = useState({
    productData: []
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isClickButtonOrder, setIsClickButtonOrsder] = useState(false);
  const [dataModal, setDataModal] = useState({})

  useEffect(() => {
    try {
      const getProductData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) {
          return Promise.reject(`Ошибка ${res.status}`);
        }
        setState((prevState) => ({
          ...prevState,
          productData: data.data
        }))
      }
      getProductData();
    } catch (err) {
      console.error(`Ошибка. Запрос не выполнен:`, err)
    }
  }, [])

  const handleClickOpenModal = (e, el) => {
    (e.target.id === 'buttonOrder') && setIsClickButtonOrsder(true);
    (el) && setDataModal(el)
    setIsOpen(true)
  }

  const handleClickCloseModal = () => {
    setIsClickButtonOrsder(false)
    setIsOpen(false)
    setDataModal({})
  }
  const { productData } = state;
  if (!productData || productData.length === 0) {
    return null;
  }
  
  return (
    <div className={`${styles.app} pb-10`}>
      <AppHeader />
      <Content productData={productData} onClick={handleClickOpenModal} />
      {isOpen && (<Modal onClick={handleClickCloseModal} title={isClickButtonOrder ? null : "Детали ингредиента"}>
        {
          isClickButtonOrder ?
            <OrderDetails /> :
            <IngredientDetails ingredient={dataModal} />
        }
      </Modal>)}
    </div>
  );
}

export default App;
