
import styles from './AppHeader.module.css'
import ButtonHeader from '../ButtonHeader/ButtonHeader';
import { ProfileIcon, BurgerIcon, ListIcon, Logo} from '@ya.praktikum/react-developer-burger-ui-components'


const AppHeader = () => {
    
    return (
        <header className={`${styles.AppHeader} mb-4 mt-4`}>
            <ButtonHeader 
            style={{ 
                maxWidth: 180, 
                gridColumn: '1', 
                gridRow: "1", 
                justifySelf: "start"}} 
            name={"Конструктор"} 
            icon={<BurgerIcon type={'secondary'}/>}/>

            <ButtonHeader 
            style={{ 
                maxWidth: 200, 
                gridColumn: '1', 
                gridRow: "1", 
                justifySelf: "end" }}
            name={"Лента заказов"} 
            icon={<ListIcon type='secondary'/>}/>

            <Logo />

            <ButtonHeader 
            style={{ 
                maxWidth: 208, 
                justifySelf: "end" }} 
            name={"Личный кабинет"} 
            icon={<ProfileIcon type='secondary'/>} />
        </header>
    )
}

export default AppHeader;