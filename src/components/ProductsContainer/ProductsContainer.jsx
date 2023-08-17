import styles from './ProductsContainer.module.css'
import CardProduct from '../CardProduct/CardProduct'
import { productsContainerPropType } from '../../utils/prop-types';

const ProductsContainer = ({ product, onClick }) => {  
    
    return (        
        <div className={`${styles.ProductsContainer} pb-10 pl-4`}  >
           {product.map((el) => <CardProduct key={el._id} link={el.image} name={el.name} price={el.price} onClick={(e)=> onClick(e, el)}  />) }
        </div>
    )
}

ProductsContainer.propTypes = productsContainerPropType;

export default ProductsContainer