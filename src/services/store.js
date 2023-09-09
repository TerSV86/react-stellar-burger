import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { reducer } from './ingredients/reducer'
/* import { customMiddleware } from "./middleware/custom-middleware" */
import thunkMiddleware from "redux-thunk"

export const configureStore = (initialState) => {
    const store = createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware)) //функция обеспечивающая поддержку reduxDevTools
    )
    return store;
}