import { buttonProductPropType } from '../../utils/prop-types'
import styles from './ButtonProduct.module.css'

const ButtonProduct = ({name}) => {
    return (
        <a href='#' className={`${styles.ButtonProduct} text text_type_main-default`}>{name}</a>
    )
}

ButtonProduct.propTypes = buttonProductPropType;

export default ButtonProduct