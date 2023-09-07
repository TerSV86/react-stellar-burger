import styles from './OrderDetails.module.css'
import doneImage from '../../images/done.svg'
import { CheckMarkIcon, CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useContext } from 'react';
import { SelectIngredient } from '../../services/appContext';
const OrderDetails = () => {
  const{order} = useContext(SelectIngredient);
  
    return (
        <div className={`${styles.OrderDetails} pt-4`}>
            
            <p className="text text_type_digits-large pb-8">{order}</p>
            <p className="text text_type_main-medium pb-15">
              идентификатор заказа
            </p>
            <img src={doneImage} alt='Логотпип: галочка' /> 
            <p className="text text_type_main-default pt-15 pb-2">
              Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-default pb-30">
              Дождитесь готовности на орбитальной станции
            </p>
        </div>
    )
}

export default OrderDetails