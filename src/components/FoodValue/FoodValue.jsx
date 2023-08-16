import BlockEnergyValue from '../BlockEnergyValue/BlockEnergyValue'
import styles from './FoodValue.module.css'

const FoodValue = ({carbs, cal, fat, proteins}) => {
    return (
        <div className={`${styles.FoodValue} pb-15`}>
            <BlockEnergyValue name='Калории,ккал' value={cal} />
            <BlockEnergyValue name='Белки,г' value={proteins} />
            <BlockEnergyValue name='Жиры,г' value={fat} />
            <BlockEnergyValue name='Углеводы, г' value={carbs} />
        </div>
    )
}

export default FoodValue