import styles from './Modal.module.css'
import ReactDOM from 'react-dom'
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { reactModals } from '../../utils/data'
import { useEffect } from 'react';
import { modalPropType } from '../../utils/prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../services/ingredients/action';
import { useNavigate } from 'react-router-dom';


export default function Modal({ children, title }) {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isOpen = useSelector(store => store.ingredients.openModalOrder.isOpen)
    
    useEffect(() => {
        function closeByEscape(evt) {   
            console.log('esc');         
            if (evt.key === 'Escape') {                
                if (!isOpen) navigate(-1)
                if (isOpen) dispatch(closeModal());
            }
        }
        document.addEventListener('keydown', closeByEscape);
        return () => {
            document.removeEventListener('keydown', closeByEscape);
        }

    }, [])

    return ReactDOM.createPortal((
        <>
            <ModalOverlay />
            <div className={`${styles.Modal} pb-8`} onClick={(e) => e.stopPropagation()} >
                <ModalHeader >{title}</ModalHeader>
                {children}
            </div>
        </>
    ), reactModals
    )
}

Modal.propTypes = modalPropType;