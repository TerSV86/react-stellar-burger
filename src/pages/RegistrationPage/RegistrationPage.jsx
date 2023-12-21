import styles from './RegistrationPage.module.css'
import Form from '../../components/Form/Form'
import { EmailInput, PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { register } from '../../services/auth/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'

const RegistrationPage = () => {
    const user = useSelector(store => store.auth)
    const dispatch = useDispatch();
    const { values, handleChange, setValues } = useForm({});
    console.log(values);
    const { login, email, password } = values

    const handleClickButtonRegister = () => {
        dispatch(register({ login, password, email }))
    }

    if (user.user) {
        return <Navigate to='/' replace />
    }

    return (
        <main className={styles.RegistrationPage}>
            <Form title={'Регистрация'}>
                <Input
                    onChange={handleChange}
                    value={login}
                    name={'login'}
                    placeholder="Логин"
                    extraClass="mb-6"
                />
                <EmailInput
                    onChange={handleChange}
                    value={email}
                    name={'email'}
                    isIcon={false}
                    extraClass='mb-6'
                />
                <PasswordInput
                    onChange={handleChange}
                    value={password}
                    name={'password'}
                    extraClass="mb-6"
                />
                <Button htmlType="button" type="primary" size="medium" extraClass={'mb-20'} onClick={handleClickButtonRegister}>
                    Зарегистрироваться
                </Button>

                <h2 className={`text_type_main-small`}>Уже зарегистрированы?<Link to={'/login'} className={'pl-2'} style={{ textDecoration: 'none', color: '#4C4CFF' }}>Войти</Link></h2>
            </Form>
        </main>
    )
}

export default RegistrationPage;