
import styles from './AppHeader.module.css'
import { ProfileIcon, BurgerIcon, ListIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';


interface INavLinkProps {
    isActive: boolean;
}

const AppHeader: React.FC = () => {
    const setActive = ({ isActive }:INavLinkProps):React.CSSProperties => ({ color: isActive ? '#F2F2F3' : '' })
    return (
        <header className={`${styles.AppHeader} mb-4 mt-4`}>
            <NavLink to='/' className={`${styles.LinkConstructor} ${styles.Link}`} style={setActive} >
                {<BurgerIcon type='secondary' />}
                <span className='text text_type_main-default'>Конструктор</span>
            </NavLink>
            <NavLink to='/feed' className={`${styles.Link} ${styles.LinkListOrder}`} style={setActive}>
                {<ListIcon type='secondary' />}
                <span className='text text_type_main-default'>Лента заказов</span>
            </NavLink>
            <Logo />
            <NavLink to={'/profile'} className={`${styles.Link} ${styles.LinkProfile}`} style={setActive} >
                {<ProfileIcon type='secondary' />}
                <span className="text text_type_main-default">Личный кабинет</span>
            </NavLink>
        </header>
    )
}

export default AppHeader;