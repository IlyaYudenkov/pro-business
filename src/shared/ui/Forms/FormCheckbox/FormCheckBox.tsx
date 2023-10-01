import { FC } from 'react';
import cls from './FormCheckBox.module.scss';
import { Field, useField } from 'formik';

interface FormCheckBoxProps {
  type: string,
  name: string,
  label: string
}

export const FormCheckBox: FC<FormCheckBoxProps> = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props });
  
  return (
    <div className={cls.form__checkbox}>
      <label htmlFor='checkboxprivacy'>
        <Field id="checkboxprivacy" className={cls.checkbox__input} {...field} {...props} />
        <span className={meta.error && meta.touched ? cls.checkbox__fakeError : cls.checkbox__fake}></span>
        <span className={meta.error && meta.touched ? cls.checkbox__textError : cls.checkbox__text}>{label}</span>
      </label>
      {meta.error && meta.touched ? <p>{meta.error}</p> : ''}
    </div>
  );
}