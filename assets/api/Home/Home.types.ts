export type HomeImageType = {
  url: string
  width: number
  height: number
  fileSize: number
  uploadId: string
}

export type HomeItemType = {
  id: number
  description: string
  location: string
  images: HomeImageType[]
  createdAt: string
  updatedAt: string
}

export type HomeType = {
  totalCount: number
  pageSize: number
  items: HomeItemType[]
}
export type HomeResponseType = {
  postsAll: HomeType
}
