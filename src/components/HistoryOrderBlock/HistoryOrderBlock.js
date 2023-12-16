import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import OrderFeedBlockHeader from '../OrderFeedBlockHeader/OrderFeedBlockHeader'
import OrderFeedBlockIngredientsBurger from '../OrderFeedBlockIngredientsBurger/OrderFeedBlockIngredientsBurger'
import OrderFeedBlockTitle from '../OrderFeedBlockTitle/OrderFeedBlockTitle'
import styles from './HistoryOrderBlock.module.css'

const HistoryOrderBlock = ({ ingredients, number, name, date, status }) => {
    const location = useLocation();
    

    const statusOrder = () => {
        switch (status) {
            case 'done':
                return status = 'Выполнен'
            case 'created':
                return status = 'Создан'
            case 'pending':
                return status = 'Готовится'
            default:
                return null
        }
    }
   

    return (
        <Link
            key={number}
            to={`${number}`}
            state={{ background: location }}
            
            className={styles.link}
        >
            <article className={`${styles.HistoryOrderBlock} p-6`}>
                <OrderFeedBlockHeader date={date} number={number} />
                <OrderFeedBlockTitle name={name} />
                <p className="text text_type_main-default pt-2 pb-6" style={{ color: (status === 'done') ? '#00CCCC' : 'inherit' }}>{statusOrder()}</p>
                <OrderFeedBlockIngredientsBurger ingredients={ingredients} />
            </article>
        </Link>

    )
}

export default HistoryOrderBlock