import styles from './ConstructorPage.module.css'
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor'

const ConstructorPage = () => {
    
    return (
        <main className={`${styles.ConstructorPage}`}>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
    )
}

export default ConstructorPage