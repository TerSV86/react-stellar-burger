import { useSelector } from 'react-redux'
import styles from './CompletedOrders.module.css'

type Prop = {
    title: string;
    value: number | null;
}

const CompletedOrders = ({title, value}: Prop) => {
    
    return (
        <div className={`${styles.CompletedOrders}`}>
            <h2 className='text text_type_main-large'>{title}</h2>
            <p className="text text_type_digits-large">{value}</p>
        </div>
    )
}

export default CompletedOrders