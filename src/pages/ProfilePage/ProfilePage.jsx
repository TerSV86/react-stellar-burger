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


const ProfilePage = () => {
    console.log('ProfilePage');
    const dispatch = useDispatch()
    /*   const userData = useSelector(store => store.auth.user) */
    const location = useLocation()
    const { number } = useParams()
    console.log(number, location);

    const [isEditLogin, setEditLogin] = useState(false)
    const [isEditEmail, setEditEmail] = useState(false)
    const [isEditPassword, setEditPassword] = useState(false)

    const [form, setValue] = useState({})
    console.log(form);
    const { name, email, password } = form

    useEffect(() => {
        getUserApi()
        /* dispatch(getUserRefresh()) */
        /* fetchWithRefresh(`${burgerApiConfig.baseUrl}auth/user`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.accessToken // 'Bearer ' + getCookie('token') 
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        }) */
            .then((res) => {
                console.log('profile ',res.user.name);
                setValue({ ...form, name: res.user.name, email: res.user.email })

            })

    }, [isEditEmail, isEditLogin, isEditPassword])

    const onChange = e => {
        console.log(e.target.name, e.target.value);
        setValue((prevForm) => ({
            ...prevForm,
            [e.target.name]: e.target.value
        }))
    }

    const handleClickButtonSave = () => {
        console.log('handleClickSave-ProfilePage');
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
    console.log('location ', location.pathname);
    if (location.pathname.includes(`/profile/order/`)) {
        console.log('render', <Outlet/>);
        return (<Outlet />)
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
                    isIcon={false}
                    extraClass='mb-6'
                    icon="CloseIcon"
                    onIconClick={(e) => handleClickEdit(e)}

                />) : (<Input
                    onChange={onChange}
                    value={name}
                    placeholder='Имя'
                    name={'name'}
                    isIcon={true}
                    extraClass='mb-6'
                    icon="EditIcon"
                    onIconClick={(e) => handleClickEdit(e)}
                    id='name'
                />)}

                {isEditEmail ? (<EmailInput
                    onChange={onChange}
                    value={email}
                    name={'email'}
                    isIcon={false}
                    icon="CloseIcon"
                    extraClass='mb-6'
                    onIconClick={(e) => handleClickEdit(e)}
                />) : (<EmailInput
                    onChange={onChange}
                    value={email}
                    name={'email'}
                    isIcon={false}
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
            {console.log('jkjlkj') || location.pathname === '/profile/order' && <Outlet />}
        </main>

    )
}

export default ProfilePage