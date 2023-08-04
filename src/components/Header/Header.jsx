import Navbar from '../Navbar/Navbar';
import styles from './Header.module.css'
import ButtonHeader from '../ButtonHeader/ButtonHeader';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'

const Header = () => {
    return (
        <div className={styles.Header}>
            <Navbar />            
            <Logo />
            <ButtonHeader style={{ maxWidth: 208, justifySelf: "end" }} name={"Личный кабинет"} icon={<ProfileIcon type='primary' />} />
        </div>
    )
}

export default Header;