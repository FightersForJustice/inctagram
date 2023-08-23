import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tab } from '../Tab'
import * as Tabs from '@radix-ui/react-tabs'

describe('Tab Component', () => {
  const tabData = {
    value: 'tab1',
    label: 'Tab 1',
    disabled: false,
  }

  it('renders tab label', () => {
    const { getByText } = render(
      <Tabs.Root>
        <Tabs.List>
          <Tab {...tabData} />
        </Tabs.List>
      </Tabs.Root>
    )
    const tabLabel = getByText('Tab 1')
    expect(tabLabel).toBeInTheDocument()
  })

  it('applies disabled styles when disabled', () => {
    const { getByText } = render(
      <Tabs.Root>
        <Tabs.List>
          <Tab {...tabData} disabled />
        </Tabs.List>
      </Tabs.Root>
    )
    const tabLabel = getByText('Tab 1')
    expect(tabLabel).toHaveClass('disabled')
  })
})
