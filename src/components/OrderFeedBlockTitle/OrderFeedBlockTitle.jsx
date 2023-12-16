import styles from './OrderFeedBlockTitle.module.css'

const OrderFeedBlockTitle = ({name}) => {
    return (
        <h2 className={`${styles.OrderFeedBlockTitle} text text_type_main-medium`}>{name}</h2>
    )
}

export default OrderFeedBlockTitle