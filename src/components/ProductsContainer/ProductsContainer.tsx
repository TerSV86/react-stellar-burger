import styles from './ProductsContainer.module.css'
import CardProduct from '../CardProduct/CardProduct'
import { productsContainerPropType } from '../../utils/prop-types';
import React from 'react'
import { TIngredient } from '../../utils/type';

type Prop = {
    product: TIngredient[];
}

const ProductsContainer = ({ product }: Prop) => {

    return (
        <div className={`${styles.ProductsContainer} pb-10 pl-4`} >
            {product.map((el, indx) => <CardProduct key={el._id} product={el} /* index={indx} */ />)}
        </div>
    )
}

ProductsContainer.propTypes = productsContainerPropType;

export default React.memo(ProductsContainer)