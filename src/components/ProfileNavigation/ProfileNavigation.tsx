import { NavLink } from 'react-router-dom'
import styles from './ProfileNavigation.module.css'
import { logout } from '../../services/auth/actions/actions';
import { useDispatch } from 'react-redux';

interface INavLinkProps {
    isActive: boolean;
}

const ProfileNavigation: React.FC = () => {
    const dispatch = useDispatch();
    const handleClickExit = () => {
        dispatch(logout())
    }
    const setActive = ({ isActive }:INavLinkProps):React.CSSProperties => ({ color: isActive ? '#F2F2F3' : '#8585AD' })
    return (
        <div className={`${styles.ProfileNavigation} mr-20`}>
            <NavLink to='/profile'
                className={`${styles.link} text text_type_main-medium pt-1 pb-1`}
                style={setActive}
                end>Профиль</NavLink>
            <NavLink to="/profile/order"
                className={`${styles.link} text text_type_main-medium pt-1 pb-1`}
                style={setActive}>История заказов</NavLink>
            <NavLink to="/login" onClick={handleClickExit} className={` ${styles.link} text text_type_main-medium pt-1 pb-1`} style={setActive} >Выход</NavLink>
            <h2 className={`text text_type_main-default pt-20`}>В этом разделе вы можете
                изменить свои персональные данные</h2>
        </div>

    )
}

export default ProfileNavigation