import NavbarProduts from '../NavbarProduts/NavbarProduts'
import Products from '../Products/Products'
import styles from './BurgerIngredients.module.css'
import { burgerIngredientsPropType } from '../../utils/prop-types'

const BurgerIngredients = ({productData, onClick}) => {
    
    return (
        <section className={`${styles.BurgerIngredients} pt-10`}>
            <h1 className='text text_type_main-large pb-5'>Соберите бургер</h1>
            <NavbarProduts />
            <Products productData ={productData} onClick={onClick}/>
        </section>
    )
}

BurgerIngredients.propTypes = burgerIngredientsPropType;

export default BurgerIngredients