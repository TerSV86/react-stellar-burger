import { useDispatch } from 'react-redux'
import { modalHeaderPropType } from '../../utils/prop-types'
import styles from './ModalHeader.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { closeModal } from '../../services/ingredients/action'
import { useNavigate } from 'react-router-dom'

const ModalHeader = ({ children }) => {
    const dispatch = useDispatch()
    const navigation = useNavigate()

    function handleClickCloseModal() {
        dispatch(closeModal())
        navigation('/')
    }
    return (
        <div className={`${styles.ModalHeader} pt-15 `} onClick={(e) => e.stopPropagation()}>
            <h2 className="text text_type_main-large">{children}</h2>
            <CloseIcon type="primary" onClick={handleClickCloseModal} />
        </div>
    )
}

ModalHeader.propTypes = modalHeaderPropType;

export default ModalHeader