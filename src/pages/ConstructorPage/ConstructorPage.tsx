import styles from './ConstructorPage.module.css'
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { useSelector } from '../../hooks/hooks'

/* type TParams = {
    id: number
} */

const ConstructorPage = () => {
     /*const ingredients = useSelector((store) => store.ingredients.ingredients)
    const location = useLocation()
    const { id } = useParams<TParams>()
    console.log('Id', id);

    if (id && location.pathname === `/ingredient/${id}`) {
        const element = ingredients[id]
        return (
            <main className={`${styles.ingredientInfoPage}`}>
                {(id) ? <Outlet context={element} /> : null}
            </main>
        )
    } else {
        return (
            <main className={`${styles.ConstructorPage}`}>
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        )
    } */
    return (
        <main className={`${styles.ConstructorPage}`}>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
    )
}

export default ConstructorPage