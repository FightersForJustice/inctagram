import React from 'react';
import * as Form from '@radix-ui/react-form';
import s from '../LoginForm.module.css'
import { PasswordInput } from '@/components/common/Inputs/Inputs';

type PasswordFormFieldProps = {
    register: any;
    errors: any;
};

const PasswordFormField: React.FC<PasswordFormFieldProps> = ({ register, errors }) => {
    return (
        <Form.Field className={s.FormField} name="password">
            <div className={s.form_field_container}>
                {errors.password && errors.password.type === 'minLength' && (
                    <Form.Message className={s.FormMessage}>
                        Password must be at least 8 characters long
                    </Form.Message>
                )}
                {errors.password && errors.password.type === 'required' && (
                    <Form.Message className={s.FormMessage}>Please enter your password</Form.Message>
                )}
            </div>
            <Form.Control asChild>
                <PasswordInput
                    defaultValue="Email"
                    id="password"
                    label='Password'
                    validation={{...register('password', { required: true, minLength: 8 })}}
                />
            </Form.Control>
        </Form.Field>
    );
};

export default PasswordFormField;
