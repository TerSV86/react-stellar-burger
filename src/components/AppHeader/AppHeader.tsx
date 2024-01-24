
import styles from './AppHeader.module.css'
import { ProfileIcon, BurgerIcon, ListIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { FC } from 'react';
import { NavLink, useLocation, NavLinkProps } from 'react-router-dom';
import { ILocation, INavLinkProps, TSetType } from '../../utils/type';


const AppHeader: FC = ():JSX.Element => {
    const location = useLocation<ILocation>()
    console.log(location);

    const setActive = ({ isActive }: INavLinkProps): React.CSSProperties => ({ color: isActive ? '#F2F2F3' : '' })
    const setType = (to: string): TSetType => ((to === location.pathname) ? 'primary' : 'secondary');
    console.log('setType', setType('/'));

    return (
        <header className={`${styles.AppHeader} mb-4 mt-4`}>
            <NavLink to='/' className={`${styles.LinkConstructor} ${styles.Link}`} style={setActive} >
                <BurgerIcon type={setType('/')} />
                <span className='text text_type_main-default'>Конструктор</span>
            </NavLink>

            <NavLink to='/feed' className={`${styles.Link} ${styles.LinkListOrder}`} style={setActive}>
                {<ListIcon /* type='secondary' */ type={setType('/feed')} />}
                <span className='text text_type_main-default'>Лента заказов</span>
            </NavLink>
            <Logo />
            <NavLink to={'/profile'} className={`${styles.Link} ${styles.LinkProfile}`} style={setActive} >
                {<ProfileIcon type={setType('/profile')} />}
                <span className="text text_type_main-default">Личный кабинет</span>
            </NavLink>
        </header>
    )
}

export default AppHeader;