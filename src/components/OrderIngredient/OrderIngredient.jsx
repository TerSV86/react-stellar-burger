import IngredietnRoundFrame from '../IngredietnRoundFrame/IngredietnRoundFrame'
import OrderIngredientPrice from '../OrderIngredientPrice/OrderIngredientPrice'
import ProductName from '../ProductName/ProductName'
import styles from './OrderIngredient.module.css'


const OrderIngredient = ({ product, count }) => {
    
    return (
        <div className={`${styles.OrderIngredient} mr-6`}>
            <IngredietnRoundFrame product={product} />
            <ProductName name={product.name} />
            <OrderIngredientPrice price={product.price} count={count} />
        </div>
    )
}

OrderIngredient.propTypes = ''

export default OrderIngredient