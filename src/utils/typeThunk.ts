import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { TApplicationActions } from "./type";
import { RootState } from "../services/store";
import { store } from "..";


export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;
export type AppDispatch = typeof store.dispatch;

