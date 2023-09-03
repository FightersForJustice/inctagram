import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import { Legal } from '@/components/auth/Legal/Legal'
import { useTranslation } from 'react-i18next'

export async function getStaticProps() {
  return {
    props: {},
  }
}

const TermsOfService = () => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`legalPages.${key}`)

  return (
    <PageWrapper>
      <Legal title={translate('termsOfService')} />
    </PageWrapper>
  )
}

TermsOfService.getLayout = getLayout

export default TermsOfService
