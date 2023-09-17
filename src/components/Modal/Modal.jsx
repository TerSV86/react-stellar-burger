import styles from './Modal.module.css'
import ReactDOM from 'react-dom'
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { reactModals } from '../../utils/data'
import { useEffect } from 'react';
import { modalPropType } from '../../utils/prop-types';


export default function Modal({  onClick, children, title }) {
    
     useEffect(() => {
        function closeByEscape(evt) {
            if (evt.key === 'Escape') {
                onClick();
            }
        }
        document.addEventListener('keydown', closeByEscape);
        return () => {
            document.removeEventListener('keydown', closeByEscape);
        }

    }, [])   
   
    return ReactDOM.createPortal((
        <>
            <ModalOverlay onClick={onClick} />
            <div className={`${styles.Modal} `} onClick={(e) => e.stopPropagation()} >
                <ModalHeader onClick={onClick}>{title}</ModalHeader>
                {children}
            </div>
        </>
    ), reactModals
    )
}

Modal.propTypes = modalPropType;