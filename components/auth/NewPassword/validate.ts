import { Message, Validate, ValidationRule } from "react-hook-form"

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
      message: 'Password field is empty',
    },
    maxLength: {
      value: 20,
      message: 'Password must be shorter than or equal to 20 characters',
    },
    minLength: {
      value: 6,
      message: 'Password must be longer than or equal to 6 characters',
    },
    pattern: {
      value: /^\S+$/,
      message: 'Password must not contain space symbols'
    },
    validate: {
      value: ((value:string, formValue:boolean) => value === password),
    },
  }
}