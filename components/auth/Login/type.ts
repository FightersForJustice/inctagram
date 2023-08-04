import { Dispatch, SetStateAction } from "react"
import { SubmitHandler, UseFormTrigger } from "react-hook-form"

export type FormValuesType = {
  email: string
  password: string
}
export type PasswordFormFieldProps = {
  register: any
  errors: any
  serverError: string
  setServerError: Dispatch<SetStateAction<string>>
  trigger: UseFormTrigger<FormValuesType>
}
export type EmailFormFieldProps = {
  register: any
  errors: any
  setServerError: Dispatch<SetStateAction<string>>
  trigger: UseFormTrigger<FormValuesType>
}
export type LoginFormProps = {
  onSubmit: SubmitHandler<FormValuesType>
  isLoading: boolean
  serverError: string
  setServerError: Dispatch<SetStateAction<string>>
}
export type LoginParamsData = {
  email: string
  password: string
}