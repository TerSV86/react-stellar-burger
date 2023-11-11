
import styles from './AppHeader.module.css'
import ButtonHeader from '../ButtonHeader/ButtonHeader';
import { ProfileIcon, BurgerIcon, ListIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink } from 'react-router-dom';


const AppHeader = () => {

    return (
        <header className={`${styles.AppHeader} mb-4 mt-4`}>
            <NavLink to='/' className={({ isActive }) => isActive ? (`${styles.LinkConstructor} ${styles.Link} ${styles.active}`) : `${styles.LinkConstructor} ${styles.Link}`} >
                {<BurgerIcon type='secondary' />}
                <span className='text text_type_main-default'>Конструктор</span>
            </NavLink>

            <NavLink className={`${styles.Link} ${styles.LinkListOrder}`}>
                {<ListIcon type='secondary' />}
                <span className='text text_type_main-default'>Лента заказов</span>
            </NavLink>

            <Logo />

            <NavLink to={{ pathname: '/profile' }} className={({ isActive }) => isActive ? `${styles.Link} ${styles.LinkProfile} ${styles.active}` : `${styles.Link} ${styles.LinkProfile}`} >
                {<ProfileIcon type='secondary' />}
                <span className="text text_type_main-default">Личный кабинет</span>
            </NavLink>


        </header>
    )
}

export default AppHeader;