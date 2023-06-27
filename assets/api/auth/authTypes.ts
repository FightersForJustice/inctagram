//auth params
export type LoginParamsData = {
  email: string
  password: string
}
export type RegisterParamsData = LoginParamsData & {
  userName: string
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
  statusCode: number
  messages: ResponseMessage[]
  error: string
}
export type ResponseMessage = {
  message: string
  field: string
}
