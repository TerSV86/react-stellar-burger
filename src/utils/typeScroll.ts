import { SCROLL_INGREDIENTS_BUN, SCROLL_INGREDIENTS_MAIN, SCROLL_INGREDIENTS_SAUCES } from "../services/scroll/action/scrollIngredients";

export interface IActive {
    bun: boolean;
    sauces: boolean;
    main: boolean;
}

export type TScrollState = {
    active: IActive;
}

export interface IScrollIngredientsBun {
    readonly type: typeof SCROLL_INGREDIENTS_BUN;
}

export interface IScrollIngredientsSauces {
    readonly type: typeof SCROLL_INGREDIENTS_SAUCES;
}

export interface IScrollIngredientsMain {
    readonly type: typeof SCROLL_INGREDIENTS_MAIN;
}


export type TScrollActions = 
|IScrollIngredientsBun
|IScrollIngredientsSauces
|IScrollIngredientsMain