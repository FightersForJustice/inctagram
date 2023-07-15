export type ProfileData = {
  id: number
  userName: string
  firstName: string
  lastName: string
  city: string
  dateOfBirth: string
  aboutMe: string
  avatars: userAvatar[]
}

//create generic for UpdateProfileData
export type UpdateProfileData = {
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
