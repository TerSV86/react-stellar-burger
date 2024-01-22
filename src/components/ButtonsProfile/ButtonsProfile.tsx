import styles from './ButtonsProfile.module.css'
import { Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { getUser } from '../../services/auth/actions/actions'
import { Form } from '../../pages/ProfilePage/ProfilePage'

type Prop = {
    data: Form;
    onClickSave: () => void;
}
export const ButtonsProfile = ({ data, onClickSave }: Prop) => {

    const dispatch = useDispatch()
    const handleClickButtonSave = (e: React.SyntheticEvent<Element, Event>) => {
        e.preventDefault()
        dispatch(getUser(data))

        onClickSave()// наверно нужно после обновления stor менять иконку
    }

    return (
        <div className={styles.ButtonsProfile}>
            <Link to='/profile' className={`${styles.Link} text text_type_main-default pr-7`}>Отмена</Link>
            <Button htmlType='submit'
                onClick={(e) => handleClickButtonSave(e)}>Сохранить</Button>
        </div>
    )
}