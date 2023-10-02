import React, { useState, useRef, useEffect } from 'react'
import AvatarEditor from 'react-avatar-editor'

interface PostZoomingProps {
  initialImageSrc: string | File
  onSave: (editedImageSrc: string) => void
}

const PostZooming: React.FC<PostZoomingProps> = ({ initialImageSrc, onSave }) => {
  const [zoom, setZoom] = useState(1)
  const [isZoomSliderOpen, setIsZoomSliderOpen] = useState(false)
  const editorRef = useRef<AvatarEditor | null>(null)
  const [editorSize, setEditorSize] = useState({ width: 490, height: 503 })

  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newZoom = parseFloat(e.target.value)
    setZoom(newZoom)
  }

  useEffect(() => {
    // Обновляем размеры редактора при изменении масштаба
    const editor = editorRef.current
    if (editor) {
      const scaledWidth = 250
      const scaledHeight = 250
      setEditorSize({ width: scaledWidth, height: scaledHeight })
    }
  }, [zoom])

  useEffect(() => {
    // Устанавливаем размеры редактора после загрузки изображения
    const editor = editorRef.current
    if (editor) {
      const image = new Image()
      image.src = initialImageSrc.toString()

      image.onload = () => {
        const imageWidth = image.width
        const imageHeight = image.height
        const maxEditorSize = Math.min(imageWidth, imageHeight)
        setEditorSize({ width: maxEditorSize, height: maxEditorSize })
      }
    }
  }, [initialImageSrc])

  const toggleZoomSlider = () => {
    setIsZoomSliderOpen((prev) => !prev)
  }

  const handleCropImage = () => {
    const editor = editorRef.current
    if (editor) {
      // Получите отредактированное изображение
      const canvas = editor.getImageScaledToCanvas()
      const editedImageSrc = canvas.toDataURL() // Преобразуйте в формат data URL

      // Вызовите onSave с отредактированным изображением
      onSave(editedImageSrc)
    }
  }

  return (
    <div>
      <div>
        <button onClick={toggleZoomSlider}>Toggle Zoom Slider</button>
      </div>

      {isZoomSliderOpen && (
        <div>
          <label>Zoom:</label>
          <input type="range" min="1" max="3" step="0.01" value={zoom} onChange={handleZoomChange} />
        </div>
      )}

      <AvatarEditor
        ref={editorRef}
        image={initialImageSrc}
        width={editorSize.width}
        height={editorSize.height}
        border={5}
        color={[255, 255, 255, 0.6]}
        scale={zoom}
      />

      <div>
        <button onClick={handleCropImage}>Crop Image</button>
      </div>
    </div>
  )
}

export default PostZooming
