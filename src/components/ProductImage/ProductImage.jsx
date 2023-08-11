import styles from './ProductImage.module.css'

const ProductImage = ({link, name}) => {
    return (
        <img src={link} alt = {name} />
    )
}

export default ProductImage