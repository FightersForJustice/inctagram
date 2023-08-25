import { Message, Validate, ValidationRule } from 'react-hook-form'

export type RegisterOptions = Partial<{
  required: Message | ValidationRule<boolean>
  min: ValidationRule<number | string>
  max: ValidationRule<number | string>
  maxLength: ValidationRule<number | string>
  minLength: ValidationRule<number | string>
  pattern: ValidationRule<RegExp>
  validate: Validate<string, boolean> | Record<string, Validate<string, boolean>>
}>

export const ValidatePassword: Function = (password: string): RegisterOptions => {
  return {
    required: {
      value: true,
      message: 'Password_field_is_empty',
    },
    maxLength: {
      value: 20,
      message: 'Password_must_be_shorter',
    },
    minLength: {
      value: 6,
      message: 'Password_must_be_longer',
    },
    pattern: {
      value: /^\S+$/,
      message: 'Password_not_contain_space',
    },
    validate: {
      value: (value: string, formValue: boolean) => value === password,
    },
  }
}
