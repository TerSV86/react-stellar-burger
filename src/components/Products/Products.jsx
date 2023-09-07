import ProductsContainer from '../ProductsContainer/ProductsContainer'
import { productPropType } from '../../utils/prop-types'
import styles from './Products.module.css'
import TitleTypeProduct from '../TitleTypeProduct/TitleTypeProduct'
import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../services/appContext'

const Products = () => {
    const state = useContext(AppContext)
    console.log(state);

    /* const [activeSection, setActiveSection] = useState(false);
    
    const handleScroll = () => {
        console.log('ter1');

        const sectionBuns = document.getElementById('buns')
        console.log(sectionBuns);
        const rect = sectionBuns.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setActiveSection(true);
        } else {
            setActiveSection(false);
        }

    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []) */

    const filtredBuns = state.filter((el) => el.type === 'bun')
    const filtredMains = state.filter((el) => el.type === 'main')
    const filtredSauce = state.filter((el) => el.type === 'sauce')
    return (
        <div className={`${styles.Products} custom-scroll`} >
            <TitleTypeProduct type={'Булки'} />
            <ProductsContainer product={filtredBuns}  />
            <TitleTypeProduct type={'Соусы'} /* onScroll={handleScroll} isActive={activeSection} id={'buns'} */ />
            <ProductsContainer product={filtredSauce} />
            <TitleTypeProduct type={'Начинки'} />
            <ProductsContainer product={filtredMains}  />
        </div>
    )
}

Products.propTypes = productPropType;

export default Products

