import { SelectIngredient } from '../../services/appContext'
import { orderBlockPropType } from '../../utils/prop-types'
import styles from './OrderBlock.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {useContext} from 'react'

const OrderBlock = ({sum}) => {
    const{handleClickOpenModal, order} = useContext(SelectIngredient)
    return (
        <div className={`${styles.OrderBlock} pt-6 pr-4 pb-2`}>
            <p className="text text_type_digits-medium pr-2">{sum}</p>
            <CurrencyIcon type="primary"  />
            <Button htmlType="button" type="primary" size="large" className={`button button_type_primary button_size_large ml-10`} id='buttonOrder' onClick={(e) => {handleClickOpenModal(e)}}>
                Оформить заказ
            </Button>
        </div>

    )
}

OrderBlock.propTypes = orderBlockPropType;

export default OrderBlock