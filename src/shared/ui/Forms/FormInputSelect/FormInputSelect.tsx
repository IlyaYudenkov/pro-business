import { FC } from 'react';
import cls from './FormInputSelect.module.scss';
import SelectIcon from 'shared/assets/img/SelectIcon.svg'
import { Field, useField } from 'formik';

interface FormInputSelectProps {
  type: string,
  name: string
}

export const FormInputSelect: FC<FormInputSelectProps> = ({ type, name }) => {
  const [field, meta] = useField({ type, name });
  return (
    <div className={cls.inputs__select}>
      <Field defaultValue={''} as={type} name={name} required className={meta.error && meta.touched ? cls.error : ''}>
        <option disabled value='' hidden>Выберите ...</option>
        <option value='dsad'>dsad</option>
        <option value='dsadd'>dsadd</option>
      </Field>
      <div className={meta.error && meta.touched ? cls.errorIcon : cls.select__icon}>
        <SelectIcon />
      </div>
      {meta.error && meta.touched ? <p className={cls.errorMessage}>{meta.error}</p> : ''}
    </div>
  );
}