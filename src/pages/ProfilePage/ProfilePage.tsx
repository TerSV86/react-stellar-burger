import styles from './ProfilePage.module.css'
import ProfileNavigation from '../../components/ProfileNavigation/ProfileNavigation'
import { EmailInput, PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Form from '../../components/Form/Form'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from '../../hooks/hooks'
import { getUser } from '../../services/auth/actions/actions'
import { getUserApi, userApi, burgerApiConfig } from '../../utils/burger-api'
import { ButtonsProfile } from '../../components/ButtonsProfile/ButtonsProfile'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { checkAutoLogin } from '../../services/auth/actions/actions'
import { useForm } from '../../hooks/useForm'

export type TValue = {
    name?: string;
    email?: string;
    password?: string
}


const ProfilePage = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { number } = useParams()
    const [isEditLogin, setEditLogin] = useState(false)
    const [isEditEmail, setEditEmail] = useState(false)
    const [isEditPassword, setEditPassword] = useState(false)
    const user = useSelector(store => store.auth.user)
    //const userOrders = useSelector(store => store.userOrders.userOrders)


    const [form, setValue] = useState<TValue>({ name: user?.name, email: user?.email, password: '' })
    const { name, email, password } = form

    useEffect(() => {

        (user) ? setValue({ ...form, name: user.name, email: user.email }) : null;


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
        console.log('onFocus');

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
    const handleClickEdit = (e: /* React.MouseEvent<HTMLDivElement, MouseEvent> | React.ChangeEvent<HTMLInputElement> | */  React.FocusEvent<HTMLInputElement, Element> | undefined) => {
        /*  console.log('focus', e?.target.getAttribute('name'));
         console.log('id', document.activeElement?.getAttribute('name'))
 
         const targetElement = e.target as HTMLElement;
         const closestInput = targetElement.closest('.input');
         if (closestInput) {
             const inputTextField = closestInput.querySelector('.input__textfield');
             const elementName = inputTextField?.getAttribute('name');
 
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
                     console.log('switch');
 
                     setEditLogin((prevState) => prevState = false);
                     setEditEmail((prevState) => prevState = false);
                     setEditPassword((prevState) => prevState = false);
                     break;
             }
         } */
    }
    /* if (isEditEmail) {
        return <h2>Загрузка </h2>
    } */
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
                   /*  icon="EditIcon" */                    
                    onFocus={() => handleFocus()}
                    id='name'
                />}
                {<EmailInput
                    onChange={onChange}
                    value={(email) ? email : ''}
                    name={'email'}
                    isIcon={false}
                    /* icon="EditIcon" */
                    extraClass='mb-6'                    
                    onFocus={() => handleFocus()}
                />}
                {<PasswordInput
                    onChange={onChange}
                    value={(password) ? password : ''}
                    name={'password'}
                    extraClass='mb-6'
                   /*  icon="EditIcon" */
                />}
                {(isEditLogin || isEditEmail || isEditPassword) ? <ButtonsProfile onClickSave={handleClickButtonSave} data={form} /> : null}
            </Form>}
            {location.pathname === '/profile/order' && <Outlet />}
        </main>

    )
}

export default ProfilePage

{/* <main className={`${styles.ProfilePage} pt-30`}>
            <ProfileNavigation />
            {location.pathname === '/profile' && <Form >
                {isEditLogin ? (<Input
                    onChange={onChange}
                    value={(name) ? name : ''}
                    placeholder='Имя'
                    name={'name'}
                    isIcon={false}
                    extraClass='mb-6'
                    icon="CloseIcon"
                    onIconClick={(e) => handleClickEdit(e)}
                    onFocus={(e) => handleFocus(e)}
                />) : (<Input
                    onChange={onChange}
                    value={(name) ? name : ''}
                    placeholder='Имя'
                    name={'name'}
                    isIcon={true}
                    extraClass='mb-6'
                    icon="EditIcon"
                    onIconClick={(e) => handleClickEdit(e)}
                    onFocus={(e) => handleFocus(e)}
                    id='name'
                />)}

                {isEditEmail ? (<EmailInput
                    onChange={onChange}
                    value={(email) ? email : ''}
                    name={'email'}
                    isIcon={false}
                    icon="CloseIcon"
                    extraClass='mb-6'
                    onIconClick={(e) => handleClickEdit(e)}
                    onFocus={(e) => handleFocus(e)}
                />) : (<EmailInput
                    onChange={onChange}
                    value={(email) ? email : ''}
                    name={'email'}
                    isIcon={false}
                    icon="EditIcon"
                    extraClass='mb-6'
                    onIconClick={(e) => handleClickEdit(e)}
                    onFocus={(e) => handleFocus(e)}
                />)}
                {isEditPassword ? (<PasswordInput
                    onChange={onChange}
                    value={(password) ? password : ''}
                    name={'password'}
                    extraClass='mb-6'
                    icon="CloseIcon"
                    onIconClick={(e) => handleClickEdit(e)} />)
                    : (<PasswordInput
                        onChange={onChange}
                        value={(password) ? password : ''}
                        name={'password'}
                        extraClass='mb-6'
                        icon="EditIcon"
                        onIconClick={(e) => handleClickEdit(e)} />)}
                {(isEditLogin || isEditEmail || isEditPassword) ? <ButtonsProfile onClickSave={handleClickButtonSave} data={form} /> : null}
            </Form>}
            {location.pathname === '/profile/order' && <Outlet />}
        </main> */}