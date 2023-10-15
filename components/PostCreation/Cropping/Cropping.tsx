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
      <button className={style.button} onClick={() => setIsAddPhotosClosed((prev) => !prev)}>
        <Image src="../icons/image-outline.svg" alt="" width={32} height={32} />
      </button>

      <div className={classNames(style.addPhotosContainer, { [style.addPhotosContainerHidden]: isAddPhotosClosed })}>
        <div className={style.photosContainer}>
          {photosLinks.map((photo: string) => (
            <Image src={photo} alt="" width={86} height={86} className={style.uploadedPhoto} />
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
            <Image src="../sidebar-icons/plus-circle-outline.svg" alt="" width={24} height={24} />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Cropping
