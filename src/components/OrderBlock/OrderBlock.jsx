import { orderBlockPropType } from '../../utils/prop-types'
import styles from './OrderBlock.module.css'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const OrderBlock = ({onClick}) => {
    return (
        <div className={`${styles.OrderBlock} pt-6 pr-4 pb-2`}>
            <p className="text text_type_digits-medium pr-2">610</p>
            <CurrencyIcon type="primary"  />
            <Button htmlType="button" type="primary" size="large" className={`button button_type_primary button_size_large ml-10`} id='buttonOrder' onClick={onClick}>
                Оформить заказ
            </Button>
        </div>

    )
}

OrderBlock.propTypes = orderBlockPropType;

export default OrderBlock