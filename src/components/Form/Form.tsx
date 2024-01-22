import { useDispatch } from 'react-redux';
import { formPropType } from '../../utils/prop-types';
import styles from './Form.module.css';
import { login } from '../../services/auth/actions/actions';
import { ReactNode } from 'react';

type Prop = {
    title: string;
    children: ReactNode;
    onSubmit: ()=> void;
}

const Form = ({ title, children , onSubmit }: Prop) => {
   
    return (
        <form className={`${styles.Form} pt-2`} onSubmit={onSubmit}>
            {title ? (<h1 className={`text_type_main-medium pb-8`}>{title}</h1>) : null}
            {children}
        </form>
    )
}

Form.propTypes = formPropType;

export default Form;