import styles from './ButtonHeader.module.css'
import { buttonHeaderPropType } from '../../utils/prop-types'

const ButtonHeader = ({ style, name, icon }) => {

    return (
        <a href='#' className={styles.ButtonHeader} style={{ ...style}} >
            {icon}
            <span className="text text_type_main-default">{name}</span>
        </a>
    )
}

ButtonHeader.propTypes = buttonHeaderPropType;

export default ButtonHeader