interface ImageType {
  url: string
  width: number
  height: number
  fileSize: number
  uploadId: string
}

interface Item {
  id: number
  description: string
  location: string
  images: ImageType[]
  createdAt: string
  updatedAt: string
}

export interface PostsAllType {
  totalCount: number
  pageSize: number
  items: Item[]
}
export interface HomeResponseType {
  postsAll: PostsAllType
}
