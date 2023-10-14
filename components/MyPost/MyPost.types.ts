export interface Image {
  url: string
  width: number
  height: number
  fileSize: number
  uploadId: string
}

export interface MyPost {
  id: number
  description: string
  location: string
  images: Image[]
  createdAt: string
  updatedAt: string
  ownerId: number
}
