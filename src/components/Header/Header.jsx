import { useState } from 'react';
import styles from './Header.module.css'
import ButtonHeader from '../ButtonHeader/ButtonHeader';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'

const Header = () => {
    const [linkActive, setLinkActive] = useState(null);

    const handleClickLink = (link) => {
        console.log('click');
        setLinkActive(link);
        console.log(linkActive);
    }

    return (
        <div className={`${styles.Header} mb-4 mt-4`}>
            <ButtonHeader style={{ maxWidth: 180, gridColumn: '1', gridRow: "1", justifySelf: "start"}} name={"Конструктор"} icon={<BurgerIcon type={linkActive === 'constructorLink' ? 'primary' : 'secondary'} />}  />
            <ButtonHeader style={{ maxWidth: 200, gridColumn: '1', gridRow: "1", justifySelf: "end" }} name={"Лента заказов"} icon={<ListIcon type='secondary' />} />
            <Logo />
            <ButtonHeader style={{ maxWidth: 208, justifySelf: "end" }} name={"Личный кабинет"} icon={<ProfileIcon type='secondary' />} />
        </div>
    )
}

export default Header;