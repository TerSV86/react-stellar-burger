import { productNamePropType } from "../../utils/prop-types"

const ProductName = ({name}) => {
    return (
        <h3 className="text text_type_main-default pb-6">{name}</h3>
    )
}

ProductName.propType = productNamePropType;

export default ProductName