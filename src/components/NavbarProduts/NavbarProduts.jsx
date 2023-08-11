import styles from './NavbarProduts.module.css'
import ButtonProduct from '../ButtonProduct/ButtonProduct'

const NavbarProduts = () => {
    return (
        <nav className={`${styles.NavbarProduts} pb-10`}>
            <ButtonProduct name={'Булки'} />
            <ButtonProduct name={'Соусы'} />
            <ButtonProduct name={'Начинки'} />            
        </nav>
    )
}

export default NavbarProduts
