import styles from "./app.module.css";
import AppHeader from "../AppHeader/AppHeader";
import Content from "../Content/Content";
import { useEffect } from 'react'
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { loadIngredients } from "../../services/ingredients/action";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";



function App() {
  const dispatch = useDispatch();
  const { isOpen, isClickButtonOrder } = useSelector(store => store.ingredients.openModalOrder)
  const ingredientDetails = useSelector(store => store.ingredients.openModalIngredient)

  useEffect(() => {
    dispatch(loadIngredients())
  }, [])

  return (
    <div className={`${styles.app} pb-10`}>
      <DndProvider backend={HTML5Backend}>
        <AppHeader />
        <Content />
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
