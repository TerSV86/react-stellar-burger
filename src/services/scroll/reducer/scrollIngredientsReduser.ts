import { TScrollActions, TScrollState } from "../../../utils/typeScroll";
import { SCROLL_INGREDIENTS_BUN, SCROLL_INGREDIENTS_SAUCES, SCROLL_INGREDIENTS_MAIN } from "../action/scrollIngredients";

const initialState: TScrollState = {
    active: {
        bun: true,
        sauces: false,
        main: false
    }
}

export const scrollIngredientsReducer = (state = initialState, action: TScrollActions) => {
    switch (action.type) {
        case SCROLL_INGREDIENTS_BUN: {
            return {
                ...state,
                active: {
                    ...state.active,
                    bun: true,
                    sauces: false,
                    main: false
                }
            }
        }
        case SCROLL_INGREDIENTS_SAUCES: {
            return {
                ...state,
                active: {
                    ...state.active,
                    bun: false,
                    sauces: true,
                    main: false
                }
            }
        }
        case SCROLL_INGREDIENTS_MAIN: {
            return {
                ...state,
                active: {
                    ...state.active,
                    bun: false,
                    sauces: false,
                    main: true
                }
            }
        }
        default:
            return state;
    }
}