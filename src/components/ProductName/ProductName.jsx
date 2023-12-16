import { productNamePropType } from "../../utils/prop-types"

const ProductName = ({name}) => {
    return (
        <h3 className="text text_type_main-default">{name}</h3>
    )
}

ProductName.propTypes = productNamePropType;

export default ProductName