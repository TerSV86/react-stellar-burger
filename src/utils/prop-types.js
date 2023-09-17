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

export const contentPropType = {
  productData: PropTypes.arrayOf(ingredientPropType),
  onClick: PropTypes.func.isRequired
}


export const burgerIngredientsPropType = {
  productData: PropTypes.arrayOf(ingredientPropType),
  onClick: PropTypes.func.isRequired
}

export const buttonProductPropType = {
  name: PropTypes.string.isRequired
}

export const productPropType = {
  productData: PropTypes.arrayOf(ingredientPropType),
  onClick: PropTypes.func.isRequired
}

export const titleTypeProductPropType = { title: PropTypes.string };

export const productsContainerPropType = {
  productData: PropTypes.arrayOf(ingredientPropType),
  onClick: PropTypes.func.isRequired
}

export const cardProductPropType = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
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

export const burgerConstructorPropType = {
  productData: PropTypes.arrayOf(ingredientPropType),
  onClick: PropTypes.func.isRequired
}

export const ingredientsContainerPropType = {
  productData: PropTypes.arrayOf(ingredientPropType)
}

export const orderBlockPropType = {
  onClick: PropTypes.func.isRequired
}

export const modalPropType = {
  open: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element,
  title: PropTypes.string
}

export const modalOverlayPropType = { onClick: PropTypes.func.isRequired }

export const modalHeaderPropType = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export const ingredientDetailsPropType = {
  ingredient: ingredientPropType
}

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
