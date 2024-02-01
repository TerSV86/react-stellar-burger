import ProductsContainer from '../ProductsContainer/ProductsContainer'
import styles from './Products.module.css'
import TitleTypeProduct from '../TitleTypeProduct/TitleTypeProduct'
import { useDispatch, useSelector } from '../../hooks/hooks'
import { useEffect, useRef, useMemo, ReactNode, ReactElement } from 'react'
import { SCROLL_INGREDIENTS_BUN, SCROLL_INGREDIENTS_SAUCES, SCROLL_INGREDIENTS_MAIN } from '../../services/scroll/action/scrollIngredients'
import React from 'react'

const Products = () => {
    const dispatch = useDispatch()
    const projectIngredients = useSelector(store => store.ingredients.ingredients)
    const bunRef = useRef<HTMLDivElement>(null);
    const saucesRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const container = document.getElementById('id');
        const topConteiner = (container) ? container.getBoundingClientRect().top : null;
        const bunsTop = (bunRef.current) ? bunRef.current.getBoundingClientRect().top : null;
        const saucesTop = (saucesRef.current) ? saucesRef.current.getBoundingClientRect().top : null;
        const mainTop = (mainRef.current) ? mainRef.current.getBoundingClientRect().top : null;
        if (bunsTop && topConteiner && saucesTop && mainTop) {
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

    }

    useEffect(() => {
        const container: Element = document.getElementById('id') as HTMLElement;
        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const filtredBuns = useMemo(() => projectIngredients.filter((el) => el.type === 'bun'), [projectIngredients])
    const filtredMains = useMemo(() => projectIngredients.filter((el) => el.type === 'main'),[projectIngredients])
    const filtredSauce = useMemo(() => projectIngredients.filter((el) => el.type === 'sauce'),[projectIngredients])

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

