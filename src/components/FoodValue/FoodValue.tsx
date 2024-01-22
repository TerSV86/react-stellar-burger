import { foodValuePropType } from '../../utils/prop-types'
import BlockEnergyValue from '../BlockEnergyValue/BlockEnergyValue'
import styles from './FoodValue.module.css'

type Prop = {
    carbs: number;
    cal: number;
    fat: number;
    proteins: number;
}

const FoodValue = ({carbs, cal, fat, proteins}: Prop) => {
    return (
        <div className={`${styles.FoodValue} pb-15`}>
            <BlockEnergyValue name='Калории,ккал' value={cal} />
            <BlockEnergyValue name='Белки,г' value={proteins} />
            <BlockEnergyValue name='Жиры,г' value={fat} />
            <BlockEnergyValue name='Углеводы, г' value={carbs} />
        </div>
    )
}

FoodValue.propTypes = foodValuePropType;

export default FoodValue