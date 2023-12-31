import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { Legal } from '@/components/legal/Legal'
import { useTranslation } from 'react-i18next'

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
