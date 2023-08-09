import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Tabs from '@radix-ui/react-tabs'
import { TAB_COLORS } from './constants'
import Tab from './Tabs'
import styles from './Tabs.module.scss'

interface TabData {
  value: string
  label: string
  disabled?: boolean
}

interface TabsProps {
  values: TabData[]
  color?: (typeof TAB_COLORS)[keyof typeof TAB_COLORS]
}

const TabWrapper: React.FC<TabsProps> = ({ values, color = TAB_COLORS.PRIMARY }) => {
  const router = useRouter()
  const initialTab = router.query.tab
  const [activeTab, setActiveTab] = useState<string | null>(
    Array.isArray(initialTab) ? initialTab[0] : initialTab || (values.length > 0 ? values[0].value : null)
  )

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    router.push({ query: { tab: value } })
  }

  useEffect(() => {
    setActiveTab(router.query.tab as string)
  }, [router.query.tab])

  return (
    <Tabs.Root value={activeTab || ''} defaultValue={values[0].value} onValueChange={handleTabChange}>
      <Tabs.List className={styles.TabsList}>
        {values.map((tabData) => (
          <Tab
            key={tabData.value}
            value={tabData.value}
            label={tabData.label}
            color={color}
            isActive={activeTab === tabData.value}
            disabled={tabData.disabled}
            onClick={() => handleTabChange(tabData.value)}
          />
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}

export default TabWrapper
