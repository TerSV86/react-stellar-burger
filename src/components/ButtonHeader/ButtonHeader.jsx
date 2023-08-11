
import styles from './ButtonHeader.module.css'

const ButtonHeader = ({ style, name, icon }) => {

    return (
        <a href='#' className={styles.ButtonHeader} style={{ ...style}} >
            {icon}
            <span className="text text_type_main-default">{name}</span>
        </a>
    )
}

export default ButtonHeader