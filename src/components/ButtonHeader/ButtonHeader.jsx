import styles from './ButtonHeader.module.css'
import { buttonHeaderPropType } from '../../utils/prop-types'
import { NavLink, Navigate, useNavigate, Link } from 'react-router-dom'

const ButtonHeader = ({ style, name, icon }) => {
    const navigate = useNavigate()
   const handleClickLink = () => {
    console.log('1');
    if (name === 'Личный кабинет') {
        navigate('/profile')        
    }
   }

    return (
        <Link   className={styles.ButtonHeader} style={{ ...style }} onClick = {handleClickLink}>
            {icon}
            <span className="text text_type_main-default">{name}</span>
        </Link>
    )
}

ButtonHeader.propTypes = buttonHeaderPropType;

export default ButtonHeader