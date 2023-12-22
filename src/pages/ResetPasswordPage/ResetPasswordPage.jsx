import styles from './ResetPasswordPage.module.css'
import Form from '../../components/Form/Form'
import { EmailInput, PasswordInput, Button, ShowIcon, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { saveNewPassword, createUser, resetPassword } from '../../utils/burger-api'
import { useForm } from '../../hooks/useForm'

const ResetPasswordPage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { values, handleChange, setValues } = useForm({ pin: '', newPassword: '' });
    const { pin, newPassword } = values;
    const handleClickButtonSave = (e) => {
        e.preventDefault();

        resetPassword(newPassword, pin)
            .then(() => {
                navigate('/login', { replace: true })
            })

    }
    
    if (location.state && location.state === '/forgot-password') {
        return (
            <main className={styles.ResetPasswordPage}>
                <Form title={'Восстановление пароля  '}>
                    <PasswordInput
                        onChange={handleChange}
                        value={newPassword}
                        name={'newPassword'}
                        extraClass="mb-6"
                        placeholder="Ввидите новый пароль"
                    />
                    <Input
                        onChange={handleChange}
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