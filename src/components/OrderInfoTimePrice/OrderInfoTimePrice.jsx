import { getRelativeTimeString } from '../../utils/burger'
import TotalPrice from '../TotalPrice/TotalPrice'
import styles from './OrderInfoTimePrice.module.css'

const OrderInfoTimePrice = ({date}) => {

    const dayOrder = getRelativeTimeString(date.createdAt, 'ru')
    const dateUTC = new Date(date.createdAt)
    const hours = dateUTC.getHours()
    const minutes = dateUTC.getMinutes()
    const zonaUTC = Math.abs(dateUTC.getTimezoneOffset() / 60)
    return (
        <div className={`${styles.OrderInfoTimePrice}`}>
            <p className='text text_type_main-default text_color_inactive'>{`${dayOrder}, ${hours}:${minutes} i-GMT+${zonaUTC}`}</p>
            <TotalPrice date = {date} />
        </div>
    )
}

export default OrderInfoTimePrice