type MyProfileImageType = {
  url: string
  width: number
  height: number
  fileSize: number
  uploadId: string
}

type MyProfileItemType = {
  id: number
  description: string
  location: string
  images: MyProfileImageType[]
  createdAt: string
  updatedAt: string
}

type MyProfileDataType = {
  totalCount: number
  pageSize: number
  items: MyProfileItemType[]
}
