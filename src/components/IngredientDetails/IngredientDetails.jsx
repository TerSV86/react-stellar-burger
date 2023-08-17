import styles from './IngredientDetails.module.css'
import ProductImage from '../ProductImage/ProductImage'
import FoodValue from '../FoodValue/FoodValue'
import { ingredientDetailsPropType } from '../../utils/prop-types';

const IngredientDetails = ({ ingredient }) => {
    
    return (
        <div className={`${styles.IngredientDetails}`}>
            <ProductImage link={ingredient.image_large} name={ingredient.name} />
            <p className="text text_type_main-medium pt-4 pb-8">{ingredient.name}</p>
            <FoodValue carbs={ingredient.carbohydrates} cal={ingredient.calories
            } fat={ingredient.fat} proteins={ingredient.proteins} />
        </div>
    )
}

IngredientDetails.propTypes = ingredientDetailsPropType;

export default IngredientDetails