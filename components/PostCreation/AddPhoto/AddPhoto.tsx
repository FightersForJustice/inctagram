import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import style from './AddPhoto.module.scss'
import buttonStyle from '@/@ui/ui-kit/Button/Button.module.scss'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { setPhoto } from '@/core/slices/postCreationSlice'
import { handlerImageUpload } from '../handlerImageUpload'

type AddPhotoType = {
  setModuleNum: Dispatch<SetStateAction<number>>
}

const AddPhoto: FC<AddPhotoType> = ({ setModuleNum }) => {
  const dispatch = useDispatch()
  const [image, setImage] = useState<string>('')
  const { t } = useTranslation()
  useEffect(() => {
    if (!image) return
    dispatch(setPhoto({ photo: image }))
    setModuleNum(1)
  }, [image])

  return (
    <div className={style.container}>
      <div className={style.addPhotoContainer}>
        <Image width={48} height={48} src="/../icons/image-outline.svg" alt="img" />
      </div>
      <label
        htmlFor="custom-upload"
        className={classNames(buttonStyle.button, buttonStyle.buttonAutoHeight)}
        style={{ width: '222px', marginTop: '60px' }}
      >
        {t('add_profile_photo.select_from_computer')}
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handlerImageUpload(e, setImage)}
        id="custom-upload"
        style={{ display: 'none' }}
      />
    </div>
  )
}

export default AddPhoto
