import Image from 'next/image'
import s from './style.module.scss'
import Modal from '@/@ui/ui-kit/Modal/Modal'
import { Dispatch, SetStateAction, useState } from 'react'
import { Button } from '@/@ui/ui-kit/Button/Button'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import { deletePostUser } from '@/core/slices/postUserSlice'
import { useDispatch } from 'react-redux'

type DeleteType = {
  setDeleteModal: Dispatch<SetStateAction<boolean>>
  deleteModal: boolean
  myPost: number
  setMyPostActive: (isActive: boolean) => void
  setMyPost: Dispatch<SetStateAction<number>>
}

const Delete: React.FC<DeleteType> = ({ setDeleteModal, deleteModal, myPost, setMyPostActive, setMyPost }) => {
  const dispatch = useDispatch()
  const postDelete = () => {
    dispatch(deletePostUser(myPost))
    setMyPostActive(false)
    setMyPost(0)
  }
  return (
    <>
      <Modal title="Delete Post" active={deleteModal} setActive={setDeleteModal} close={true}>
        <div className={s.deleteModal}>
          <p className={s.content}>Are you sure you want to delete this post?</p>
          <div className={s.item}>
            <Button color={BUTTON_COLORS.OUTLINED} text="Yes" onClick={postDelete}></Button>
            <Button text="No" onClick={() => setDeleteModal(false)}></Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
export default Delete
