import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from "react-hook-form"

export interface IFormInput {
  email: string
  recaptcha: string
}

export interface IForgotPasswordProps {
  siteKey: string
  isLoading: boolean
  errors: FieldErrors<IFormInput>
  serverError: string
  handleSubmit: UseFormHandleSubmit<IFormInput, undefined>
  register: UseFormRegister<IFormInput>
  onSubmit: SubmitHandler<IFormInput>
  onChange: (value: any) => void
}
