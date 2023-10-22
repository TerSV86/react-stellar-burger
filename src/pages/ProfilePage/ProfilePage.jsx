import styles from './ProfilePage.module.css'
import ProfileNavigation from '../../components/ProfileNavigation/ProfileNavigation'
import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Form from '../../components/Form/Form'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../../services/auth/actions/actions'
import { getUserApi, userApi } from '../../utils/burger-api'
import { ButtonsProfile } from '../../components/ButtonsProfile/ButtonsProfile'


const ProfilePage = () => {
    const dispatch = useDispatch()
    /*   const userData = useSelector(store => store.auth.user) */

    const [isEditLogin, setEditLogin] = useState(false)
    const [isEditEmail, setEditEmail] = useState(false)
    const [isEditPassword, setEditPassword] = useState(false)

    const [form, setValue] = useState({ name: '', email: '', password: '' })
    const { name, email, password } = form

    useEffect(() => {        
        getUserApi()
            .then((res) => {
                console.log(res.user.name);
                setValue({ ...form, name: res.user.name, email: res.user.email })                
            })

    }, [])

    const onChange = e => {
        console.log(e.target.name, e.target.value);
        setValue({ ...form, [e.target.name]: e.target.value })
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

console.log(form);
    return (
        <main className={`${styles.ProfilePage} pt-30`}>
            <ProfileNavigation />
            <Form >
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
                {(isEditLogin || isEditEmail || isEditPassword) ? <ButtonsProfile data={form}/> : null}
            </Form>
        </main>
    )
}

export default ProfilePage