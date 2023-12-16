import styles from './CountOverlay.module.css'

const CountOverlay = ({count}) => {
    return (<div className={`${styles.CountOverlay} text text_type_digits-default`}>{`+${count}`}</div>)
}

export default CountOverlay