import styles from './PasswordRecoveryPage.module.css'
import Form from '../../components/Form/Form'
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getMassegeForRecoveryPassword } from '../../utils/burger-api'
import { useForm } from '../../hooks/useForm'

type TForm = {
    password: string;
}


const PasswordRecoveryPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { values, handleChange, setValues } = useForm<TForm>({ password: '' })
    const { password } = values

    const handlerClickButtonRecovery = () => {
        getMassegeForRecoveryPassword(password).then(res => console.log(res)); //Как это использовать?
        navigate('/reset-password', { replace: true, state: `${location.pathname}` })
    }

    if (location.state && location.state.pathname === '/login') {
        return (
            <main className={styles.PasswordRecoveryPage}>
                <Form title={'Восстановление пароля'}>
                    <EmailInput
                        onChange={handleChange}
                        value={values.password}
                        name={'password'}
                        isIcon={false}
                        extraClass='mb-6'
                    />
                    <Button onClick={handlerClickButtonRecovery} htmlType="button" type="primary" size="medium" extraClass={'mb-20'}>
                        Восстановить
                    </Button>
                    <h2 className={`text_type_main-small pb-4`}> Вспомнил пароль? <Link to={'/login'} className={'pl-2'} style={{ textDecoration: 'none', color: '#4C4CFF' }}>Войти</Link></h2>
                </Form>
            </main>
        )
    }
    return (<h2>Доступ к странице закрыт</h2>)
}

export default PasswordRecoveryPage;