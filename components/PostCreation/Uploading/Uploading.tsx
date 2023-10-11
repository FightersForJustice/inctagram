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
import { useImageAddMutation, usePostCreateMutation } from '@/assets/api/post/postQueryApi'
import { ServerErrorResponse } from '@/assets/api/auth/authTypes'
import { dataURLtoFile } from '@/utils/Image/dataURLtoFile'

const Uploading = () => {
  const { photos, description } = usePostCreationDataSelector()
  const { userName, avatars } = useProfileSettingsSSRSelector()
  const [symbolCounter, setSymbolCounter] = useState(0)
  const [locations, setLocation] = useState<string[]>([])
  const [imageAdd] = useImageAddMutation()
  const [createPost] = usePostCreateMutation()
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

  const handlerPublish = (image: Array<{photo: string}>) => {
    if (!image) return
    let imageIdList: object[] = []
    for (let i = 0; i < photos.length; i++) {
      var file = dataURLtoFile(image[i].photo, 'a.png')
      const formData = new FormData()
      formData.append('file', file)
      imageAdd(formData)
        .unwrap()
        .then((data) => {
          imageIdList.push({ uploadId: data.images[0].uploadId })
          console.log('success')
          if (i === photos.length - 1) createPost({ description: description, childrenMetadata: imageIdList })
        })
        .catch((error: ServerErrorResponse) => {
          console.error(error)
        })
    }
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
          <button className={style.publishButton} onClick={() => handlerPublish(photos)}>
            publish
          </button>
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
