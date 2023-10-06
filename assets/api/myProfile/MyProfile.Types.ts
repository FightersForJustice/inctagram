export type MyProfileImageType = {
  url: string
  width: number
  height: number
  fileSize: number
  uploadId: string
}

export type MyProfileItemType = {
  id: number
  description: string
  location: string
  images: MyProfileImageType[]
  createdAt: string
  updatedAt: string
}

export type MyProfileDataType = {
  totalCount: number
  pageSize: number
  items: MyProfileItemType[]
}
export type PostLastType = {
  postLast: number
}
