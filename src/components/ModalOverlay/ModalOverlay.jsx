
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ModalOverlay.module.css'

const reactModals = document.getElementById('react-modals')

class ModalOverlay extends React.Component {
    render() {
        const {children, open, onClick} = this.props;
        if (!open) return null
        return ReactDOM.createPortal(
            (
            <div className={`${styles.ModalOverlay}`} onClick={onClick}>
                {children}
            </div>
            ), reactModals
        );
    }
}

export default ModalOverlay

