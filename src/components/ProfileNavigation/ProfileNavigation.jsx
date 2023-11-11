import { NavLink } from 'react-router-dom'
import styles from './ProfileNavigation.module.css'
import { logout } from '../../services/auth/actions/actions';
import { useDispatch } from 'react-redux';

const ProfileNavigation = () => {
    const dispatch = useDispatch();
    const setActive = ({ isActive }) => isActive ? `text text_type_main-medium pt-1 pb-1 ${styles.active}` : `text text_type_main-medium pt-1 pb-1 ${styles.link}`;

    const handleClickExit = () => {
        dispatch(logout())
    }

    return (
        <div className={`${styles.ProfileNavigation} mr-20`}>
            <NavLink to="/profile" className={setActive} exact>Профиль</NavLink>
            <NavLink to="/profile/order" className={setActive} exact>История заказов</NavLink>
            <NavLink to="/login" onClick={handleClickExit} className={setActive}>Выход</NavLink>
            <h2 className={`text text_type_main-default pt-20`}>В этом разделе вы можете
                изменить свои персональные данные</h2>
        </div>

    )
}

export default ProfileNavigation