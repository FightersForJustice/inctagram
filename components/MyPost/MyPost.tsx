import classNames from 'classnames'
import s from './MyPost.module.scss'
import MyCarousel from '@/@ui/ui-kit/Carousel'
import Image from 'next/image'

type ModalType = {
  active: boolean
  setMyPostActive: (isActive: boolean) => void
  children: React.ReactNode
  close?: boolean
  isPaddingDisabled?: boolean
}

const MyPost: React.FC<ModalType> = ({ active, setMyPostActive }) => {
  const open = active ? classNames(s.modal, s.effect, s.show) : classNames(s.modal, s.effect)
  return (
    <>
      <div className={open}>
        <button
          className={s.buttonClose}
          onClick={() => {
            setMyPostActive(false)
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
              items={[
                'https://klike.net/uploads/posts/2023-02/1675839044_3-490.jpg',
                'https://iphone-wallpaper.pics/wallpaper/d/k/dkxoz3_4df2b5a856d89bb6b9352eafd1333a92_raw.jpg',
                'https://sun1-83.userapi.com/s/v1/if1/B5cjNd8qZYMHUE3PJ4O8dW1gJI0K8iGbeaolZMHUt9X7FwrdslA7tp9rxBOYbIZWvARw-CQr.jpg?size=400x400&quality=96&crop=619,144,1147,1147&ava=1',
                'https://avatars.mds.yandex.net/i?id=c189e5932825e3763a40a4603ad5df6188b44526-9202550-images-thumbs&n=13',
                'https://sun6-23.userapi.com/s/v1/if1/QmHxtJ87yWEQLVXFK-N_MLP2ohNN_nZHRbEuoV_81hTvY0ZdmuAG7FaXjokjGUcPhe2vxJTi.jpg?size=491x504&quality=96&crop=32,58,491,504&ava=1',
              ]}
            />
          </div>
          <div className={s.post}>
            <div className={s.infoPost}>
              <div className={s.user}>
                <Image width={36} height={36} src="/img/post/img7.jpg" alt="Avatar"></Image>
                <div className={s.name}>URLProfiele</div>
              </div>
              <div className={s.moreHorizontal}>
                <Image width={24} height={24} src="/sidebar-icons/more-horizontal.svg" alt="More horizontal"></Image>
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
