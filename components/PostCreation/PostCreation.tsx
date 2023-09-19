import Modal from '@/@ui/ui-kit/Modal/Modal'
import { useEffect, useState } from 'react'
import CreatePostPaginator from './CreatePostPaginator'
import AddPhoto from './AddPhoto/AddPhoto'
import Cropping from './Cropping/Cropping'
import Filters from './Filters/Filters'
import Uploading from './Uploading/Uploading'
import style from './PostCreation.module.scss'
import { useDispatch } from 'react-redux'
import { clearPhotos } from '@/core/slices/postCreationSlice'

const PostCreation = () => {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [moduleNum, setModuleNum] = useState(0)
  const moduleNames = ['Add Photo', 'Cropping', 'Filters', 'Publication']
  const modules = [<AddPhoto setModuleNum={setModuleNum} />, <Cropping />, <Filters />, <Uploading />]

  useEffect(() => {
    if(moduleNum !== 0) return 
    dispatch(clearPhotos())
  }, [moduleNum])

  return (
    <>
      {isModalOpen && (
        <Modal
          title={moduleNames[moduleNum]}
          children={
            <div className={style.container}>
              <CreatePostPaginator moduleNum={moduleNum} setModuleNum={setModuleNum} />
              {modules[moduleNum]}
            </div>
          }
          setActive={() => setIsModalOpen(false)}
          active={isModalOpen}
          isPaddingDisabled
        />
      )}
    </>
  )
}

export default PostCreation
