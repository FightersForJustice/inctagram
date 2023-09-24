import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import { userRouts } from '@/app/routes/userRouts'
import * as Tabs from '@radix-ui/react-tabs'
import { useRouter } from 'next/router'
import { useState } from 'react'
import General from './General'
import Devices from './Devices'
import Account from './Account'
import Payments from './Payments'
import { Tab } from '../../../../@ui/ui-kit/Tabs/Tab'
import style from './ProfileTabs.module.scss'
import { UserProfile } from '@/assets/api/user/userTypes'
import { useTranslation } from 'react-i18next'

type ProfileTabs = {
  userProfile: UserProfile
}

const ProfileTabs = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('general')

  const handleTabChange = (value: string) => {
    setActiveTab(value)

    router.replace(`${userRouts.profileSettings}?tab=${value}`)
  }
  const { t } = useTranslation()
  const translate = (key: string): string => t(`profile_settings.${key}`)

  return (
    <>
      <PageWrapper>
        <div className={style.container}>
          <Tabs.Root defaultValue="general" onValueChange={handleTabChange} className={style.TabsRoot}>
            <Tabs.List aria-label="Manage your account" className={style.TabsList}>
              <Tab label={translate('generalInformation')} value="general" />
              <Tab label={translate('devices')} value="devices" />
              <Tab label={translate('accountManagement')} value="account" />
              <Tab label={translate('myPayments')} value="payments" />
            </Tabs.List>
            <Tabs.Content className={style.tabContent} value="general">
              {activeTab === 'general' && <General />}
            </Tabs.Content>
            <Tabs.Content value="devices">{activeTab === 'devices' && <Devices />}</Tabs.Content>
            <Tabs.Content value="account">{activeTab === 'account' && <Account />}</Tabs.Content>
            <Tabs.Content value="payments">{activeTab === 'payments' && <Payments />}</Tabs.Content>
          </Tabs.Root>
        </div>
      </PageWrapper>
    </>
  )
}

export default ProfileTabs
