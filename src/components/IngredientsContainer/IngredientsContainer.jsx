
import styles from './IngredientsContainer.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientsContainerPropType } from '../../utils/prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { deleteIngredientOther} from '../../services/ingredients/action'

const IngredientsContainer = () => {
    const selectIngredient = useSelector(store => store.selectIngredient)
    const dispatch = useDispatch()
    console.log(selectIngredient);

    function deleteIngredient(id) {
        
        dispatch(deleteIngredientOther(id))

    }

    return (
        <div className={`${styles.IngredientsContainer} custom-scroll ml-4`}>
            {selectIngredient.map((el) => {
                console.log(el);
                
                if (!(el.ingredient.type === 'bun')) {
                    return (
                        <div key={Math.random()} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', width: "100%", maxWidth: '565px', height: '40%', boxSizing: 'border-box' }}  >
                            <DragIcon type="primary" />

                            <ConstructorElement
                                text={el.ingredient.name}
                                price={el.ingredient.price}
                                thumbnail={el.ingredient.image}
                                handleClose={() => { deleteIngredient(el.id) }}
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