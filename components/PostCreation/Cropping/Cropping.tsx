import { usePostCreationDataSelector } from '@/core/selectors/postCreationSelector'
import style from './Cropping.module.scss'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import classNames from 'classnames'
import { setPhoto } from '@/core/slices/postCreationSlice'
import { useDispatch } from 'react-redux'
import MyCarousel from '@/@ui/ui-kit/Carousel'

const Cropping = () => {
  const dispatch = useDispatch()
  const { photos } = usePostCreationDataSelector()
  const [isAddPhotosClosed, setIsAddPhotosClosed] = useState(true)
  const photosLinks = photos.map((photoObj: any) => {
    return photoObj.photo
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      dispatch(setPhoto({ photo: URL.createObjectURL(e.target.files[0]) }))
    }
  }

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
          <label htmlFor="upload-button" className={style.uploadButton}>
            <Image src="../sidebar-icons/plus-circle-outline.svg" alt="" width={24} height={24} />
          </label>

          <input type="file" accept="image/*" onChange={(e) => handleChange(e)} id="upload-button" style={{ display: 'none' }} />
        </div>
      </div>
    </div>
  )
}

export default Cropping
