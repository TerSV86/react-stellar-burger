import styles from './ResetPasswordPage.module.css'
import Form from '../../components/Form/Form'
import { PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { resetPassword } from '../../utils/burger-api'
import { useForm } from '../../hooks/useForm'

type TValue = {
    pin: string;
    newPassword: string;
}

const ResetPasswordPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { values, handleChange, setValues } = useForm<TValue>({ pin: '', newPassword: '' });
    const { pin, newPassword } = values;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        resetPassword(newPassword, pin)
            .then(() => {
                navigate('/login', { replace: true })
            })
    }

    if (location.state && location.state === '/forgot-password') {
        return (
            <main className={styles.ResetPasswordPage}>
                <Form title={'Восстановление пароля '} onSubmit={handleSubmit}>
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
                        icon={undefined}
                        extraClass="mb-6"
                        placeholder="Ввидите код из письма"
                    />
                    <Button
                        htmlType="submit"
                        type="primary"
                        size="medium"
                        extraClass={'mb-20'} >
                        Сохранить
                    </Button>
                    <h2 className={`text_type_main-small`}>
                        Вспомнили пароль?
                        <Link
                            to={'/login'}
                            className={'pl-2'}
                            style={{ textDecoration: 'none', color: '#4C4CFF' }}>
                            Войти
                        </Link></h2>
                </Form>
            </main>
        )
    }
    return (<h2>Доступ к странице закрыт</h2>)
}

export default ResetPasswordPage;