import { modalHeaderPropType } from '../../utils/prop-types'
import styles from './ModalHeader.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const ModalHeader = ({ children, onClick }) => {

    return (
        <div className={`${styles.ModalHeader} pt-15 `} onClick={(e) => e.stopPropagation()}>
            <h2 className="text text_type_main-large">{children}</h2>
            <CloseIcon type="primary" onClick={onClick} />
        </div>
    )
}

ModalHeader.propTypes = modalHeaderPropType;

export default ModalHeader