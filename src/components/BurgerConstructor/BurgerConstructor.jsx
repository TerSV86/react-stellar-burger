import IngredientsContainer from '../IngredientsContainer/IngredientsContainer'
import styles from './BurgerConstructor.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderBlock from '../OrderBlock/OrderBlock'
import { burgerConstructorPropType } from '../../utils/prop-types'

const BurgerConstructor = ({ productData, onClick }) => {

    return (
        <section className={`${styles.BurgerConstructor} pt-25 `}>
            {productData.map((el) => {
                if (el.type === 'bun' && el._id === '643d69a5c3f7b9001cfa093c') {
                    return (<ConstructorElement
                        key={'2'}
                        type="top"
                        isLocked={true}
                        text={`${el.name} (верх)`}
                        price={el.price}
                        thumbnail={el.image}
                        extraClass='ml-9'
                    />);
                }
            })}
            < IngredientsContainer product={productData} />
            {productData.map((el) => {
                if (el.type === 'bun' && el._id === '643d69a5c3f7b9001cfa093c') {
                    return (<ConstructorElement
                        key={'1'}
                        type="bottom"
                        isLocked={true}
                        text={`${el.name} (низ)`}
                        price={el.price}
                        thumbnail={el.image}
                        extraClass='ml-9'
                    />);
                }
            })}
            <OrderBlock onClick={onClick} />
        </section>
    )
}

BurgerConstructor.propTypes = burgerConstructorPropType;

export default BurgerConstructor