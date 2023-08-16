import { productImagePropType } from "../../utils/prop-types"

const ProductImage = ({link, name}) => {
    return (
        <img src={link} alt = {name} />
    )
}

ProductImage.propType = productImagePropType;

export default ProductImage