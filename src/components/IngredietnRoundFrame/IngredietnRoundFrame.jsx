import styles from './IngredietnRoundFrame.module.css'

const IngredietnRoundFrame = ({ product }) => {
    
    return (
        <>
            <div className={`${styles.IngredietnRoundFrame}`}>
                <img src={product.image_mobile} alt={product.name} /* style={{ zIndex: '0' }} */ />
            </div>
        </>
    )
}

export default IngredietnRoundFrame