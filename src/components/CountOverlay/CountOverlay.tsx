import styles from './CountOverlay.module.css'

type Prop = {
    count: number;
}

const CountOverlay = ({count}: Prop) => {
    return (<div className={`${styles.CountOverlay} text text_type_digits-default`}>{`+${count}`}</div>)
}

export default CountOverlay