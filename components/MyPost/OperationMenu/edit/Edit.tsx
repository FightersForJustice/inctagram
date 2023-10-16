import Modal from '@/@ui/ui-kit/Modal/Modal'
import s from './style.module.scss'
import { useState } from 'react'
import MyCarousel from '@/@ui/ui-kit/Carousel'
import Image from 'next/image'
import { FormInput } from '@/@ui/ui-kit/Inputs/Inputs'
import { TextArea } from '@/@ui/ui-kit/Textareas/Textarea'
import { Button } from '@/@ui/ui-kit/Button/Button'

type EditType = {}

const PostEdit: React.FC<EditType> = ({}) => {
  const [active, setActive] = useState(false)
  return (
    <>
      <Modal active={active} setActive={setActive} title="Edit Post" close={true}>
        <div className={s.content}>
          <MyCarousel
            items={[
              'https://klike.net/uploads/posts/2023-02/1675839044_3-490.jpg',
              'https://iphone-wallpaper.pics/wallpaper/d/k/dkxoz3_4df2b5a856d89bb6b9352eafd1333a92_raw.jpg',
              'https://sun1-83.userapi.com/s/v1/if1/B5cjNd8qZYMHUE3PJ4O8dW1gJI0K8iGbeaolZMHUt9X7FwrdslA7tp9rxBOYbIZWvARw-CQr.jpg?size=400x400&quality=96&crop=619,144,1147,1147&ava=1',
              'https://avatars.mds.yandex.net/i?id=c189e5932825e3763a40a4603ad5df6188b44526-9202550-images-thumbs&n=13',
              'https://sun6-23.userapi.com/s/v1/if1/QmHxtJ87yWEQLVXFK-N_MLP2ohNN_nZHRbEuoV_81hTvY0ZdmuAG7FaXjokjGUcPhe2vxJTi.jpg?size=491x504&quality=96&crop=32,58,491,504&ava=1',
            ]}
          />
          <div className={s.post}>
            <div className={s.user}>
              <Image width={36} height={36} src="/img/post/img7.jpg" alt="Avatar" />
              <div className={s.name}>URLProfiele</div>
            </div>
            <div className={s.descriptions}>
              <div className={s.text}>Add publication descriptions</div>
              <TextArea />
              <div className={s.text}>100/300</div>
            </div>
            <Button text="Save Changes"></Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
export default PostEdit
