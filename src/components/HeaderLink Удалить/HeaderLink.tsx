import { NavLink, NavLinkProps } from 'react-router-dom'
import styles from './HeaderLink.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

interface INavLinkProps {
    isActive: boolean;
}
type TSetType = 'primary' | 'secondary'
/* const HeaderLink: React.FC<NavLinkProps> = ({to, className, style}, type, name) => {
    
    return (
        <NavLink to={to} className={className} style={style}>
            <BurgerConstructor type={type}/>
            <span className='text text_type_main-default'>{name}</span>
        </NavLink>
    )
}

export default HeaderLink */