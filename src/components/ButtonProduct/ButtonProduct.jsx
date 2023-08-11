import styles from './ButtonProduct.module.css'

const ButtonProduct = ({name}) => {
    return (
        <a href='#' className={`${styles.ButtonProduct} text text_type_main-default`}>{name}</a>
    )
}

export default ButtonProduct