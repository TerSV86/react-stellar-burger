import { getRelativeTimeString } from '../../utils/burger'
import { TBurgerOrder } from '../../utils/typeOrderFeed';
import TotalPrice from '../TotalPrice/TotalPrice'
import styles from './OrderInfoTimePrice.module.css'

type Prop = {
    date: TBurgerOrder;
}

const OrderInfoTimePrice = ({ date }: Prop) => {
    const dayOrder = getRelativeTimeString(date.createdAt, 'ru')
    const dateUTC = new Date(date.createdAt)
    const hours = dateUTC.getHours()
    const minutes = dateUTC.getMinutes()
    const zonaUTC = Math.abs(dateUTC.getTimezoneOffset() / 60)
    return (
        <div className={`${styles.OrderInfoTimePrice} mb-2`}>
            <p className='text text_type_main-default text_color_inactive'>{`${dayOrder}, ${hours}:${minutes} i-GMT+${zonaUTC}`}</p>
            <TotalPrice date={date} />
        </div>
    )
}

export default OrderInfoTimePrice