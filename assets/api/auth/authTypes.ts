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

export type recoveryCodeCheckParamsData = {
  recoveryCode: string
}

//server response
export type UserData = {
  userId: number
  userName: string
  email: string
}
export type ServerLoginResponse = {
  accessToken: string
}
export type ServerErrorResponse = {
  data: {
    statusCode: StatusType
    messages: ResponseMessage[]
    error: string
  }
  status: number
}
export type ResponseMessage = {
  message: string
  field: string
}
export type recoveryResponse = {
  email: string
}

const status: StatusType = {
  badReqest: 400,
  unauthorized: 401,
  manyRequests: 429,
}
type StatusType = {
  badReqest: number
  unauthorized: number
  manyRequests: number
}
