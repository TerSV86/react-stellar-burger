import styles from './IngredientPage.module.css';
import ProductImage from '../../components/ProductImage/ProductImage';
import FoodValue from '../../components/FoodValue/FoodValue';
import { useEffect } from 'react';
import { Outlet, useLocation, useOutletContext, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadIngredients } from '../../services/ingredients/action';

import Modal from "../../components/Modal/Modal";
import IngredientDetails from '../../components/IngredientDetails/IngredientDetails'

const IngredientPage = () => {
    console.log('ingrPage');

    //const { isOpen, isClickButtonOrder } = useSelector(store => store.ingredients.openModalOrder)
    //const ingredientDetails = useSelector(store => store.ingredients.openModalIngredient)
    const location = useLocation()
    const { id } = useParams()

    const ingredient = useOutletContext()
    console.log(ingredient);
    console.log(location.pathname === `/ingredient/${id}`);

    if (!ingredient) {
        return <h2>Loading ...</h2>
    }
    
    return (
        <div className={`${styles.IngredientPage}`}>
            {/* (!isOpen) && */ (location.pathname === `/ingredient/${id}`) && (<>
                <h2>Я сработал</h2>
                <ProductImage link={ingredient.image_large} name={ingredient.name} />
                <p className="text text_type_main-medium pt-4 pb-8">{ingredient.name}</p>
                <FoodValue carbs={ingredient.carbohydrates} cal={ingredient.calories
                } fat={ingredient.fat} proteins={ingredient.proteins} />
            </>)}

            {/* {isOpen && (<Modal title={'Детали ингредиента'}>
                {
                    <IngredientDetails ingredient={ingredientDetails} />
                }
            </Modal>)} */}
        </div>
    )

}

/* export default IngredientPage */