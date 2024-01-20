import { RootState } from "../reducer";
import { Action } from "../../utils/typeStore"; 

interface MiddlewareAPI <S, A> {
    getState(): S;
    dispatch(action:A): void;
}

interface _Middleware<S,A> {
    (api: MiddlewareAPI<S, A>): (
        next: (action: A) => void
     ) => (action: A) => void
}

/* export type Middleware = _Middleware<RootState, Action> */