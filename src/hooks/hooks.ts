import { TypedUseSelectorHook, useSelector as selectorHook, useDispatch as dispatchHook } from "react-redux";
import { RootState } from "../services/reducer";
import { AppDispatch, AppThunk } from "../utils/typeThunk";


export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export const useDispatch = () => dispatchHook<AppDispatch|AppThunk>();