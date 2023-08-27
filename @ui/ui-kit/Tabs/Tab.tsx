import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { TAB_COLORS } from '@ui/ui-kit/Tabs/constants'
import styles from '@ui/ui-kit/Tabs/Tabs.module.scss'
import classNames from 'classnames'

interface TabData {
  value: string
  label: string
  disabled?: boolean
}

interface TabProps extends TabData {
  disabled?: boolean
}

export const Tab: React.FC<TabProps> = ({ value, label, disabled }) => {
  const buttonClasses = classNames(styles.tab, {
    [styles.disabled]: disabled,
  })

  return (
    <Tabs.Trigger value={value} className={buttonClasses} disabled={disabled}>
      {label}
    </Tabs.Trigger>
  )
}
