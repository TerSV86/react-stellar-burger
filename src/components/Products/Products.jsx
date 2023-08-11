import { useState, useEffect } from 'react'
import ProductsContainer from '../ProductsContainer/ProductsContainer'
import TypeProduct from '../TypeProduct/TypeProduct'

import styles from './Products.module.css'

const Products = () => {
    const [state, setState] = useState({
        productData: []
    })
    useEffect(() => {
        try {
            const getProductData = async () => {
                const res = await fetch('https://norma.nomoreparties.space/api/ingredients');
                const data = await res.json();
                if (!res.ok) {
                    console.error(`Ошибка выполнения запроса. Статус: $${res.status}`);
                    return;
                }
                setState((prevState) => ({
                    ...prevState,
                    productData: data.data
                }))
            }
            getProductData();
        } catch (err) {
            console.error(`Ошибка. Запрос не выполнен:`, err)
        }
    }, [])

    const { productData } = state;       
    const filtredBuns = productData.filter((el) => el.type === 'bun')
    const filtredMains = productData.filter((el) => el.type === 'main')
    const filtredSauce = productData.filter((el) => el.type === 'sauce')
    return (
        <div className={`${styles.Products} custom-scroll`}>
            <TypeProduct type={'Булки'}  />
            <ProductsContainer product={filtredBuns} />

            <TypeProduct type={'Соусы'} />
            <ProductsContainer product={filtredSauce} />

            <TypeProduct type={'Начинки'} />
            <ProductsContainer product={filtredMains} />
        </div>
    )
}

export default Products

