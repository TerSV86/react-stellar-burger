import styles from './LoginPage.module.css'
import Form from '../../components/Form/Form'
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../services/auth/actions/actions'

const LoginPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(store => store.auth)
    console.log(user);
    const [form, setValue] = useState({email: '', password: ''})
    const {email, password} = form;
    console.log(email);   
    
    const onChange = e => {
        setValue({...form, [e.target.name]:e.target.value})
    }
    
const handleClickButtonRegister = () => {
    dispatch(login({email, password}))
} 

if (user.user) {
    return <Navigate to='/' replace />
}
    
    return (
        <main className={styles.LoginPage}>
            <Form title={'Вход'}>
                <EmailInput
                    onChange={onChange}
                    value={email}
                    name={'email'}
                    isIcon={false}
                    extraClass='mb-6'
                />
                <PasswordInput
                    onChange={onChange}
                    value={password}
                    name={'password'}
                    extraClass="mb-6"
                />
                <Button htmlType="button" type="primary" size="medium" extraClass={'mb-20'} onClick = {handleClickButtonRegister}>
                   Войти
                </Button>
                <h2 className={`text_type_main-small pb-4`}> Вы - новый пользователь? <Link to={'/register'} className={'pl-2'} style={{textDecoration:'none', color: '#4C4CFF'}}>Зарегистрироваться</Link></h2>
                <h2 className={`text_type_main-small`}>Забыли пароль?<Link to={'/forgot-password'} className={'pl-2'} style={{textDecoration:'none', color: '#4C4CFF'}}>Восстановить пароль</Link></h2>
            </Form>
        </main>
    )
}

export default LoginPage;