import styles from './IngredientDetails.module.css'
import ProductImage from '../ProductImage/ProductImage'
import FoodValue from '../FoodValue/FoodValue'
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { FC, useEffect } from 'react';
import { loadIngredients } from '../../services/ingredients/action';


const IngredientDetails: FC = (): JSX.Element => {
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

    return (
        <div className={`${styles.IngredientDetails}`}>
            {(ingredient) ? (<>
                <ProductImage link={ingredient.image_large} name={ingredient.name} />
                <p className="text text_type_main-medium pt-4 pb-8">{ingredient.name}</p>
                <FoodValue carbs={ingredient.carbohydrates} cal={ingredient.calories
                } fat={ingredient.fat} proteins={ingredient.proteins} />
            </>) : null}
        </div>
    )


}

export default IngredientDetails