import styles from './Content.module.css'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import { contentPropType } from '../../utils/prop-types'

const Content = () => {

    return (
        <main className={styles.Content}>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
    )
}

Content.propTypes = contentPropType;

export default Content