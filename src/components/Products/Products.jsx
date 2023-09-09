import ProductsContainer from '../ProductsContainer/ProductsContainer'
import { productPropType } from '../../utils/prop-types'
import styles from './Products.module.css'
import TitleTypeProduct from '../TitleTypeProduct/TitleTypeProduct'
import { useSelector } from 'react-redux'

const Products = () => {   
    const projectIngredients = useSelector(store => store.ingredients)
    console.log(projectIngredients);

    const filtredBuns = projectIngredients.filter((el) => el.type === 'bun')
    const filtredMains = projectIngredients.filter((el) => el.type === 'main')
    const filtredSauce = projectIngredients.filter((el) => el.type === 'sauce')
    return (
        <div className={`${styles.Products} custom-scroll`} >
            <TitleTypeProduct type={'Булки'} />
            <ProductsContainer product={filtredBuns} />
            <TitleTypeProduct type={'Соусы'} /* onScroll={handleScroll} isActive={activeSection} id={'buns'} */ />
            <ProductsContainer product={filtredSauce} />
            <TitleTypeProduct type={'Начинки'} />
            <ProductsContainer product={filtredMains} />
        </div>
    )
}

Products.propTypes = productPropType;

export default Products

