import styles from './ConstructorPage.module.css'
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ConstructorPage = () => {
    const ingredients = useSelector((store) => store.ingredients.ingredients)
    const location = useLocation()
    const { id } = useParams()
    console.log(location.pathname, id);
    console.log(`/ingredient/${id}`);
    console.log('massiv ', ingredients);
    if (!ingredients) {
        return <h2>Loading ...</h2>
    }
    if (location.pathname === `/ingredient/${id}`) {
        return (
            <main className={`${styles.ConstructorPage}`}>
                <Outlet context={ingredients[id]} />
            </main>
        )
    } else {
        return (
            <main className={`${styles.ConstructorPage}`}>
                <BurgerIngredients />
                <BurgerConstructor />

            </main>
        )
    }
}

export default ConstructorPage