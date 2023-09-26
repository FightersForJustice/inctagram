import { usePostCreationDataSelector } from '@/core/selectors/postCreationSelector'
import { useProfileSettingsSSRSelector } from '@/core/selectors/profileSettingsSSR '
import style from './Uploading.module.scss'
import MyCarousel from '@/@ui/ui-kit/Carousel'
import { TextArea } from '@/@ui/ui-kit/Textareas/Textarea'
import { Button } from '@/@ui/ui-kit/Button/Button'
import { useState } from 'react'

const Uploading = () => {
  const { photos } = usePostCreationDataSelector()
  const { userName, avatars } = useProfileSettingsSSRSelector()
  const [symbolCounter, setSymbolCounter] = useState(0)
  const textareaMaxSymbols = 500
  const handleTextareaChange = (e: any) => {
    setSymbolCounter(e.target.value.length)
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
          />
          <span className={style.symbolCounter}>
            {symbolCounter}/{textareaMaxSymbols}
          </span>
        </div>
        <div className={style.buttonContainer}>
          <Button text="Publish" />
        </div>
      </div>
    </div>
  )
}

export default Uploading
