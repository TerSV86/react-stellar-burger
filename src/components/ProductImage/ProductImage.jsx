import { productImagePropType } from "../../utils/prop-types"
import React from 'react'

const ProductImage = ({link, name}) => {
    return (
        <img src={link} alt = {name} />
    )
}

ProductImage.propTypes = productImagePropType;

export default React.memo(ProductImage)