'use client'
import { FC, useState } from 'react';
import cls from './ContactForm.module.scss';
import { FormInput } from 'shared/ui/Forms/FormInput/FormInput';
import { Button } from 'shared/ui/Button/Button';
import { Formik, Form } from 'formik';
import { FormCheckBox } from 'shared/ui/Forms/FormCheckbox/FormCheckBox';
import { FormSchema } from 'shared/lib/schemas/FormSchema';
import { $host } from 'shared/config/http/host';

export interface FormValues {
    theme?: string,
    name: string,
    phone: string,
    email: string,
    comment?: string,
    checkbox: boolean
}

export const ContactForm:FC<{theme:string}> = ({theme}) => {
  const initialValues: FormValues = {theme: `${theme}`, name: '', phone: '', email: '', comment: '', checkbox: false}
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div id='contactForm'>
      <h1 className={cls.formTitle}>Заполните форму</h1>
      <Formik 
        initialValues={initialValues} 
        validationSchema={FormSchema}
        validateOnChange={false}
        onSubmit={(formData, actions ) => { 
          setIsLoading(true)
          const data = {theme: formData.theme, name: formData.name, phone: formData.phone, email: formData.email, comment: formData.comment, checkbox: true}
          $host.post<FormValues>('/api/zayavkis', {data}).then(r => r.data).then(() => setSuccessSubmit(true)).catch(error => alert(error)).finally(() => setIsLoading(false))
          actions.resetForm()
          setTimeout(() => setSuccessSubmit(false), 3000)
        }} >
          
        {() => (
          <Form method='post' className={cls.form}>
            
            <div className={cls.form__inputs}>

              <FormInput name='name' type='text' placeholder='Имя' />
              <FormInput name='phone' type='tel' placeholder='+7 (   )  -  -'/>
              <FormInput name='email' type='email' placeholder='Эл. почта'/>
              <FormInput name='comment' type='textarea' placeholder='Комментарий' isTextarea />
            </div>
            <FormCheckBox type='checkbox' name='checkbox' label='Соглашаюсь на обработку персональных данных'/>
            <Button disabled={isLoading} type='submit' variant='blue' isLoading={isLoading}>{successSubmit ? 'Отправлено!' : 'Отправить'}</Button>
          </Form>
        )}
      </Formik>
    </div> 
  );
}
