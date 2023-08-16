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
          console.error(`Ошибка выполнения запроса. Статус: $${res.status}`);
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

  const handleClickCloseModal = (e) => {
    setIsClickButtonOrsder(false)
    setIsOpen(false)
    setDataModal({})
  }

  const { productData } = state;

  return (
    <div className={`${styles.app} pb-10`}>
      <AppHeader />
      <Content productData={productData} onClick={handleClickOpenModal} />
      <ModalOverlay open={isOpen} onClick={(e) => handleClickCloseModal(e)}>
        <Modal onClick={handleClickCloseModal} clickButtonOreder={isClickButtonOrder}>
          {
            isClickButtonOrder ?
              <OrderDetails /> :
              <IngredientDetails
                link={dataModal.image_large}
                name={dataModal.name}
                carbs={dataModal.carbohydrates}
                cal={dataModal.calories}
                fat={dataModal.fat}
                proteins={dataModal.proteins} />
          }
        </Modal>
      </ModalOverlay>
    </div>
  );
}

export default App;
