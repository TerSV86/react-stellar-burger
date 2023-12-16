
import styles from './AppHeader.module.css'
import ButtonHeader from '../ButtonHeader/ButtonHeader';
import { ProfileIcon, BurgerIcon, ListIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink } from 'react-router-dom';


const AppHeader = () => {
let styleActive; 
console.log(styleActive);
    return (
        <header className={`${styles.AppHeader} mb-4 mt-4`}>
            <NavLink to='/' className={`${styles.LinkConstructor} ${styles.Link}`}   style={({isActive}) => ({color: isActive ? '#F2F2F3' : null})} >
                {<BurgerIcon type= 'secondary' />}
                <span className='text text_type_main-default'>Конструктор</span>
            </NavLink>

            <NavLink to='/feed' className={`${styles.Link} ${styles.LinkListOrder}`}style={({isActive}) =>  ({color: isActive ? '#F2F2F3' : null})}>
                {<ListIcon type='secondary' />}
                <span className='text text_type_main-default'>Лента заказов</span>
            </NavLink>

            <Logo />

            <NavLink to={ '/profile' } className={`${styles.Link} ${styles.LinkProfile}`} style={({isActive}) =>  ({color: isActive ? '#F2F2F3' : null})} >
                {<ProfileIcon type='secondary' />}
                <span className="text text_type_main-default">Личный кабинет</span>
            </NavLink>


        </header>
    )
}

export default AppHeader;