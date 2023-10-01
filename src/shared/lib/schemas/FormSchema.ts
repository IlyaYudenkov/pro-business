import * as Yup from 'yup';

const phoneRegExp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;


export const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Слишком короткое имя')
    .max(50, 'Слишком длинное имя')
    .required('Обязательное поле'),
  phone: Yup.string()
    .required('Обязательное поле')
    .matches(phoneRegExp, 'Неверный номер телефона'),
  email: Yup.string()
    .email('Введите верный email')
    .required('Обязательное поле'),
  comment: Yup.string()
    .min(5, 'Слишком короткий комментарий')
    .max(100, 'Превышена допустимая длина комментария'),
  checkbox: Yup.boolean()
    .required()
    .oneOf([true], ' ')
});


