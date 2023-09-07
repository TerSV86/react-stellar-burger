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


const reducer = (state, action) => {

  switch (action.type) {
    case 'INGREDIENTS':
      return { ...state, productData: action.productData }
    case 'ADD_BUN':
      const newState = state.selectIngredient.filter((ingredient) => ingredient.type !== 'bun')
      return { ...state, selectIngredient: [...newState, action.el] }
    case 'ADD_INGREDIENT':
      return { ...state, selectIngredient: [...state.selectIngredient, action.el] }
    case 'DELETE_INGREDIENT':
      const newProduct = state.selectIngredient.filter((ingr) => ingr._id !== action.el._id) //Нужно попаравить!!! В конструкторе должен быть другой идентификатор, так как ингредиентов с одним id может быть много
      console.log(newProduct);
      return { ...state, selectIngredient: [...newProduct] }
    case 'PROCESSING_ORDER':

      return { ...state, order: action.order.order.number }
    default:
      return state;
  }
}

/* const selectReduce = (select, action) => {
  console.log('s1');
  switch (action.type) {
    case 'ADD_INGREDIENT'
      console.log('s2');
      return ([...select, action.el])
    case 'ADD_BUN':
      console.log('s4');
      const newState = select.filter((ingredient) => ingredient.type !== 'bun')
      console.log(action.el);
      return [...newState, action.el]
    case 'DELETE_INGREDIENT':
      const newProduct = select.filter((ingr) => ingr.id !== action.id)
      return [...newProduct]
  }
} */




function App() {
  /* const [state, setState] = useState({
    productData: []
  }); */
  /*  const [selectedIngredient, setSelectorIngredient] = useState([]) */

  const [isOpen, setIsOpen] = useState(false);
  const [isClickButtonOrder, setIsClickButtonOrsder] = useState(false);
  const [dataModal, setDataModal] = useState({})
  const [state, dispatch] = useReducer(reducer, {
    productData: [],
    selectIngredient: [],
    order: 0,
    deleteIngredient: deleteIngredient,
    addIngredient: addIngredient,
    handleClickOpenModal: handleClickOpenModal,
    /* handleOrder, */

  })
  /* const [select, selectDispatch] = useReducer(selectReduce, []) */

  useEffect(() => {
    try {
      const getProductData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) {
          return Promise.reject(`Ошибка ${res.status}`);
        }
        /* setState((prevState) => ({
          ...prevState,
          productData: data.data
        })) */
        dispatch({
          type: 'INGREDIENTS',
          productData: data.data
        })
      }
      getProductData();
    } catch (err) {
      console.error(`Ошибка. Запрос не выполнен:`, err)
    }
  }, [])

  useEffect(() => {
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
  }, [isClickButtonOrder])

  /* function handleOrder() {
    console.log("order");
    dispatch({ type: 'PROCESSING_ORDER' })
  } */


  function handleClickOpenModal(e, el) {

    (e.target.id === 'buttonOrder') && setIsClickButtonOrsder(true);
    (el) && setDataModal(el)
    setIsOpen(true)
  }

  /* const handleClickSelectedIngredient = (e, el) => {
    
    if (el.type === 'bun') {
      setSelectorIngredient((prevState) => {
        const update = prevState.filter((ingredient) => ingredient.type !== 'bun')
        return [...update, el]
      })
    } else {
      setSelectorIngredient((prevState) =>
        [
          ...prevState,
          el
        ]
      )
    }
  } */

  /* const addIngredient = (e, el) => {
    console.log(el);
    if (el.type === 'bun') {
      const newBun = state.filter((ingredient) => ingredient.type !== 'bun')
      console.log('s3');
      selectDispatch({ type: 'ADD_BUN', el })
    } else {
      selectDispatch({ type: 'ADD_INGREDIENT', el })
    }
  } */
  function addIngredient(e, el) {

    if (el.type === 'bun') {

      dispatch({ type: 'ADD_BUN', el })
    } else {
      dispatch({ type: 'ADD_INGREDIENT', el })
    }
  }


  function deleteIngredient(e, el) {
    console.log('deleteIngredient');
    console.log(el);
    dispatch({ type: 'DELETE_INGREDIENT', el })
  }


  function handleClickCloseModal() {
    setIsClickButtonOrsder(false)
    setIsOpen(false)
    setDataModal({})
  }
  /*  const { productData } = state;
   if (!productData || productData.length === 0) {
     return null;
   } */

  return (
    <div className={`${styles.app} pb-10`}>
      <AppContext.Provider value={state.productData}>
        <SelectIngredient.Provider /* value={selectedIngredient} */ value={{ selectIngredient: state.selectIngredient, deleteIngredient: deleteIngredient, addIngredient: addIngredient, handleClickOpenModal: handleClickOpenModal, order: state.order /* handleOrder */ }}>
          <AppHeader />
          <Content  /* onClick={handleClickOpenModal} */ />
          {isOpen && (<Modal onClick={handleClickCloseModal} title={isClickButtonOrder ? null : "Детали ингредиента"}>
            {
              isClickButtonOrder ?
                <OrderDetails /> :
                <IngredientDetails ingredient={dataModal} />
            }
          </Modal>)}
        </SelectIngredient.Provider>
      </AppContext.Provider>
    </div >
  );
}

export default App;
