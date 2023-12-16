import styles from './OrderFeedBlockIngredientsBurger.module.css'
import OrderFeedBlockIngredientsList from '../OrderFeedBlockIngredientsList/OrderFeedBlockIngredientsList'
import OrderFeedBlockBurgerPrice from '../OrderFeedBlockBurgerPrice/OrderFeedBlockBurgerPrice'


const OrderFeedBlockIngredientsBurger = ({ingredients}) => {
    
    return (
        <div className={`${styles.OrderFeedBlockIngredientsBurger}`}>
            <OrderFeedBlockIngredientsList ingredients={ingredients}/>
            <OrderFeedBlockBurgerPrice ingredients={ingredients}/>            
        </div>
    )
}

export default OrderFeedBlockIngredientsBurger