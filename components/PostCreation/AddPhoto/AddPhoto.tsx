import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react'
import style from './AddPhoto.module.scss'
import { Button } from '@/@ui/ui-kit/Button/Button'
import buttonStyle from '@/@ui/ui-kit/Button/Button.module.scss'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { setPhoto } from '@/core/slices/postCreationSlice'

type AddPhotoType = {
  setModuleNum: Dispatch<SetStateAction<number>>
}

const AddPhoto: FC<AddPhotoType> = ({ setModuleNum }) => {
  const dispatch = useDispatch()
  const [image, setImage] = useState<any | undefined>(undefined)
  const { t } = useTranslation()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]))
      dispatch(setPhoto({ photo: URL.createObjectURL(e.target.files[0]) }))
    }
  }

  return (
    <div className={style.container}>
      <div className={style.addPhotoContainer}>
        {image ? (
          <Image src={image} alt="" className={style.image} width={222} height={228} />
        ) : (
          <Image width={48} height={48} src="/../icons/image-outline.svg" alt="img" />
        )}
      </div>
      {!image ? (
        <>
          <label
            htmlFor="custom-upload"
            className={classNames(buttonStyle.button, buttonStyle.buttonAutoHeight)}
            style={{ width: '222px', marginTop: '60px' }}
          >
            {t('add_profile_photo.select_from_computer')}
          </label>

          <input type="file" accept="image/*" onChange={(e) => handleChange(e)} id="custom-upload" style={{ display: 'none' }} />
        </>
      ) : (
        <Button
          onClick={() => setModuleNum(1)}
          text={t('add_profile_photo.add_profile_photo')}
          style={{ width: '222px', marginTop: '60px' }}
          variation="AutoHeight"
        />
      )}
    </div>
  )
}

export default AddPhoto
