import React from 'react';
import * as Form from '@radix-ui/react-form';
import s from '../LoginForm.module.css'

type EmailFormFieldProps = {
    register: any;
    errors: any;
};

const EmailFormField: React.FC<EmailFormFieldProps> = ({ register, errors }) => {
    return (
        <Form.Field className={s.FormField} name="email">
            <div className={s.form_field_container}>
                {errors.email && errors.email.type === 'required' && (
                    <Form.Message className={s.FormMessage}>Please enter your email</Form.Message>
                )}
                {errors.email && errors.email.type === 'maxLength' && (
                    <Form.Message className={s.FormMessage}>Email is too long</Form.Message>
                )}
                {errors.email && errors.email.type === 'pattern' && (
                    <Form.Message className={s.FormMessage}>{errors.email.message}</Form.Message>
                )}
            </div>
            <Form.Control asChild>
                <input
                    className={s.Input}
                    defaultValue="Email"
                    type="email"
                    id="email"
                    {...register('email', {
                        required: true,
                        maxLength: 40,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                        },
                    })}
                />
            </Form.Control>
        </Form.Field>
    );
};

export default EmailFormField;
