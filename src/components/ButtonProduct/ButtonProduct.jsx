import { buttonProductPropType } from '../../utils/prop-types'
import styles from './ButtonProduct.module.css'


const ButtonProduct = ({name, active}) => {
    const scrollClassName = active ? `${styles.ButtonProduct} ${styles.active} text text_type_main-default` : `${styles.ButtonProduct} text text_type_main-default`
    return (
        <a href='#' className={scrollClassName}>{name}</a>
    )
}

ButtonProduct.propTypes = buttonProductPropType;

export default ButtonProduct