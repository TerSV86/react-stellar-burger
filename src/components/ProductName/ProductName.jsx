import { productNamePropType } from "../../utils/prop-types"
import React from 'react'

const ProductName = ({name}) => {
    return (
        <h3 className="text text_type_main-default">{name}</h3>
    )
}

ProductName.propTypes = productNamePropType;

export default React.memo(ProductName)