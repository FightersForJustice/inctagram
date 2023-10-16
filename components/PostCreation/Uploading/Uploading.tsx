import { usePostCreationDataSelector } from '@/core/selectors/postCreationSelector'
import { useProfileSettingsSSRSelector } from '@/core/selectors/profileSettingsSSR '
import style from './Uploading.module.scss'
import MyCarousel from '@/@ui/ui-kit/Carousel'
import { TextArea } from '@/@ui/ui-kit/Textareas/Textarea'
import { useEffect, useState } from 'react'
import { MainInput } from '@/@ui/ui-kit/Inputs/Inputs'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { setDescription } from '@/core/slices/postCreationSlice'
import { useImageAddMutation, usePostCreateMutation } from '@/assets/api/post/postQueryApi'
import { ServerErrorResponse } from '@/assets/api/auth/authTypes'
import { dataURLtoFile } from '@/utils/Image/dataURLtoFile'
import { Loading } from '@/components/common/Loaders/Loading'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const Uploading = () => {
  const { photos, description } = usePostCreationDataSelector()
  const { userName, avatars } = useProfileSettingsSSRSelector()
  const [symbolCounter, setSymbolCounter] = useState(0)
  const [imageIdList, setImageIdList] = useState<object[]>([])
  const [locations, setLocation] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [imageAdd] = useImageAddMutation()
  const [createPost, { isSuccess, isError }] = usePostCreateMutation()
  const textareaMaxSymbols = 500
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const router = useRouter()

  useEffect(() => {
    if (imageIdList.length !== photos.length) return
    createPost({ description: description, childrenMetadata: imageIdList })
  }, [imageIdList])

  useEffect(() => {
    if (isSuccess) router.push('/home')
  }, [isSuccess])

  useEffect(() => {
    if (isError) setImageIdList([])
    setIsLoading(false)
  }, [isError])

  const handleTextareaChange = (e: any) => {
    setSymbolCounter(e.target.value.length)
    dispatch(setDescription(e.target.value))
  }

  const handleLocationSubmit = (e: any) => {
    e.preventDefault()
    if (locations.length === 2) return
    setLocation((prev) => [e.target[0].value, ...prev])
  }

  const handlerPublish = (image: Array<{ photo: string }>) => {
    if (!image) return
    const uploadImage = (count: number, index: number = 0) => {
      if (count === index) return
      var file = dataURLtoFile(image[count - index - 1].photo, 'a.png')
      const formData = new FormData()
      formData.append('file', file)
      imageAdd(formData)
        .unwrap()
        .then((data) => {
          setImageIdList((prev) => [...prev, { uploadId: data.images[0].uploadId }])
          uploadImage(count, index + 1)
        })
        .catch((error: ServerErrorResponse) => {
          console.error(error)
          setImageIdList([])
          setIsLoading(false)
        })
    }
    setIsLoading(true)
    uploadImage(photos.length)
  }

  const photosLinks = photos.map((photoObj: any) => {
    return photoObj.photo
  })

  return (
    <div className={style.uploadingContainer}>
      {isLoading && (
        <div>
          <Loading />
        </div>
      )}
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
            label={t('postCreation.addDescription')}
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
            {t('postCreation.publishButton')}
          </button>
        </div>
        <form onSubmit={(e) => handleLocationSubmit(e)} className={style.locationInput}>
          <MainInput label={t('postCreation.addLocation')} />
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
