import { usePostCreationDataSelector } from '@/core/selectors/postCreationSelector'
import { useProfileSettingsSSRSelector } from '@/core/selectors/profileSettingsSSR '
import style from './Uploading.module.scss'
import MyCarousel from '@/@ui/ui-kit/Carousel'
import { TextArea } from '@/@ui/ui-kit/Textareas/Textarea'
import { useState } from 'react'
import { MainInput } from '@/@ui/ui-kit/Inputs/Inputs'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { setDescription } from '@/core/slices/postCreationSlice'

const Uploading = () => {
  const { photos, description } = usePostCreationDataSelector()
  const { userName, avatars } = useProfileSettingsSSRSelector()
  const [symbolCounter, setSymbolCounter] = useState(0)
  const [locations, setLocation] = useState<string[]>([])
  const textareaMaxSymbols = 500
  const dispatch = useDispatch()

  const handleTextareaChange = (e: any) => {
    setSymbolCounter(e.target.value.length)
    dispatch(setDescription(e.target.value))
  }

  const handleLocationSubmit = (e: any) => {
    e.preventDefault()
    console.log(locations)
    if (locations.length === 2) return

    setLocation((prev) => [e.target[0].value, ...prev])
  }

  const photosLinks = photos.map((photoObj: any) => {
    return photoObj.photo
  })

  return (
    <div className={style.uploadingContainer}>
      <MyCarousel items={photosLinks} />
      <div className={style.postDetails}>
        <div className={style.user}>
          <img
            src={avatars[0] ? avatars[0].url : '/../sidebar-icons/person.svg'}
            alt=""
            width={36}
            height={36}
            className={style.userAvatar}
          />
          <span className={style.userName}>{userName}</span>
        </div>
        <div className={style.textareaContainer}>
          <TextArea
            label="Add publication descriptions"
            maxLength={textareaMaxSymbols}
            onChange={(e) => handleTextareaChange(e)}
            value={description}
          />
          <span className={style.symbolCounter}>
            {symbolCounter}/{textareaMaxSymbols}
          </span>
        </div>
        <div className={style.buttonContainer}>
          <button className={style.publishButton}>publish</button>
        </div>
        <form onSubmit={(e) => handleLocationSubmit(e)} className={style.locationInput}>
          <MainInput label="Add location" />
          <button type="submit">
            <Image width={24} height={24} src="/../sidebar-icons/pin-outline.svg" alt="" />
          </button>
        </form>
        <div className={style.locationContainer}>
          {locations.map((location) => (
            <div className={style.location}>{location}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Uploading
