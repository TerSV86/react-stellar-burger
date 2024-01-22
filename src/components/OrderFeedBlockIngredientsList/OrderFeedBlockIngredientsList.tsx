import CountOverlay from '../CountOverlay/CountOverlay';
import styles from './OrderFeedBlockIngredientsList.module.css'
import { useSelector } from '../../hooks/hooks';
import { orderFeedBlockIngredientsPropType } from '../../utils/prop-types';
import React from 'react'

type Prop = {
    ingredients: string[]
}

const OrderFeedBlockIngredientsList = ({ ingredients }: Prop) => {
    const products = useSelector(store => store.ingredients.ingredients)

    const uniqueIngredientsSet = new Set(ingredients)
    const uniqueIngredientsArr = [...uniqueIngredientsSet]

    //Ввел проверку после того как ingredients выдавал массив [null, 'id', null] и страница не загружалась
    if (ingredients.every(i => typeof i === 'string')) {
        return (
            //z-index проставить из перебора map в инлайнстиле
            <div className={`${styles.OrderFeedBlockIngredientsList}`}>
                {uniqueIngredientsArr.map((prod, index) => {
                    const ingr = products.find((product) => product._id === prod)
                    let counters = ingredients.filter((elem) => elem === prod).length
                    if (prod === '643d69a5c3f7b9001cfa093c' || prod === '643d69a5c3f7b9001cfa093d') { counters = 2 };
                    if (ingr) {
                        return (
                            <div key={ingr._id} className={`${styles.ingredient}`} style={{ zIndex: `-${index}` }}>
                                <img src={ingr.image_mobile} alt={ingr.name} />
                                {(counters > 1) && <CountOverlay count={counters} />}
                            </div>
                        )
                    }
                }
                )}
            </div>
        )
    }
    return (<p>Ингредиенты отсутствуют</p>)

}

OrderFeedBlockIngredientsList.propTypes = orderFeedBlockIngredientsPropType;

export default React.memo(OrderFeedBlockIngredientsList)