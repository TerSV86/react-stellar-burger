import { titleTypeProductPropType } from '../../utils/prop-types'

const TitleTypeProduct = ({ type, /* id, onScroll */ }) => {
    return (
        <h2 className="text text_type_main-medium pb-6" /* id={id} onScroll={onScroll} */>{type}</h2>
    )
}

TitleTypeProduct.propTypes = titleTypeProductPropType;

export default TitleTypeProduct