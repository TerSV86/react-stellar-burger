import { formPropType } from '../../utils/prop-types';
import styles from './Form.module.css';

const Form = ({ title, children }) => {
    return (
        <form className={`${styles.Form} pt-2`}>
            {title ? (<h1 className={`text_type_main-medium pb-8`}>{title}</h1>) : null}
            {children}
        </form>
    )
}

Form.propTypes = formPropType;

export default Form;