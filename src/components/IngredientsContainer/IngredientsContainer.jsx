
import styles from './IngredientsContainer.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {ingredientsContainerPropType } from '../../utils/prop-types'

const IngredientsContainer = ({ product }) => {
    
    return (
        <div className={`${styles.IngredientsContainer} custom-scroll ml-4`}>
            {product.map((el) => {
                if (!(el.type === 'bun')) {
                    return (
                        <div key={el._id} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', width:"100%", maxWidth: '565px', height: '40%' }}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text={el.name}
                                price={el.price}
                                thumbnail={el.image}                                
                            />
                        </div>
                    )
                }
            })}
        </div>
    )
}

IngredientsContainer.propTypes = ingredientsContainerPropType;

export default IngredientsContainer