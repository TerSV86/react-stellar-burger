import { orderFeedBlockTitlePropType } from '../../utils/prop-types'
import styles from './OrderFeedBlockTitle.module.css'
import React from 'react'

const OrderFeedBlockTitle = ({name}) => {
    return (
        <h2 className={`${styles.OrderFeedBlockTitle} text text_type_main-medium`}>{name}</h2>
    )
}

OrderFeedBlockTitle.propTypes = orderFeedBlockTitlePropType

export default React.memo(OrderFeedBlockTitle)