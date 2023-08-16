import styles from './BlockEnergyValue.module.css'

const BlockEnergyValue = ({name, value}) =>{
    return (
        <div className={`${styles.BlockEnergyValue}`}>
            <h2 className="text text_type_main-default">{name}</h2>
            <p className="text text_type_main-medium">{value}</p>
        </div>
    )
}

export default BlockEnergyValue