import { productImagePropType } from "../../utils/prop-types"
import React from 'react'

type Prop = {
    link: string;
    name: string
}

const ProductImage = ({link, name}: Prop) => {
    return (
        <img src={link} alt = {name} />
    )
}

ProductImage.propTypes = productImagePropType;

export default React.memo(ProductImage)