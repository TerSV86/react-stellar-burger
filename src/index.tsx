import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "./services/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RootState } from "./services/reducer";
import { WebSocketStatus } from "./utils/burger";



export const store = configureStore(
  {
    ingredients: {
      ingredients: [],
      /* selectIngredient: [], */
      openModalOrder: {
        isOpen: false,
        numberOrder: 0,
        isClickButtonOrder: false,
      },
      /* openModalIngredient: null, */
      error: null,
      loading: false
    },
    ingredientList: {
      ingredients: [],
      selectIngredient: [],
      sortIngredient: [],
    },
    scrollIngredients: {
      active: {
        bun: true,
        sauces: false,
        main: false
      }
    },
    auth: {
      user: null,
      tokenUpdate: false,
      tokenUpdateSuccess: false,
      registerSending: false,
      registerError: null,
      loginSending: false,
      loginError: null,
      isAuthChecked: false,
    },
    orders: {
      status: WebSocketStatus.OFFLINE,
      burgers: {},
      connectingError: ''
    },
    userOrders: {
      status: WebSocketStatus.OFFLINE,
      userOrders: [],
      connectingError: ''
    },
  }
)



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
