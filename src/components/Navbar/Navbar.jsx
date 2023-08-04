import styles from './navbar.module.css'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ButtonHeader from '../ButtonHeader/ButtonHeader'




const Navbar = () => {
    return (
        <nav className={styles.navbar}>            
            <ButtonHeader style={{maxWidth: 180}} name={"Конструктор"} icon={<BurgerIcon type='primary' />}/>
            <ButtonHeader style={{maxWidth: 300}} name={"Лента заказов"} icon={<ListIcon type='primary' />}/>            
        </nav>




    )
}

export default Navbar 