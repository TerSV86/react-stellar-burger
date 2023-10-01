import styles from './ModalOverlay.module.css'
import { closeModal } from '../../services/ingredients/action';
import { useDispatch } from 'react-redux';


export default function ModalOverlay() {
    const dispatch = useDispatch()
    function handleClickCloseModal() {        
        dispatch(closeModal());
    }

    return (
        <div className={`${styles.ModalOverlay}`} onClick={handleClickCloseModal} />
    )
}





