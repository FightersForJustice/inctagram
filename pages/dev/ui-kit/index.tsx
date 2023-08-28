import { PageWrapper } from 'components/PageWrapper/PageWrapper'
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
import { CheckBox } from '@/@ui/ui-kit/CheckBox'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}
interface FormValues {
  myTextarea: string
}
const Login = () => {
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextArea />
            </form>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextArea color={TEXTAEREA_COLORS.ERROR} hasError />
            </form>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextArea disabled />
            </form>
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
          <h2 className={style.componentHeader}>Icons</h2>
          <div style={{ display: 'flex' }}>
            <CheckBox checked={false} disabled={true}>Confirm your actions</CheckBox>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

Login.getLayout = getLayout
export default Login
