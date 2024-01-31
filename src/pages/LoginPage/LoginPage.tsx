import styles from './LoginPage.module.css'
import Form from '../../components/Form/Form'
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from '../../hooks/hooks'
import { login } from '../../services/auth/actions/actions'
import { useForm } from '../../hooks/useForm'
import { TValue } from '../ProfilePage/ProfilePage'

const LoginPage = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const user = useSelector(store => store.auth.user)
    const navigate = useNavigate()
    const { values, handleChange, setValues } = useForm<TValue>({ email: '', password: '' });
    const { email, password } = values;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login({ email, password }))
    }

    useEffect(() => {
        if (user) {
            navigate(-1)
        }
    }, [user])

    return (
        <main className={styles.LoginPage}>
            <Form title={'Вход'} onSubmit={handleSubmit}>
                <EmailInput
                    onChange={handleChange}
                    value={(email) ? email : ''}
                    name={'email'}
                    isIcon={false}
                    extraClass='mb-6'
                />
                <PasswordInput
                    onChange={handleChange}
                    value={(password) ? password : ''}
                    name={'password'}
                    extraClass="mb-6"
                />
                <Button htmlType="submit" type="primary" size="medium" extraClass={'mb-20'}>
                    Войти
                </Button>
                <h2 className={`text_type_main-small pb-4`}>
                    Вы - новый пользователь?
                    <Link to={'/register'} className={'pl-2'} style={{ textDecoration: 'none', color: '#4C4CFF' }}>
                        Зарегистрироваться
                    </Link></h2>
                <h2 className={`text_type_main-small`}>
                    Забыли пароль?
                    <Link to={'/forgot-password'} state={location} className={'pl-2'} style={{ textDecoration: 'none', color: '#4C4CFF' }}>
                        Восстановить пароль
                    </Link></h2>
            </Form>
        </main>
    )
}

export default LoginPage;