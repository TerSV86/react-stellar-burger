import { useDispatch, useSelector } from 'react-redux'
import { orderBlockPropType } from '../../utils/prop-types'
import styles from './OrderBlock.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { openModalOrder } from '../../services/ingredients/action'
import { useNavigate } from 'react-router-dom'

const OrderBlock = ({ sum }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const selectIngredient = useSelector(store => store.ingredientList.selectIngredient)
    const user = useSelector(store => store.auth.user)
    const error = useSelector(store => store.ingredients.error)

    const handleClickButtonOrder = () => {
        (!user) ? navigate('/login') : dispatch(openModalOrder(selectIngredient));
    }

    if (error) {
        return <h2>{`Ошибка. Запрос не выполнен: ${error}`}</h2>
    }


    return (
        <div className={`${styles.OrderBlock} pt-6 pr-4 pb-2`}>
            <p className="text text_type_digits-medium pr-2">{sum}</p>
            <CurrencyIcon type="primary" />
            <Button disabled={selectIngredient.length === 0} htmlType="button" type="primary" size="large" className={`button button_type_primary button_size_large ml-10`} id='buttonOrder' onClick={(e) => handleClickButtonOrder()}>
                Оформить заказ
            </Button>
        </div>)

}

OrderBlock.propTypes = orderBlockPropType;

export default OrderBlock