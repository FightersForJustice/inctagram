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
export type ServerLoginResponse = {
  accessToken: string
}
export type ServerErrorResponse = {
  statusCode: StatusType
  messages: ResponseMessage[]
  error: string
}
export type ResponseMessage = {
  message: string
  field: string
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
