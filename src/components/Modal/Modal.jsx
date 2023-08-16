import styles from './Modal.module.css'
import React from 'react'
import ModalHeader from '../ModalHeader/ModalHeader';

class Modal extends React.Component {
    render() {
        const { children, onClick, clickButtonOreder } = this.props;
        return  (
            <div className={`${styles.Modal} `} onClick={(e) => e.stopPropagation()}>
                <ModalHeader onClick={onClick}>{clickButtonOreder ? null : "Детали ингредиента"}</ModalHeader>
                {children}
            </div>
        )
    }
}

export default Modal