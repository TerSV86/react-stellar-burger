import styles from './ButtonsProfile.module.css'
import { Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { getUser } from '../../services/auth/actions/actions'

export const ButtonsProfile = (data) => {
    console.log(data);
    const dispatch = useDispatch()
    const handleClickButtonSave = (e) =>{
        e.preventDefault()
        console.log(data.name);
        dispatch(getUser( data.name ))

    }

    return (
        <div className={styles.ButtonsProfile}>
            <Link className={`${styles.Link} text text_type_main-default pr-7`}>Отмена</Link>
            <Button onClick={(e)=>handleClickButtonSave(e)}>Сохранить</Button>
        </div>
    )
}