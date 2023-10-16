import { usePostCreationDataSelector } from '@/core/selectors/postCreationSelector'
import style from './Cropping.module.scss'
import Image from 'next/image'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import classNames from 'classnames'
import { setPhoto, deletePhoto } from '@/core/slices/postCreationSlice'
import { useDispatch } from 'react-redux'
import MyCarousel from '@/@ui/ui-kit/Carousel'
import { handlerImageUpload } from '../handlerImageUpload'

type CroppingType = {
  setModuleNum: Dispatch<SetStateAction<number>>
}

const Cropping: FC<CroppingType> = ({ setModuleNum }) => {
  const dispatch = useDispatch()
  const { photos } = usePostCreationDataSelector()
  const [isAddPhotosClosed, setIsAddPhotosClosed] = useState(true)
  const [image, setImage] = useState('')
  useEffect(() => {
    if (!image) return
    dispatch(setPhoto({ photo: image }))
  }, [image])

  useEffect(() => {
    if (photos.length === 0) setModuleNum(0)
  }, [photos])

  const photosLinks = photos.map((photoObj: any) => {
    return photoObj.photo
  })
  return (
    <div>
      <MyCarousel items={photosLinks} />
      <button
        className={classNames(style.button, { [style.buttonFocused]: !isAddPhotosClosed })}
        onClick={() => setIsAddPhotosClosed((prev) => !prev)}
      >
        {isAddPhotosClosed ? (
          <Image src="../icons/image-outline.svg" alt="" width={24} height={24} />
        ) : (
          <Image src="../icons/image.svg" alt="" width={24} height={24} />
        )}
      </button>

      <div className={classNames(style.addPhotosContainer, { [style.addPhotosContainerHidden]: isAddPhotosClosed })}>
        <div className={style.photosContainer}>
          {photosLinks.map((photo: string, num: number) => (
            <div className={style.uploadedPhoto}>
              <Image src={photo} alt="" width={80} height={80} />
              <button onClick={() => dispatch(deletePhoto(num))} className={style.deletePhotoButton}>
                <Image src="../sidebar-icons/close.svg" alt="" width={12} height={12}></Image>
              </button>
            </div>
          ))}
        </div>
        <div className={style.addPhotoButtonContainer}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handlerImageUpload(e, setImage)}
            id="upload-button"
            style={{ display: 'none' }}
            disabled={photos.length === 10}
          />
          <label htmlFor="upload-button" className={style.uploadButton}>
            <Image src="../sidebar-icons/plus-circle-outline.svg" alt="" width={36} height={36} />
          </label>
        </div>
      </div>
    </div>
  )
}
export default Cropping
