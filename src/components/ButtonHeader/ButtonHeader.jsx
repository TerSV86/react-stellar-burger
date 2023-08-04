import styles from './ButtonHeader.module.css'

const ButtonHeader = ({ style, name, icon }) => {
    return (
        <button type='button' className={styles.ButtonHeader} style={style}>
            {icon}
            <span className="text text_type_main-default">{name}</span>
        </button>
    )
}

export default ButtonHeader