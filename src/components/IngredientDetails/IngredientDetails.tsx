import styles from './IngredientDetails.module.css'
import ProductImage from '../ProductImage/ProductImage'
import FoodValue from '../FoodValue/FoodValue'
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { useEffect } from 'react';
import { loadIngredients } from '../../services/ingredients/action';


const IngredientDetails = () => {
    const dispatch = useDispatch()
    const ingredients = useSelector(store => store.ingredients.ingredients)
    const location = useLocation()
    const idIngredient = useParams();

    
    useEffect(() => {
        // Загружаем ингредиенты только если их еще нет
        if (!ingredients) {
          dispatch(loadIngredients());
        }
      }, [dispatch, ingredients]);
    if (!ingredients) {
        return <div>Loading...</div>; 
    }
    const ingredient = ingredients.find((ingr) => ingr._id === idIngredient.ingredientId)
    if(ingredient) {
        return (
        <div className={`${styles.IngredientDetails}`}>
            <ProductImage link={ingredient.image_large} name={ingredient.name} />
            <p className="text text_type_main-medium pt-4 pb-8">{ingredient.name}</p>
            <FoodValue carbs={ingredient.carbohydrates} cal={ingredient.calories
            } fat={ingredient.fat} proteins={ingredient.proteins} />
        </div>
    )
    }
    
}

export default IngredientDetails