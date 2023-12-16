import PropTypes from "prop-types";
import { ingredientPropType } from "./types";


export const buttonHeaderPropType = {
  style: PropTypes.shape({
    maxWidth: PropTypes.number.isRequired,
    gridColumn: PropTypes.string,
    gridRow: PropTypes.string,
    justifySelf: PropTypes.string.isRequired
  }),
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
}



export const buttonProductPropType = {
  name: PropTypes.string.isRequired
}

export const productsContainerPropType = {
  product: PropTypes.arrayOf(ingredientPropType),
}

export const cardProductPropType = {
  product: ingredientPropType.isRequired,
}

export const productImagePropType = {
  link: PropTypes.string,
  name: PropTypes.string,
}

export const productPricePropType = {
  price: PropTypes.number.isRequired,
}

export const productNamePropType = {
  name: PropTypes.string.isRequired
}

/* export const ingredientsContainerPropType = {
  productData: PropTypes.arrayOf(ingredientPropType)
} */

export const orderBlockPropType = {
  sum: PropTypes.number.isRequired
}

export const modalPropType = {
  children: PropTypes.element,
  title: PropTypes.string
}



export const modalHeaderPropType = {
  children: PropTypes.string,
}
// prop удален
/* export const ingredientDetailsPropType = {
  ingredient: ingredientPropType
} */

export const foodValuePropType = {
  carbs: PropTypes.number,
  cal: PropTypes.number,
  fat: PropTypes.number,
  proteins: PropTypes.number
}

export const blockEnergyValuePropType = {
  name: PropTypes.string,
  value: PropTypes.number
}

export const orderIngredientPricePropType = {
  price: PropTypes.number,
  count: PropTypes.number
}

export const orderIngredientPropType = {
  product: PropTypes.arrayOf(ingredientPropType),
  count: PropTypes.number
}

export const orderIngredientListPropType = {
  burgerIngr: PropTypes.array
}