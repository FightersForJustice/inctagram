import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Tabs from '@radix-ui/react-tabs'
import { TAB_COLORS } from './constants'
import styles from './Tabs.module.scss'
import classNames from 'classnames'

interface TabData {
  value: string
  label: string
  disabled?: boolean
  color?: (typeof TAB_COLORS)[keyof typeof TAB_COLORS]
}

interface TabsProps {
  values: TabData[]
  color?: (typeof TAB_COLORS)[keyof typeof TAB_COLORS]
}

const Tab: React.FC<TabsProps> = ({ values, color = TAB_COLORS.PRIMARY }) => {
  const [currentColor] = useState(color)
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
  const buttonClasses = classNames(styles.tab, {
    [styles[`tab${currentColor}`]]: Boolean(currentColor),
  })

  return (
    <Tabs.Root value={activeTab || ''} defaultValue={values[0].value} onValueChange={handleTabChange}>
      <Tabs.List className={styles.TabsList}>
        {values.map((tabData) => (
          <Tabs.Trigger key={tabData.value} value={tabData.value} className={buttonClasses}>
            {tabData.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}

export default Tab
