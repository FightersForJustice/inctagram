export type UserProfile = {
  id: number
  userName: string
  firstName: string
  lastName: string
  city: string
  dateOfBirth: string
  aboutMe: string
  avatars: userAvatar[]
}

//create generic for UpdateuserProfile
export type UpdateUserProfile = {
  userName?: string
  firstName?: string
  lastName?: string
  city?: string
  dateOfBirth?: string
  aboutMe?: string
}

export type userAvatar = {
  url: string
  width: number
  height: number
  fileSize: number
}
type ResponseAvatars = {
  url: string
  width: number
  height: number
  fileSize: number
}
export type ServerAvatarResponse = {
  messages: ResponseAvatars[]
}
