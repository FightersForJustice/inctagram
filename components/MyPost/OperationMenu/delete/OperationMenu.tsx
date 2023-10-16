import Image from 'next/image'
import s from '../style.module.scss'
import { Dispatch, SetStateAction, useState } from 'react'
import Delete from './Delete'

type MenuType = {
  myPost: number
  setMyPostActive: (isActive: boolean) => void
  setMyPost: Dispatch<SetStateAction<number>>
}

const OperationMenu: React.FC<MenuType> = ({ myPost, setMyPostActive, setMyPost }) => {
  const [deleteModal, setDeleteModal] = useState(false)
  return (
    <>
      <Delete
        setDeleteModal={setDeleteModal}
        deleteModal={deleteModal}
        myPost={myPost}
        setMyPostActive={setMyPostActive}
        setMyPost={setMyPost}
      />
      <div className={s.menu}>
        <div className={s.item}>
          <Image className={s.icon} width={24} height={24} src="/sidebar-icons/edit-2-outline.svg" alt="Edit" />
          <span>Edit Post</span>
        </div>
        <div className={s.item} onClick={() => setDeleteModal(true)}>
          <Image className={s.icon} width={24} height={24} src="/sidebar-icons/trash-outline.svg" alt="Delete" />
          <span>Delete Post</span>
        </div>
      </div>
    </>
  )
}
export default OperationMenu
