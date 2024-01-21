import styles from './NavbarProduts.module.css'
import ButtonProduct from '../ButtonProduct/ButtonProduct'
import { useSelector } from '../../hooks/hooks'

const NavbarProduts = () => {
    const active = useSelector(store => store.scrollIngredients.active);
   
    return (
        <nav className={`${styles.NavbarProduts} pb-10`}>
            <ButtonProduct name={'Булки'}  active={active.bun}/>
            <ButtonProduct name={'Соусы'} active={active.sauces}/>
            <ButtonProduct name={'Начинки'} active={active.main}/>            
        </nav>
    )
}

export default NavbarProduts
