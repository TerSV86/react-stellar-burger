import { getRelativeTimeString } from '../../utils/burger'
import { TBurgerOrder } from '../../utils/typeOrderFeed';
import TotalPrice from '../TotalPrice/TotalPrice'
import styles from './OrderInfoTimePrice.module.css'

type Prop = {
    date?: TBurgerOrder;
}

const OrderInfoTimePrice = ({ date }: Prop) => {

    const dayOrder = (date) ? getRelativeTimeString(date.createdAt, 'ru') : undefined;
    const dateUTC = (date) ? new Date(date.createdAt) : undefined;
    const hours = dateUTC?.getHours()
    const minutes = dateUTC?.getMinutes()
    const zonaUTC = (dateUTC) ? Math.abs(dateUTC.getTimezoneOffset() / 60) : undefined;
    return (
        <div className={`${styles.OrderInfoTimePrice} mb-2`}>
            <p className='text text_type_main-default text_color_inactive'>{`${dayOrder}, ${hours}:${minutes} i-GMT+${zonaUTC}`}</p>
            <TotalPrice date={date} />
        </div>
    )
}

export default OrderInfoTimePrice