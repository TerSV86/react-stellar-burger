import styles from './Content.module.css'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import { contentPropType } from '../../utils/prop-types'

const Content = ({ productData, onClick }) => {
        
    return (
        <main className={styles.Content}>
            <BurgerIngredients productData={productData} onClick={onClick} />
            <BurgerConstructor productData={productData} onClick={onClick} />
        </main>
    )
}

Content.propTypes = contentPropType;

export default Content