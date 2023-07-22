import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import { Button } from '@/@ui/ui-kit/Button/Button'
import style from './index.module.scss'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import { MainDatePicker } from '@/@ui/ui-kit/DatePicker/DatePicker'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const Login = () => {
  return (
    <PageWrapper>
      <div className={style.kitContainer}>
        <h1 className={style.header}> UIKit Page</h1>

        <div className={style.kitBlock}>
            <h2 className={style.componentHeader}>Buttons</h2>
            <div className={style.components}>

                <div className={style.buttonBlock}>
                <Button text='Button'></Button>
                <Button text='Button' disabled></Button>
                </div>

                <div className={style.buttonBlock}>
                <Button color={BUTTON_COLORS.BASIC} text='Button'></Button>
                <Button color={BUTTON_COLORS.BASIC} text='Button' disabled></Button>
                </div>

                <div className={style.buttonBlock}>
                <Button color={BUTTON_COLORS.OUTLINED} text='Button'></Button>
                <Button color={BUTTON_COLORS.OUTLINED} text='Button' disabled></Button>
                </div>

                <div className={style.buttonBlock}>
                <Button color={BUTTON_COLORS.GHOST} text='Button'></Button>
                <Button color={BUTTON_COLORS.GHOST} text='Button' disabled></Button>
                </div>

            </div>
        </div>
        <MainDatePicker />
      </div>
    </PageWrapper>
  )
}

Login.getLayout = getLayout
export default Login
