import styles from './Content.module.css'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'

const Content = () => {
    return (
        <div className={styles.Content}>
            <BurgerIngredients  />
            {/* <BurgerConstructor /> */}
            
        </div>
    )
}

export default Content