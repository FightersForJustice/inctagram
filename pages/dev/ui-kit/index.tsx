import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import { Button } from '@/@ui/ui-kit/Button/Button'
import style from './index.module.scss'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import { TEXTAEREA_COLORS } from '@/@ui/ui-kit/Textareas/constants'
import TextArea from '@/@ui/ui-kit/Textareas/Textarea'

import { useForm, Control } from 'react-hook-form'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}
interface FormValues {
  myTextarea: string
}
const Login = () => {
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
              <Button text="Button"></Button>
              <Button text="Button" disabled></Button>
            </div>

            <div className={style.buttonBlock}>
              <Button color={BUTTON_COLORS.BASIC} text="Button"></Button>
              <Button color={BUTTON_COLORS.BASIC} text="Button" disabled></Button>
            </div>

            <div className={style.buttonBlock}>
              <Button color={BUTTON_COLORS.OUTLINED} text="Button"></Button>
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
              <TextArea color={TEXTAEREA_COLORS.DEFAULT} />
            </form>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextArea color={TEXTAEREA_COLORS.ACTIVE} isActive={true} />
            </form>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextArea color={TEXTAEREA_COLORS.ERROR} hasError={true} />
            </form>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextArea color={TEXTAEREA_COLORS.HOVER} isHovered={true} />
            </form>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextArea color={TEXTAEREA_COLORS.FOCUS} isFocused={true} />
            </form>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextArea color={TEXTAEREA_COLORS.DISABLE} isDisabled={true} />
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

Login.getLayout = getLayout
export default Login
