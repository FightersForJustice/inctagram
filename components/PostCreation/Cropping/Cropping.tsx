import { usePostCreationDataSelector } from '@/core/selectors/postCreationSelector'
import { Example } from '@/@ui/ui-kit/Slider/Slider'
import style from './Cropping.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import classNames from 'classnames'

const Cropping = () => {
  const { photos } = usePostCreationDataSelector()
  const [isAddPhotosClosed, setIsAddPhotosClosed] = useState(true)
  const photosLinks = photos.map((photoObj: any) => {
    return photoObj.photo
  })
  return (
    <div>
      <Example items={photosLinks} />
      <button className={style.button} onClick={() => setIsAddPhotosClosed((prev) => !prev)}>
        <Image src="../icons/image-outline.svg" alt="" width={32} height={32} />
      </button>

      <div className={classNames(style.addPhotosContainer, { [style.addPhotosContainerHidden]: isAddPhotosClosed })}>
        {photosLinks.map((photo: string) => (
          <Image src={photo} alt="" width={86} height={86} />
        ))}
      </div>
    </div>
  )
}

export default Cropping
