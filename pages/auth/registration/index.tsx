import style from './index.module.scss'
import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import RegistrationFormContainer from '@/components/auth/Registration/RegistrationFormContainer'

const Registration = () => {
  return (
    <PageWrapper>
      <div className={style.content}>
        <RegistrationFormContainer />
      </div>
    </PageWrapper>
  )
}
Registration.getLayout = getLayout
export default Registration
