import styles from './OrderFeedBlockHeader.module.css'
import { getRelativeTimeString } from '../../utils/burger';
import { orderFeedBlockHeaderPropType } from '../../utils/prop-types';
import React from 'react'

type Prop = {
    date: string;
    number: number;
}

const OrderFeedBlockHeader = ({ date, number }: Prop) => {
    const dayOrder = (getRelativeTimeString(date, 'ru'));   
    const dateUTC = new Date(date)
    const hours = dateUTC.getHours()
    const minutes = dateUTC.getMinutes()
    const zonaUTC = Math.abs(dateUTC.getTimezoneOffset() / 60)
    
    return (
        <div className={`${styles.OrderFeedBlockHeader}`}>
            <p className='text text_type_digits-default' >#{number}</p>
            <p className='text text_type_main-default text_color_inactive'>{`${dayOrder}, ${hours}:${minutes} i-GMT+${zonaUTC}`}</p>
        </div>
    )
}

OrderFeedBlockHeader.propTypes = orderFeedBlockHeaderPropType;

export default React.memo(OrderFeedBlockHeader)