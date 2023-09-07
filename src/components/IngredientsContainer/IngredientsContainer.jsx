
import styles from './IngredientsContainer.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {ingredientsContainerPropType } from '../../utils/prop-types'
import { SelectIngredient } from '../../services/appContext'
import {useContext} from 'react'

const IngredientsContainer = (/* { product } */ ) => {
    const{selectIngredient, deleteIngredient} = useContext(SelectIngredient)
    console.log(selectIngredient);
    return (
        <div className={`${styles.IngredientsContainer} custom-scroll ml-4`}>
            {selectIngredient.map((el) => {
                if (!(el.type === 'bun')) {
                    return (
                        <div key={el._id} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', width:"100%", maxWidth: '565px', height: '40%', boxSizing: 'border-box'}}  >
                            <DragIcon type="primary" />
                            
                            <ConstructorElement
                                text={el.name}
                                price={el.price}
                                thumbnail={el.image} 
                                handleClose={(e) => {deleteIngredient(e, el)}}                         
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