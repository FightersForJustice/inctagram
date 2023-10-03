export interface HomeImageType {
  url: string
  width: number
  height: number
  fileSize: number
  uploadId: string
}

export interface HomePostType {
  id: number
  description: string
  location: null | string
  images: HomeImageType[]
  createdAt: string
  updatedAt: string
}

export interface HomeType {
  totalCount: number
  pageSize: number
  items: HomePostType[]
}
