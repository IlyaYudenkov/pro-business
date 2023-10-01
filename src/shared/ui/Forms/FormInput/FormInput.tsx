'use client'
import { ChangeEvent, FC, FormEvent, useCallback, useRef } from 'react';
import cls from './FormInput.module.scss';
import { Field, FieldHookConfig, FieldProps, FormikProps, useField, useFormikContext } from 'formik'
import _debounce from 'lodash.debounce';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';

interface InputProps {
  isTextarea?: boolean;
}

export const FormInput: FC<InputProps & FieldHookConfig<string>> = ({isTextarea = false, ...props}) => {
  const {setFieldValue, validateField, setFieldTouched} = useFormikContext();

  const debounceFn = useDebounce(() => {
    validateField(props.name);
    setFieldTouched(props.name, true);
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
    debounceFn();
  };
  
  return (
    <div className={cls.formInput}>
      <Field  {...props}>
        {({ field, meta }: FieldProps) => 
          (
            <>
              {!isTextarea ? <input 
                {...field}
                type="text"
                placeholder={props.placeholder}
                onChange={handleChange}
                className={classNames('', {[cls.error]: !!(meta.error && meta.touched), [cls.valid]: !!(!meta.error && meta.touched)})}
              /> : <textarea 
                rows={5}
                {...field} 
                placeholder={props.placeholder}
                onChange={handleChange}
                className={classNames('', {[cls.error]: !!(meta.error && meta.touched)})}></textarea>}
              {meta.error && meta.touched ? <p className={cls.errorMessage}>{meta.error}</p> : ''}
            </>
          )}
      </Field>
      
    </div>

  );
}