
import styles from './AppHeader.module.css'
import ButtonHeader from '../ButtonHeader/ButtonHeader';
import { ProfileIcon, BurgerIcon, ListIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink } from 'react-router-dom';

const AppHeader = () => {

    return (
        <header className={`${styles.AppHeader} mb-4 mt-4`}>
            <ButtonHeader
                style={{
                    maxWidth: 180,
                    gridColumn: '1',
                    gridRow: "1",
                    justifySelf: "start"
                }}
                name={"Конструктор"}
                icon={<BurgerIcon type={'secondary'} />} />

            <ButtonHeader
                style={{
                    maxWidth: 200,
                    gridColumn: '1',
                    gridRow: "1",
                    justifySelf: "end"
                }}
                name={"Лента заказов"}
                icon={<ListIcon type='secondary' />} />

            <Logo />

            <NavLink to='profile' className={styles.Link} style={{
                maxWidth: 208,
                justifySelf: "end"
            }} >
                {<ProfileIcon type='secondary' />}
                <span className="text text_type_main-default">Личный кабинет</span>
            </NavLink>

            {/* <NavLink className={`${styles.Link}`} to = '/profile' 
            style={{ 
                maxWidth: 208, 
                justifySelf: "end" }} 
            
            icon={<ProfileIcon type='secondary'/>} >  Личный кабинет </NavLink> */}
        </header>
    )
}

export default AppHeader;