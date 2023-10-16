import { usePostCreationDataSelector } from '@/core/selectors/postCreationSelector'
import style from './Cropping.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { setPhoto } from '@/core/slices/postCreationSlice'
import { useDispatch } from 'react-redux'
import MyCarousel from '@/@ui/ui-kit/Carousel'
import { handlerImageUpload } from '../handlerImageUpload'
const Cropping = () => {
  const dispatch = useDispatch()
  const { photos } = usePostCreationDataSelector()
  const [isAddPhotosClosed, setIsAddPhotosClosed] = useState(true)
  const [image, setImage] = useState('')
  useEffect(() => {
    if (!image) return
    dispatch(setPhoto({ photo: image }))
  }, [image])
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
          {photosLinks.map((photo: string) => (
            <div className={style.uploadedPhoto}>
            <Image src={photo} alt="" width={80} height={80} />
            <button className={style.deletePhotoButton}>
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
