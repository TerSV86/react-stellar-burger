import { TIngredient } from '../../utils/type'
import styles from './IngredietnRoundFrame.module.css'

type Prop = {
    product: TIngredient
}

const IngredietnRoundFrame = ({ product }: Prop) => {
    
    return (
        <>
            <div className={`${styles.IngredietnRoundFrame}`}>
                <img src={product.image_mobile} alt={product.name} />
            </div>
        </>
    )
}

export default IngredietnRoundFrame