import ProductsContainer from '../ProductsContainer/ProductsContainer'
import { productPropType } from '../../utils/prop-types'
import styles from './Products.module.css'
import TitleTypeProduct from '../TitleTypeProduct/TitleTypeProduct'

const Products = ({ productData, onClick }) => {
    const filtredBuns = productData.filter((el) => el.type === 'bun')
    const filtredMains = productData.filter((el) => el.type === 'main')
    const filtredSauce = productData.filter((el) => el.type === 'sauce')
    return (
        <div className={`${styles.Products} custom-scroll`}>
            <TitleTypeProduct type={'Булки'} />
            <ProductsContainer product={filtredBuns} onClick={onClick} />
            <TitleTypeProduct type={'Соусы'} />
            <ProductsContainer product={filtredSauce} onClick={onClick} />
            <TitleTypeProduct type={'Начинки'} />
            <ProductsContainer product={filtredMains} onClick={onClick} />
        </div>
    )
}

Products.propType = productPropType;

export default Products

