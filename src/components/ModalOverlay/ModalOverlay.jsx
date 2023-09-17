import { modalOverlayPropType } from '../../utils/prop-types'
import styles from './ModalOverlay.module.css'


export default function ModalOverlay({onClick}) {
    
    return (
        <div className={`${styles.ModalOverlay}`} onClick={onClick}/>       
    )
}

ModalOverlay.propTypes = modalOverlayPropType;



