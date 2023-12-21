import styles from './ResetPasswordPage.module.css'
import Form from '../../components/Form/Form'
import { EmailInput, PasswordInput, Button, ShowIcon, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { saveNewPassword, createUser, resetPassword } from '../../utils/burger-api'
import {useForm} from '../../hooks/useForm'

const ResetPasswordPage = () => {
    /* const [newPassword, setNewPassword] = useState('')
    const [pin, setPin] = useState('') */
    const navigate = useNavigate()
    const location = useLocation()

    /* const user = createUser() */
    /* saveNewPassword(newPassword = '',  '').then(res => console.log('2:'+res)) */
    /* const onChange = e => {
        if (e.target.name === 'password') {
            console.log(e.target.value);
            setNewPassword(e.target.value)
        } else {
            console.log(e.target.value);
            setPin(e.target.value)
        }
    } */
    const { values, handleChange, setValues } = useForm({pin: '', newPassword: '' });
    const { pin, newPassword } = values;
    const handleClickButtonSave = (e) => {
        e.preventDefault();
        console.log(newPassword, pin);
        /* const user = createUser()
        user.then(res => res.json())
            .then((data) => {
                console.log(data)
                const authToken = data.accessToken.split('Bearer ')[1]
                saveNewPassword(newPassword, authToken).then(res => console.log('2:'+res))
                createUser()

            }) */
        resetPassword(newPassword, pin)
        .then(() => {
            navigate('/login', {replace: true})
        })
        
    }
    console.log(location);
    if (location.state && location.state === '/forgot-password') {
         return (
        <main className={styles.ResetPasswordPage}>
            <Form title={'Восстановление пароля  '}>
                <PasswordInput
                    onChange={/* onChange */handleChange}
                    value={newPassword}
                    name={'newPassword'}
                    extraClass="mb-6"
                    placeholder="Ввидите новый пароль"
                />
                <Input
                    onChange={/* onChange */handleChange}
                    value={pin}
                    name={'pin'}
                    icon={"undefined"}
                    extraClass="mb-6"
                    placeholder="Ввидите код из письма"
                />
                <Button htmlType="submit" type="primary" size="medium" extraClass={'mb-20'} onClick={(e) => handleClickButtonSave(e)}>
                    Сохранить
                </Button>
                <h2 className={`text_type_main-small`}>Вспомнили пароль?<Link className={'pl-2'} style={{ textDecoration: 'none', color: '#4C4CFF' }}>Войти</Link></h2>
            </Form>
        </main>
    )
    }
    return (<h2>Доступ к странице закрыт</h2>)
}

export default ResetPasswordPage;