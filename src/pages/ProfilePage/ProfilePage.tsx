import styles from './ProfilePage.module.css'
import ProfileNavigation from '../../components/ProfileNavigation/ProfileNavigation'
import { EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import Form from '../../components/Form/Form'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from '../../hooks/hooks'
import { ButtonsProfile } from '../../components/ButtonsProfile/ButtonsProfile'
import { Outlet, useLocation } from 'react-router-dom'

export type TValue = {
    name?: string;
    email?: string;
    password?: string
}

const ProfilePage = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const [isEditLogin, setEditLogin] = useState(false)
    const [isEditEmail, setEditEmail] = useState(false)
    const [isEditPassword, setEditPassword] = useState(false)
    const user = useSelector(store => store.auth.user)
    const [form, setValue] = useState<TValue>({ name: user?.name, email: user?.email, password: '' })
    const { name, email, password } = form

    useEffect(() => {
        if (user) {
            setValue({ ...form, name: user.name, email: user.email })
        };
    }, [isEditEmail, isEditLogin, isEditPassword])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const handleFocus = () => {
        const activeElement = document.activeElement;
        const nameActiveElement = activeElement?.getAttribute('name');
        switch (nameActiveElement) {
            case 'name':
                setEditLogin(true);
                break;
            case 'email':
                setEditEmail(true);
                break;
            case 'password':
                setEditPassword(true);
                break;
            default:
                break;
        }
        activeElement?.addEventListener('blur', () => {
            console.log('noFocus');
            switch (nameActiveElement) {
                case 'name':
                    setEditLogin(false);
                    break;
                case 'email':
                    setEditEmail(false);
                    break;
                case 'password':
                    setEditPassword(false);
                    break;
                default:
                    break;
            }
        })
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
                {<Input
                    onChange={onChange}
                    value={(name) ? name : ''}
                    placeholder='Имя'
                    name={'name'}
                    extraClass='mb-6'
                    onFocus={() => handleFocus()}
                    id='name'
                />}
                {<EmailInput
                    onChange={onChange}
                    value={(email) ? email : ''}
                    name={'email'}
                    isIcon={false}
                    extraClass='mb-6'
                    onFocus={() => handleFocus()}
                />}
                {<PasswordInput
                    onChange={onChange}
                    value={(password) ? password : ''}
                    name={'password'}
                    extraClass='mb-6'
                />}
                {(isEditLogin || isEditEmail || isEditPassword)
                    ? <ButtonsProfile onClickSave={handleClickButtonSave} data={form} />
                    : null}
            </Form>}
            {location.pathname === '/profile/order' && <Outlet />}
        </main>

    )
}

export default ProfilePage
