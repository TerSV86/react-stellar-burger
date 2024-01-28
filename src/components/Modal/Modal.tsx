import styles from './Modal.module.css'
import ReactDOM from 'react-dom'
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
/* import { reactModals } from '../../utils/data' */
import { ReactNode, useEffect } from 'react';
import { modalPropType } from '../../utils/prop-types';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { closeModal } from '../../services/ingredients/action';
import { useNavigate } from 'react-router-dom';

type Prop = {
    children: ReactNode;
    title?: string;
}


export default function Modal({ children, title }: Prop) {
    const reactModals = document.getElementById('react-modals') as HTMLElement;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isOpen = useSelector(store => store.ingredients.openModalOrder.isOpen)
    
    useEffect(() => {
        function closeByEscape(evt: { key: string; }) {                   
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