import styles from './ProfilePage.module.css'
import ProfileNavigation from '../../components/ProfileNavigation/ProfileNavigation'
import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Form from '../../components/Form/Form'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../../services/auth/actions/actions'
import { getUserApi, userApi, getUserRefresh, fetchWithRefresh, burgerApiConfig } from '../../utils/burger-api'
import { ButtonsProfile } from '../../components/ButtonsProfile/ButtonsProfile'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { checkAutoLogin } from '../../services/auth/actions/actions'
import { useForm } from '../../hooks/useForm'


const ProfilePage = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { number } = useParams()
    const [isEditLogin, setEditLogin] = useState(false)
    const [isEditEmail, setEditEmail] = useState(false)
    const [isEditPassword, setEditPassword] = useState(false)
    const user = useSelector(store => store.auth.user)
    //const userOrders = useSelector(store => store.userOrders.userOrders)


    const [form, setValue] = useState({ name: '', email: '', password: '' })
    const { name, email, password } = form

    useEffect(() => {
        setValue({ ...form, name: user.name, email: user.email })


    }, [isEditEmail, isEditLogin, isEditPassword])

    const onChange = e => {
        setValue((prevForm) => ({
            ...prevForm,
            [e.target.name]: e.target.value
        }))
    }

    const handleClickButtonSave = () => {
        setEditLogin(false)
        setEditEmail(false)
        setEditPassword(false)
    }

    const handleClickEdit = (e) => {
        const elementName = e.target.closest('.input').querySelector('.input__textfield').getAttribute('name');
        switch (elementName) {
            case 'name':
                setEditLogin((prevState) => !prevState);
                break;
            case 'email':
                setEditEmail((prevState) => !prevState);
                break;
            case 'password':
                setEditPassword((prevState) => !prevState);
                break;
            default:
                break;
        }
    }
    if (isEditEmail) {
        return <h2>Загрузка </h2>
    }
    if (location.pathname.includes(`/profile/order/`)) {
        return (<div className={`${styles.outlet}`}>
        <Outlet />
    </div>)
    }

    return (
        <main className={`${styles.ProfilePage} pt-30`}>
            <ProfileNavigation />
            {location.pathname === '/profile' && <Form >
                {isEditLogin ? (<Input
                    onChange={onChange}
                    value={name}
                    placeholder='Имя'
                    name={'name'}
                    isicon='false'
                    extraClass='mb-6'
                    icon="CloseIcon"
                    onIconClick={(e) => handleClickEdit(e)}

                />) : (<Input
                    onChange={onChange}
                    value={name}
                    placeholder='Имя'
                    name={'name'}
                    isicon='true'
                    extraClass='mb-6'
                    icon="EditIcon"
                    onIconClick={(e) => handleClickEdit(e)}
                    id='name'
                />)}

                {isEditEmail ? (<EmailInput
                    onChange={onChange}
                    value={email}
                    name={'email'}
                    isicon='false'
                    icon="CloseIcon"
                    extraClass='mb-6'
                    onIconClick={(e) => handleClickEdit(e)}
                />) : (<EmailInput
                    onChange={onChange}
                    value={email}
                    name={'email'}
                    isicon='false'
                    icon="EditIcon"
                    extraClass='mb-6'
                    onIconClick={(e) => handleClickEdit(e)}
                />)}
                {isEditPassword ? (<PasswordInput
                    onChange={onChange}
                    value={password}
                    name={'password'}
                    extraClass='mb-6'
                    icon="CloseIcon"
                    onIconClick={(e) => handleClickEdit(e)} />)
                    : (<PasswordInput
                        onChange={onChange}
                        value={password}
                        name={'password'}
                        extraClass='mb-6'
                        icon="EditIcon"
                        onIconClick={(e) => handleClickEdit(e)} />)}
                {(isEditLogin || isEditEmail || isEditPassword) ? <ButtonsProfile onClickSave={handleClickButtonSave} data={form} /> : null}
            </Form>}
            {location.pathname === '/profile/order' &&  <Outlet />}
        </main>

    )
}

export default ProfilePage