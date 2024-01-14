import ProductsContainer from '../ProductsContainer/ProductsContainer'
import styles from './Products.module.css'
import TitleTypeProduct from '../TitleTypeProduct/TitleTypeProduct'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useMemo} from 'react'
import { SCROLL_INGREDIENTS_BUN, SCROLL_INGREDIENTS_SAUCES, SCROLL_INGREDIENTS_MAIN } from '../../services/scroll/action/scrollIngredients'
import React from 'react'

const Products = () => {

    const dispatch = useDispatch()
    const projectIngredients = useSelector(store => store.ingredients.ingredients)
console.log(projectIngredients[0]);
    const bunRef = useRef();
    const saucesRef = useRef();
    const mainRef = useRef();


    const handleScroll = () => {
        const container = document.getElementById('id');
        const topConteiner = container.getBoundingClientRect().top
        const bunsTop = bunRef.current.getBoundingClientRect().top;
        const saucesTop = saucesRef.current.getBoundingClientRect().top;
        const mainTop = mainRef.current.getBoundingClientRect().top;

        if (bunsTop <= topConteiner && topConteiner < saucesTop) {
            dispatch({ type: SCROLL_INGREDIENTS_BUN })
        }
        if (saucesTop <= topConteiner && topConteiner < mainTop) {
            dispatch({ type: SCROLL_INGREDIENTS_SAUCES })
        }
        if (mainTop <= topConteiner) {
            dispatch({ type: SCROLL_INGREDIENTS_MAIN })
        }
    }

    useEffect(() => {
        const container = document.getElementById('id');
        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
        }
    }, [])


    const filtredBuns = useMemo(() => projectIngredients.filter((el) => el.type === 'bun')) 
    const filtredMains = useMemo(() =>projectIngredients.filter((el) => el.type === 'main'))
    const filtredSauce = useMemo(() =>projectIngredients.filter((el) => el.type === 'sauce'))


    return (
        <div className={`${styles.Products} custom-scroll`} id='id' >
            <div ref={bunRef}>
                <TitleTypeProduct type={'Булки'} />
            </div>
            <ProductsContainer product={filtredBuns} />
            <div ref={saucesRef}>
                <TitleTypeProduct type={'Соусы'} />
            </div>
            <ProductsContainer product={filtredSauce} />
            <div ref={mainRef}>
                <TitleTypeProduct type={'Начинки'} />
            </div>
            <ProductsContainer product={filtredMains} />
        </div>
    )
}



export default React.memo(Products)

