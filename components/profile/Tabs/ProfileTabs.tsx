import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { userRouts } from '@/components/common/User/userRouts'
import * as Tabs from '@radix-ui/react-tabs'
import { useRouter } from 'next/router'
import { useState } from 'react'
import General from './General'
import Devices from './Devices'
import Account from './Account'
import Payments from './Payments'
import { Tab } from './Tab/Tab'
import style from './ProfileTabs.module.scss'
import { userProfile } from '@/assets/api/user/userTypes'

type ProfileTabs = {
  userProfile: userProfile
}

const ProfileTabs = (props: ProfileTabs) => {
  const { userProfile } = props
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('general')

  const handleTabChange = (value: string) => {
    setActiveTab(value)

    router.replace(`${userRouts.profileSettings}?tab=${value}`)
  }

  const aboutMe = userProfile.aboutMe || 'no data'

  return (
    <>
      <PageWrapper>
        <div className={style.container}>
          <Tabs.Root defaultValue="general" onValueChange={handleTabChange} className={style.TabsRoot}>
            <Tabs.List aria-label="Manage your account" className={style.TabsList}>
              <Tab title="General Information" value="general" />
              <Tab title="Devices" value="devices" />
              <Tab title="Account Management" value="account" />
              <Tab title="My Payments" value="payments" />
            </Tabs.List>
            <Tabs.Content value="general">{activeTab === 'general' && <General userProfile={userProfile} />}</Tabs.Content>
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
