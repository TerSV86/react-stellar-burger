import styles from './IngredientDetails.module.css'
import ProductImage from '../ProductImage/ProductImage'
import FoodValue from '../FoodValue/FoodValue'

const IngredientDetails = ({link, name, carbs, cal, fat, proteins }) => {
    return (
        <div className={`${styles.IngredientDetails}`}>
            <ProductImage link={link} />
            <p className="text text_type_main-medium pt-4 pb-8">{name}</p>
            <FoodValue carbs={carbs} cal={cal} fat={fat} proteins={proteins}/>
        </div>
    )
}

export default IngredientDetails