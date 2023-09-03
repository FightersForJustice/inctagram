import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getLayout } from '@/components/Layout/Layout'
import { useLogoutMutation } from '@/assets/api/auth/authQueryApi'
import { authRouts } from '@/components/common/Auth/authRoutes'
import { removeAccessTokenCookie } from '@/utils/cookies'
import { GetServerSideProps, NextApiRequest } from 'next'
import { axiosAPI } from '@/assets/api/api'
import Modal from '@/@ui/ui-kit/Modal/Modal'
import s from './index.module.scss'
import { Button } from '@/@ui/ui-kit/Button/Button'
import { useTranslation } from 'react-i18next'
import { BUTTON_COLORS } from '@/@ui/ui-kit/Button/constants'
import { userRouts } from '@/app/routes/userRouts'
import { UserData } from '@/assets/api/auth/authTypes'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const isAuth = await axiosAPI.auth.meServer(req as NextApiRequest)
  return {
    props: {
      isAuth,
    },
  }
}

type HomeType = {
  isAuth: UserData
}

const Logout = (props: HomeType) => {
  const [logout] = useLogoutMutation()
  const router = useRouter()
  const [ModalActive, setModalActive] = useState(true)
  const { t } = useTranslation()
  const translate = (key: string): string => t(`logout.${key}`)

  const handlerYes = () => {
    const performLogout = async () => {
      try {
        await logout()
          .unwrap()
          .then(() => {
            router.push(authRouts.login)
            removeAccessTokenCookie()
          })
      } catch (error) {
        console.error('Error occurred while logging out:', error)
      }
    }
    performLogout()
  }

  const handlerNo = () => {
    router.push(userRouts.home)
  }

  return (
    <>
      <Modal title={translate('title')} active={ModalActive} setActive={setModalActive} close={true}>
        <div className={s.content}>
          <p>
            {translate('text')} “{props.isAuth.email}”?
          </p>
          <div className={s.buttons}>
            <Button color={BUTTON_COLORS.OUTLINED} text={translate('yes')} onClick={handlerYes}></Button>
            <Button text={translate('no')} onClick={handlerNo}></Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
Logout.getLayout = getLayout
export default Logout
