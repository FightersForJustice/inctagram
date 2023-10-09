import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export const handlerImageUpload = (event: ChangeEvent<HTMLInputElement>, setImage: Dispatch<SetStateAction<string>>) => {
  const file = event.target.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ratio = img.width / img.height
        const maxWidth = 900
        canvas.width = maxWidth
        canvas.height = maxWidth / ratio
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.drawImage(img, 0, 0, maxWidth, maxWidth / ratio)
          setImage(canvas.toDataURL('image/jpeg'))
        }
      }
      img.src = reader.result as string
    }
    reader.readAsDataURL(file)
  }
}
