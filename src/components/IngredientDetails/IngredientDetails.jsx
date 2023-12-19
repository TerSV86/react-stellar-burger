import styles from './IngredientDetails.module.css'
import ProductImage from '../ProductImage/ProductImage'
import FoodValue from '../FoodValue/FoodValue'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const IngredientDetails = () => {    
    const ingredients = useSelector(store => store.ingredients.ingredients)    
    const idIngredient = useParams()
    const ingredient = ingredients.find((ingr) => ingr._id === idIngredient.ingredientId)

    return (
        <div className={`${styles.IngredientDetails}`}>
            <ProductImage link={ingredient.image_large} name={ingredient.name} />
            <p className="text text_type_main-medium pt-4 pb-8">{ingredient.name}</p>
            <FoodValue carbs={ingredient.carbohydrates} cal={ingredient.calories
            } fat={ingredient.fat} proteins={ingredient.proteins} />
        </div>
    )
}

export default IngredientDetails