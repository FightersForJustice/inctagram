import classNames from 'classnames'
import s from './MyPost.module.scss'
import MyCarousel from '@/@ui/ui-kit/Carousel'
import Image from 'next/image'
import { Button } from '@/@ui/ui-kit/Button/Button'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import { useMyPostQuery } from '@/assets/api/myProfile/PostUserQueryApi'
import { useProfileSettingsSSRSelector } from '@/core/selectors/profileSettingsSSR '
import OperationMenu from './OperationMenu/OperationMenu'
import { Dispatch, SetStateAction, useState } from 'react'
import Modal from '@/@ui/ui-kit/Modal/Modal'

type ModalType = {
  active: boolean
  setMyPostActive: (isActive: boolean) => void
  myPost: number
  setMyPost: Dispatch<SetStateAction<number>>
}

const MyPost: React.FC<ModalType> = ({ active, setMyPostActive, myPost, setMyPost }) => {
  const open = active ? classNames(s.modal, s.effect, s.show) : classNames(s.modal, s.effect)

  const { data, error } = useMyPostQuery(myPost)
  const userData = useProfileSettingsSSRSelector()
  const [menu, setMenu] = useState(false)
  return (
    <>
      <div className={open}>
        <button
          className={s.buttonClose}
          onClick={() => {
            setMyPostActive(false)
            setMyPost(0)
          }}
        >
          <img src="/icons/close.svg" alt="" />
        </button>
        <div className={s.buttonNavigate}>
          <button className={s.next}>
            <img src="/sidebar-icons/arrow-ios-forward.svg" alt="" />
          </button>
          <button className={s.back}>
            <img src="/sidebar-icons/arrow-ios-back-outline.svg" alt="" />
          </button>
        </div>
        <div className={s.content}>
          <div className={s.MyCarousel}>
            <MyCarousel
              naturalHeight={562}
              items={data ? data.images.filter((img) => img.height === 1440).map((img, index) => img.url) : []}
            />
          </div>
          <div className={s.post}>
            <div className={s.postBlock}>
              <div className={s.infoPost}>
                <div className={s.user}>
                  <Image width={36} height={36} src={userData.avatars[0].url} alt="Avatar"></Image>
                  <div className={s.name}>{userData.userName}</div>
                </div>
                <div>
                  <Image
                    className={s.moreHorizontal}
                    width={24}
                    height={24}
                    src="/sidebar-icons/more-horizontal.svg"
                    alt="More horizontal"
                    onClick={() => setMenu(!menu)}
                  ></Image>
                  {menu && <OperationMenu myPost={myPost} setMyPostActive={setMyPostActive} setMyPost={setMyPost} />}
                </div>
              </div>
              <div className={s.comments}>
                <div className={s.comment}>
                  <div className={s.avatar}>
                    <Image width={36} height={36} src={userData.avatars[0].url} alt="Avatart"></Image>
                  </div>
                  <div className={s.text}>
                    <p>
                      <span className={s.name}>{userData.userName}</span>
                      <span className={s.textComment}>{data?.description}</span>
                    </p>
                    <p className={s.time}>2 hours ago</p>
                  </div>
                </div>
                <div className={s.comment}>
                  <div className={s.avatar}>
                    <Image width={36} height={36} src="/img/post/img3.jpg" alt="Avatart"></Image>
                  </div>
                  <div className={s.text}>
                    <p>
                      <span className={s.name}>URLProfiele</span>
                      <span className={s.textComment}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </span>
                    </p>
                    <p className={s.time}>
                      6 hours ago<span className={s.answer}>Answer</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={s.footer}>
              <div className={s.icons}>
                <div className={s.left}>
                  <Image width={24} height={24} src="/sidebar-icons/heart-outline.svg" alt="Heart outline"></Image>
                  <Image width={24} height={24} src="/sidebar-icons/paper-plane-outline.svg" alt="Paper plane outline"></Image>
                </div>
                <Image width={24} height={24} src="/sidebar-icons/bookmark-outline.svg" alt="Bookmark outline"></Image>
              </div>
              <div className={s.likes}>
                <div className={s.avatars}>
                  <Image width={24} height={24} src="/img/post/img7.jpg" alt="Avatar"></Image>
                  <Image width={24} height={24} src="/img/post/img5.jpg" alt="Avatar"></Image>
                  <Image width={24} height={24} src="/img/post/img4.jpg" alt="Avatar"></Image>
                </div>
                <span className={s.like}>
                  2 243 <b>"Like"</b>
                </span>
              </div>
              <p className={s.time}>July 3, 2021</p>
              <div className={s.addComment}>
                <input type="text" placeholder="Add a Comment..." />
                <Button color={BUTTON_COLORS.GHOST} text="Publish"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.overlay}></div>
    </>
  )
}
export default MyPost
