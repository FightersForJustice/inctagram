//auth params
export type LoginParamsData = {
  email: string
  password: string
}
export type RegisterParamsData = LoginParamsData & {
  userName: string
}
export type ForgotPasswordParamsData = {
  email: string
  recaptcha: string
}
export type NewPasswordParamsData = {
  newPassword: string
  recoveryCode: string
}


//server response
export type ServerMeResponse = {
  userId: number
  userName: string
  email: string
}
export type ServerSuccessResponse = {
  accessToken: string
}
export type ServerErrorResponse = {
  statusCode: 400 | 500
  messages: ResponseMessage[]
  error: string
}
export type ResponseMessage = {
  message: string
  field: string
}
