import styles from './OrderFeedBlockIngredientsBurger.module.css'
import OrderFeedBlockIngredientsList from '../OrderFeedBlockIngredientsList/OrderFeedBlockIngredientsList'
import OrderFeedBlockBurgerPrice from '../OrderFeedBlockBurgerPrice/OrderFeedBlockBurgerPrice'
import { orderFeedBlockIngredientsPropType } from '../../utils/prop-types';
import React from 'react'

const OrderFeedBlockIngredientsBurger = ({ingredients}) => {
    
    return (
        <div className={`${styles.OrderFeedBlockIngredientsBurger}`}>
            <OrderFeedBlockIngredientsList ingredients={ingredients}/>
            <OrderFeedBlockBurgerPrice ingredients={ingredients}/>            
        </div>
    )
}

OrderFeedBlockIngredientsBurger.propTypes = orderFeedBlockIngredientsPropType;

export default React.memo(OrderFeedBlockIngredientsBurger)