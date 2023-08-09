import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { TAB_COLORS } from './constants'
import styles from './Tabs.module.scss'
import classNames from 'classnames'

interface TabData {
  value: string
  label: string
  disabled?: boolean
}

interface TabProps extends TabData {
  color: (typeof TAB_COLORS)[keyof typeof TAB_COLORS]
  isActive: boolean
  onClick: () => void
}

const Tab: React.FC<TabProps> = ({ value, label, color, disabled, onClick }) => {
  const buttonClasses = classNames(styles.tab, {
    [styles[`tab${color}`]]: Boolean(color),
    [styles.disabled]: disabled,
  })

  return (
    <Tabs.Trigger value={value} className={buttonClasses} disabled={disabled} onClick={() => !disabled && onClick()}>
      {label}
    </Tabs.Trigger>
  )
}

export default Tab
