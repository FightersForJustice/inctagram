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

    router.replace(`/ui-kit?tab=${value}`)
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
      </div>
    </PageWrapper>
  )
}
Login.getLayout = getLayout
export default Login
