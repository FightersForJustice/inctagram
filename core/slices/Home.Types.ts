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
  location: string
  images: HomeImageType[]
  createdAt: string
  updatedAt: string
}
export type HomeTypeRespons = {
  totalCount: number
  pageSize: number
  items: HomePostType[]
}
export interface HomeType {
  totalCount: number
  pageSize: number
  items: HomePostType[]
  id: number
}
export type HomeTypeItems = {
  items: HomePostType[]
}
export interface SmallestIdType {
  id: number
}
