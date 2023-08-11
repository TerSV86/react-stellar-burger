import { useState } from 'react';
import styles from './ProductsContainer.module.css'
import CardProduct from '../CardProduct/CardProduct'

const ProductsContainer = ({ product }) => {  
    return (        
        <div className={`${styles.ProductsContainer} pb-10 pl-4`} >
           {product.map((el) => <CardProduct key={el._id} link={el.image} name={el.name} price={el.price} />) }
        </div>
    )
}

export default ProductsContainer