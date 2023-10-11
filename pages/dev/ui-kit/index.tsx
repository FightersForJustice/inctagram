import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import { Button } from '@/@ui/ui-kit/Button/Button'
import style from './index.module.scss'
import IconStyle from '@/@ui/ui-kit/Icon/IconsComponent.module.scss'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import { MainDatePicker } from '@/@ui/ui-kit/DatePicker/DatePicker'
import Icons from '@/@ui/ui-kit/Icon/IconsComponent'
import { ButtonLink } from '@/@ui/ui-kit/ButtonLink/ButtonLink'
import Modal from '@/@ui/ui-kit/Modal/Modal'
import { useState } from 'react'
import { TEXTAEREA_COLORS } from '@/@ui/ui-kit/Textareas/constants'
import { TextArea } from '@/@ui/ui-kit/Textareas/Textarea'

import { useForm, Control } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Tab } from '@/@ui/ui-kit/Tabs/Tab'
import * as Tabs from '@radix-ui/react-tabs'
import { userRouts } from '@/app/routes/userRouts'
import { CheckBox } from '@/@ui/ui-kit/CheckBox/CheckBox'

import MyCarousel from '../../../@ui/ui-kit/Carousel/index'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}
interface FormValues {
  myTextarea: string
}
const Login = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('general')

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }
  const [ModalActive, setModalActive] = useState(false)
  const { control, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  return (
    <PageWrapper>
      <div className={style.kitContainer}>
        <h1 className={style.header}> UIKit Page</h1>

        <div className={style.kitBlock}>
          <h2 className={style.componentHeader}>Buttons</h2>
          <div className={style.components}>
            <div className={style.buttonBlock}>
              <Button text="Button5"></Button>
              <Button text="Button3" disabled></Button>
            </div>

            <div className={style.buttonBlock}>
              <Button color={BUTTON_COLORS.BASIC} text="Button7"></Button>
              <Button color={BUTTON_COLORS.BASIC} text="Button8" disabled></Button>
            </div>

            <div className={style.buttonBlock}>
              <Button color={BUTTON_COLORS.OUTLINED} text="Button9"></Button>
              <Button color={BUTTON_COLORS.OUTLINED} text="Button" disabled></Button>
            </div>

            <div className={style.buttonBlock}>
              <Button color={BUTTON_COLORS.GHOST} text="Button"></Button>
              <Button color={BUTTON_COLORS.GHOST} text="Button" disabled></Button>
            </div>
          </div>
        </div>
        <div className={style.kitBlock}>
          <h2 className={style.componentHeader}>Textarea</h2>
          <div className={style.components}>
            <div className={style.buttonBlock}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextArea />
              </form>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextArea disabled />
              </form>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextArea color={TEXTAEREA_COLORS.ERROR} hasError />
              </form>
            </div>
          </div>
        </div>

        <div className={style.kitBlock}>
          <h2 className={style.componentHeader}>Button Links</h2>
          <div className={style.components}>
            <ButtonLink text="Internal Button link" url="/auth/login"></ButtonLink>
            <ButtonLink text="External Button link" url="https://www.awwwards.com/"></ButtonLink>
          </div>
        </div>
        <div className={style.kitBlock}>
          <h2 className={style.componentHeader}>Modal</h2>
          <div className={style.modal}>
            <Button
              text="Modal open"
              onClick={() => {
                setModalActive(true)
              }}
            ></Button>
            <Modal active={ModalActive} setActive={setModalActive} close={true} title="Email sent">
              <div className={style.text}>We have sent a link to confirm your email to epam@epam.com</div>
              <div className={style.buttonModal}>
                <Button
                  text="Ok"
                  onClick={() => {
                    setModalActive(false)
                  }}
                ></Button>
              </div>
            </Modal>
          </div>
        </div>
        <div className={style.kitBlock}>
          <h2 className={style.componentHeader}>Tabs</h2>
          <div className={style.container}>
            <Tabs.Root defaultValue="general" onValueChange={handleTabChange} className={style.TabsRoot}>
              <Tabs.List aria-label="Manage your account" className={style.TabsList}>
                <Tab label="TAB " value="tab1" />
                <Tab label="TAB" value="tab2" disabled />
                <Tab label="TAB" value="tab3" />
              </Tabs.List>
            </Tabs.Root>
          </div>
        </div>
        <div className={style.kitBlock}>
          <h2 className={style.componentHeader}>Icons</h2>
          <div style={{ display: 'flex', gap: '50px', color: 'white' }}>
            <div>
              <h2>Default</h2>
              <MainDatePicker />
            </div>
            <div>
              <h2>Error</h2>
              <MainDatePicker value={'99/99/9999'} />
            </div>
            <div>
              <h2>Disabled</h2>
              <MainDatePicker disabled />
            </div>
          </div>
        </div>

        <div className={style.kitBlock}>
          <h2 className={style.componentHeader}>CheckBox</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <CheckBox checked={false} disabled={true}>
              1. Confirm your actions
            </CheckBox>
            <CheckBox checked={true} disabled={true}>
              2. Confirm your actions
            </CheckBox>
            <CheckBox checked={true} disabled={false}>
              3. Confirm your actions
            </CheckBox>
            <CheckBox checked={false} disabled={false}>
              4. Confirm your actions
            </CheckBox>
          </div>
        </div>
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
    </PageWrapper>
  )
}
Login.getLayout = getLayout
export default Login
