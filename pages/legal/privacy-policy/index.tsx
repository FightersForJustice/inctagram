import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import { Legal } from '@/components/auth/Legal/Legal'
import { useTranslation } from 'react-i18next'

export async function getStaticProps() {
  return {
    props: {},
  }
}

const PrivacyPolicy = () => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`legalPages.${key}`)

  return (
    <PageWrapper>
      <Legal title={translate('privacyPolicy')} />
    </PageWrapper>
  )
}

PrivacyPolicy.getLayout = getLayout

export default PrivacyPolicy
