import { titleTypeProductPropType } from '../../utils/prop-types'

const TitleTypeProduct = ({ type }) => {
    return (
        <h2 className="text text_type_main-medium pb-6">{type}</h2>
    )
}

TitleTypeProduct.propType = titleTypeProductPropType;

export default TitleTypeProduct