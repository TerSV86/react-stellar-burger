import styles from './ResetPasswordPage.module.css'
import Form from '../../components/Form/Form'
import { EmailInput, PasswordInput, Button, ShowIcon, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { saveNewPassword, createUser, resetPassword } from '../../utils/burger-api'

const ResetPasswordPage = () => {
    const [newPassword, setNewPassword] = useState('')
    const [pin, setPin] = useState('')
    const navigate = useNavigate()

    /* const user = createUser() */
    /* saveNewPassword(newPassword = '',  '').then(res => console.log('2:'+res)) */
    const onChange = e => {
        if (e.target.name === 'password') {
            console.log(e.target.value);
            setNewPassword(e.target.value)
        } else {
            console.log(e.target.value);
            setPin(e.target.value)
        }
    }

    const handleClickButtonSave = () => {
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
            navigate('/login')
        })
        
    }
    return (
        <main className={styles.ResetPasswordPage}>
            <Form title={'Восстановление пароля  '}>
                <PasswordInput
                    onChange={onChange}
                    value={newPassword}
                    name={'password'}
                    extraClass="mb-6"
                    placeholder="Ввидите новый пароль"
                />
                <Input
                    onChange={onChange}
                    value={pin}
                    name={'pin'}
                    icon={"undefined"}
                    extraClass="mb-6"
                    placeholder="Ввидите код из письма"
                />
                <Button htmlType="button" type="primary" size="medium" extraClass={'mb-20'} onClick={handleClickButtonSave}>
                    Сохранить
                </Button>
                <h2 className={`text_type_main-small`}>Вспомнили пароль?<Link className={'pl-2'} style={{ textDecoration: 'none', color: '#4C4CFF' }}>Войти</Link></h2>
            </Form>
        </main>
    )
}

export default ResetPasswordPage;