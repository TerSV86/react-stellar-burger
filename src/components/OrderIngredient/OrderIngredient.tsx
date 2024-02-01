import { TIngredient } from '../../utils/type'
import IngredietnRoundFrame from '../IngredietnRoundFrame/IngredietnRoundFrame'
import OrderIngredientPrice from '../OrderIngredientPrice/OrderIngredientPrice'
import ProductName from '../ProductName/ProductName'
import styles from './OrderIngredient.module.css'

type Prop = {
    product:  TIngredient;
    count?: number;
}

const OrderIngredient = ({ product, count }: Prop) => {
    
    return (
        <div className={`${styles.OrderIngredient} mr-6`}>
            <IngredietnRoundFrame product={product} />
            <ProductName name={product.name} />
            <OrderIngredientPrice price={product.price} count={(count)? count : undefined} />
        </div>
    )
}

OrderIngredient.propTypes = ''

export default OrderIngredient