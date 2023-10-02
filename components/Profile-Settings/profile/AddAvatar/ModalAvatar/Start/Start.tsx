import { Button } from '@/@ui/ui-kit/Button/Button'
import style from './start.module.scss'
import { ChangeEvent, Dispatch, SetStateAction, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { StatesComponentType } from '../../type'
import { calculateNewSize } from '@/utils/Image/calculateNewSize'

export interface Props {
  setUploadedImage: Dispatch<SetStateAction<string>>
  setStatesComponent: (modalStates: StatesComponentType) => void
}

export const StartImg: React.FC<Props> = ({ setUploadedImage, setStatesComponent }) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`add_profile_photo.${key}`)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlerImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        const img = new Image()
        img.onload = () => {
          const { width, height } = calculateNewSize(img.width, img.height, 500)
          const canvas = document.createElement('canvas')
          canvas.width = width
          canvas.height = height
          const ctx = canvas.getContext('2d')
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height)
            const resizedDataUrl = canvas.toDataURL('image/jpeg')
            setUploadedImage(resizedDataUrl)
          }
        }
        img.src = reader.result as string
      }
      reader.readAsDataURL(file)
      setStatesComponent('crop')
    }
  }

  const handlerButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <>
      <label className={style.form}>
        <input ref={fileInputRef} className={style.input} type="file" name="file" onChange={handlerImageUpload} />
        <div className={style.img}>
          <img src="/../icons/image-outline.svg" alt="img" />
        </div>
        <div className={style.button}>
          <Button onClick={handlerButtonClick} text={translate('select_from_computer')}></Button>
        </div>
      </label>
    </>
  )
}
