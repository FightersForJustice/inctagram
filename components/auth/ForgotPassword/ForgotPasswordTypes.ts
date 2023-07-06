import { RefObject } from "react"
import ReCAPTCHA from "react-google-recaptcha"
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
  recaptchaRef: RefObject<ReCAPTCHA>
  handleSubmit: UseFormHandleSubmit<IFormInput, undefined>
  register: UseFormRegister<IFormInput>
  onSubmit: SubmitHandler<IFormInput>
  onChange: (value: any) => void
}

export interface IForgotPasswordInputProps {
  errors: FieldErrors<IFormInput>
  serverError: string
  register: UseFormRegister<IFormInput>
}