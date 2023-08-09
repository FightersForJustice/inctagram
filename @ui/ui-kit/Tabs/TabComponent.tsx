import React from 'react'
import TabWrapper from './TabWrapper'
import { tabsData } from './constants'

const TabComponent = () => {
  return (
    <div>
      <h1>Tab Example</h1>
      <TabWrapper values={tabsData} />
    </div>
  )
}

export default TabComponent
