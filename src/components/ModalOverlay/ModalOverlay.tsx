import styles from './ModalOverlay.module.css'
import { closeModal } from '../../services/ingredients/action';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';


export default function ModalOverlay() {
    const isOpen = useSelector(store => store.ingredients.openModalOrder.isOpen)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handleClickCloseModal() {
       if(!isOpen) navigate(-1)        
       if(isOpen) dispatch(closeModal()); 
    }

    return (
        <div className={`${styles.ModalOverlay}`} onClick={handleClickCloseModal} />
    )
}





