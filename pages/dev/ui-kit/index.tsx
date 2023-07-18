import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import { Button } from '@/@ui/ui-kit/Button/Button'
import style from './index.module.scss'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import Modal from '@/ui/ui-kit/Modal/Modal'
import { useState } from 'react'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const Login = () => {
  const [ModalActive, setModalActive] = useState(false);
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
        <div className={style.kitBlock}>
            <h2 className={style.componentHeader}>Modal</h2>
            <div className={style.modal}>
            <button className={style.open} onClick={() => {setModalActive(true)}}>Modal open</button>
              <Modal active={ModalActive} setActive={setModalActive} title="Email sent">
                <div className={style.text}>We have sent a link to confirm your email to epam@epam.com</div>
                <div className={style.buttonBloc}>
                  <button className={style.button} onClick={() => {setModalActive(false)}}>
                    OK
                  </button>
                </div>
              </Modal>
            </div>
        </div>
      </div>
    </PageWrapper>
  )
}

Login.getLayout = getLayout
export default Login
