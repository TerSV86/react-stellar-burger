import styles from './ProductsContainer.module.css'
import CardProduct from '../CardProduct/CardProduct'
import { productsContainerPropType } from '../../utils/prop-types';
import { useDispatch } from 'react-redux';
import { addBunIngredient, addIngredientOther } from '../../services/ingredients/action';


const ProductsContainer = ({ product }) => {
    const dispatch = useDispatch();
    function addIngredient(e, element) { //переименовать на handleClickIngredient
        if (element.type === 'bun') {
            dispatch(addBunIngredient(element))
        } else {
            dispatch(addIngredientOther(element))
        }
    }
    return (
        <div className={`${styles.ProductsContainer} pb-10 pl-4`} >
            {product.map((el) => <CardProduct key={el._id} link={el.image} name={el.name} price={el.price} onClick={(e) => addIngredient(e, el)} />)}
        </div>
    )
}

ProductsContainer.propTypes = productsContainerPropType;

export default ProductsContainer