import style from './index.module.scss'
import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import RegistrationForm from '@/components/auth/Registration/RegistrationForm'


const Registration = () => {

  return (
    <PageWrapper>
      <div className={style.content}>
        <RegistrationForm/>
      </div>
    </PageWrapper>
  )
}
Registration.getLayout = getLayout
export default Registration
