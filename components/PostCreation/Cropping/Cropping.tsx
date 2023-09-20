import { usePostCreationDataSelector } from '@/core/selectors/postCreationSelector'
import { Example } from '@/@ui/ui-kit/Slider/Slider'

const Cropping = () => {
  const { photos } = usePostCreationDataSelector()
  const photosLinks = photos.map((photoObj: any) => {
    return photoObj.photo
  })
  return (
    <div>
      <Example items={photosLinks} />
    </div>
  )
}

export default Cropping
