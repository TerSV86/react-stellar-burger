import styles from './ProductsContainer.module.css'
import CardProduct from '../CardProduct/CardProduct'
import { productsContainerPropType } from '../../utils/prop-types';



const ProductsContainer = ({ product }) => {

    return (
        <div className={`${styles.ProductsContainer} pb-10 pl-4`} >
            {product.map((el, indx) => <CardProduct key={el._id} product={el} index={indx} />)}
        </div>
    )
}

ProductsContainer.propTypes = productsContainerPropType;

export default ProductsContainer