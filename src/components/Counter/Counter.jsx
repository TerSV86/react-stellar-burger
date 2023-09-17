import styles from './Counter.module.css'
import { InfoIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const Counter = () => {
    return (
        <div className={styles.Counter}>
            <InfoIcon type="primary" />
            
            <span className='text text_type_digits-default'>1</span>
        </div>
    )
}

export default Counter