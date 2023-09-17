import styles from './Content.module.css'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'


const Content = () => {

    return (
        <main className={styles.Content}>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
    )
}



export default Content