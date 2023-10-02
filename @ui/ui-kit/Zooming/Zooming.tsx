import React, { useState, useRef, useEffect } from 'react'
import AvatarEditor from 'react-avatar-editor'
import style from './Zooming.module.scss'
import Maximize from '@/public/icons/maximize.svg'
import MaximizeOutline from '@/public/icons/maximizeOutline.svg'
import ExpandOutline from '@/public/icons/expandOutline.svg'

interface PostZoomingProps {
  initialImageSrc: string | File
  onSave: (editedImageSrc: string) => void
}

const PostZooming: React.FC<PostZoomingProps> = ({ initialImageSrc, onSave }) => {
  const [zoom, setZoom] = useState(1)
  const [isZoomSliderOpen, setIsZoomSliderOpen] = useState(false)
  const editorRef = useRef<AvatarEditor | null>(null)
  const [editorSize, setEditorSize] = useState({ width: 250, height: 250 })

  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newZoom = parseFloat(e.target.value)
    setZoom(newZoom)
  }

  useEffect(() => {
    const editor = editorRef.current
    if (editor) {
      const image = new Image()
      image.src = initialImageSrc.toString()

      image.onload = () => {
        const imageWidth = image.width
        const maxEditorSize = Math.min(imageWidth, image.height)
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
      const canvas = editor.getImageScaledToCanvas()
      const editedImageSrc = canvas.toDataURL()

      onSave(editedImageSrc)
    }
  }

  return (
    <div className={style.editorContainer}>
      <div className={style.buttonContainer}>
        <button className={style.toggleButton}>
          <div className={style.icon}>
            <ExpandOutline />
          </div>
        </button>
        <button className={style.toggleButton} onClick={toggleZoomSlider}>
          <div className={style.icon}>{isZoomSliderOpen ? <Maximize /> : <MaximizeOutline />}</div>
        </button>
      </div>

      {isZoomSliderOpen && (
        <div className={style.sliderContainer}>
          <input type="range" min="1" max="3" step="0.01" value={zoom} onChange={handleZoomChange} />
        </div>
      )}

      <AvatarEditor
        ref={editorRef}
        image={initialImageSrc}
        width={editorSize.width}
        height={editorSize.height}
        border={0}
        color={[255, 255, 255, 0.6]}
        scale={zoom}
        className={style.customAvatarEditor}
      />

      {/* <div>
        <button onClick={handleCropImage}>Crop Image</button>
      </div> */}
    </div>
  )
}

export default PostZooming
