import * as Tabs from '@radix-ui/react-tabs'
import style from './Tab.module.scss'

export type TabType = {
  title: string
  value: string
}

export const Tab: React.FC<TabType> = ({ title, value }) => {
  return (
    <Tabs.Trigger className={style.tab} value={value}>
      {title}
    </Tabs.Trigger>
  )
}
