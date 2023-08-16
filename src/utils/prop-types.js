import PropTypes from "prop-types";
import TypeProduct from "../components/TypeProduct/TypeProduct";

export const ingredientPropType = PropTypes.shape({
  //укажите здесь prop-types для ингридиента
});

/* export const appPropType = PropTypes.shape({
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      proteins: PropTypes.number.isRequired,
    })
  ).isRequired,
}) */

export const buttonHeaderPropType = PropTypes.shape({
  style: PropTypes.shape({
    maxWidth: PropTypes.string.isRequired,
    gridColumn: PropTypes.string.isRequired,
    gridRow: PropTypes.string.isRequired,
    justifySelf: PropTypes.string.isRequired
  }),
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
})

export const contentPropType = PropTypes.shape({
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number,
      carbohydrates:PropTypes.number, 
      fat:PropTypes.number,
      image:PropTypes.string.isRequired,
      image_large:PropTypes.string,
      image_mobile:PropTypes.string,
      name:PropTypes.string.isRequired,
      price:PropTypes.number,
      proteins:PropTypes.number,
      type:PropTypes.string.isRequired,
      __v:PropTypes.number,
      _id:PropTypes.string.isRequired
    })
  ),
  onClick: PropTypes.func.isRequired 
})

export const burgerIngredientsPropType = PropTypes.shape({
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number,
      carbohydrates:PropTypes.number, 
      fat:PropTypes.number,
      image:PropTypes.string.isRequired,
      image_large:PropTypes.string,
      image_mobile:PropTypes.string,
      name:PropTypes.string.isRequired,
      price:PropTypes.number,
      proteins:PropTypes.number,
      type:PropTypes.string.isRequired,
      __v:PropTypes.number,
      _id:PropTypes.string.isRequired
    })
  ),
  onClick: PropTypes.func.isRequired 
})

export const productPropType = PropTypes.shape({
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number,
      carbohydrates:PropTypes.number, 
      fat:PropTypes.number,
      image:PropTypes.string.isRequired,
      image_large:PropTypes.string,
      image_mobile:PropTypes.string,
      name:PropTypes.string.isRequired,
      price:PropTypes.number,
      proteins:PropTypes.number,
      type:PropTypes.string.isRequired,
      __v:PropTypes.number,
      _id:PropTypes.string.isRequired
    })
  ),
  onClick: PropTypes.func.isRequired 
})

export const titleTypeProductPropType = PropTypes.string;

export const productsContainerPropType = PropTypes.shape({
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number,
      carbohydrates:PropTypes.number, 
      fat:PropTypes.number,
      image:PropTypes.string.isRequired,
      image_large:PropTypes.string,
      image_mobile:PropTypes.string,
      name:PropTypes.string.isRequired,
      price:PropTypes.number,
      proteins:PropTypes.number,
      type:PropTypes.string.isRequired,
      __v:PropTypes.number,
      _id:PropTypes.string.isRequired
    })
  ),
  onClick: PropTypes.func.isRequired 
})

export const cardProductPropType = PropTypes.shape({
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
})

export const productImagePropType = PropTypes.shape ({
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
})

export const productPricePropType = PropTypes.shape({
  price: PropTypes.number.isRequired,
})

export const productNamePropType = PropTypes.shape({
  name: PropTypes.string.isRequired
})

export const burgerConstructorPropType = PropTypes.shape({
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number,
      carbohydrates:PropTypes.number, 
      fat:PropTypes.number,
      image:PropTypes.string.isRequired,
      image_large:PropTypes.string,
      image_mobile:PropTypes.string,
      name:PropTypes.string.isRequired,
      price:PropTypes.number,
      proteins:PropTypes.number,
      type:PropTypes.string.isRequired,
      __v:PropTypes.number,
      _id:PropTypes.string.isRequired
    })
  ),
  onClick: PropTypes.func.isRequired 
})

export const ingredientsContainerPropType = PropTypes.shape({
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number,
      carbohydrates:PropTypes.number, 
      fat:PropTypes.number,
      image:PropTypes.string.isRequired,
      image_large:PropTypes.string,
      image_mobile:PropTypes.string,
      name:PropTypes.string.isRequired,
      price:PropTypes.number,
      proteins:PropTypes.number,
      type:PropTypes.string.isRequired,
      __v:PropTypes.number,
      _id:PropTypes.string.isRequired
    })
  )
})
