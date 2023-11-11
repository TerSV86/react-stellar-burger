import styles from './CardProduct.module.css'
import ProductImage from '../ProductImage/ProductImage'
import ProductPrice from '../ProductPrice/ProductPrice'
import ProductName from '../ProductName/ProductName'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { cardProductPropType } from '../../utils/prop-types'
import { useDrag } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { openModalIngredient } from '../../services/ingredients/action'
import { Navigate, useNavigate } from 'react-router-dom'

const CardProduct = ({ product, index }) => {
    const navigate = useNavigate()
    const id = product._id;
    const dispatch = useDispatch()
    const selectIngredient = useSelector(store => store.ingredientList.selectIngredient)
    const ingredientList = selectIngredient.filter(ingredient => ingredient._id === id)
    let count = 0;
    const countingIngredient = (ingredient) => {
        if (ingredient[0] !== undefined && ingredient[0].type === 'bun') {
            count = 2;
            return count
        }
        return count = ingredient.length
    }
    countingIngredient(ingredientList)

    const [{ isDrag }, dragRef] = useDrag({
        type: product.type !== 'bun' ? 'ingredient' : 'ingredientBun',

        item: product,
    })

    const handleClickIngredient = () => {
        console.log(index);
        dispatch(openModalIngredient(product))
        navigate(`/ingredient/${index}`)
    }

    return (
        !isDrag && <article className={`${styles.CardProduct} `} ref={dragRef} onClick={handleClickIngredient}>
            <ProductImage link={product.image} name={product.name} />
            <ProductPrice price={product.price} />
            <ProductName name={product.name} />
            {count === 0 ? null : <Counter count={count} size="default" extraClass="m-1" />}
        </article>
    )
}

CardProduct.propTypes = cardProductPropType;

export default CardProduct