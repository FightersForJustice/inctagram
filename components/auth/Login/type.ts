import { Dispatch, SetStateAction } from "react"
import { FieldErrors, SubmitHandler, UseFormRegister, UseFormTrigger } from "react-hook-form"

export type FormValuesTypeLogin = {
  email: string
  password: string
}
export type PasswordFormFieldProps = {
  register: UseFormRegister<FormValuesTypeLogin>
  errors: FieldErrors<FormValuesTypeLogin>
  serverError: string
  setServerError: Dispatch<SetStateAction<string>>
}
export type EmailFormFieldProps = {
  register: UseFormRegister<FormValuesTypeLogin>
  errors: FieldErrors<FormValuesTypeLogin>
  setServerError: Dispatch<SetStateAction<string>>
}
export type LoginFormProps = {
  onSubmit: SubmitHandler<FormValuesTypeLogin>
  isLoading: boolean
  serverError: string
  setServerError: Dispatch<SetStateAction<string>>
}
export type LoginParamsData = {
  email: string
  password: string
}