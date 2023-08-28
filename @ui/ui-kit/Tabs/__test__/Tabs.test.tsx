import React from 'react'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import * as Tabs from '@radix-ui/react-tabs'
import { Tab } from '../Tab'
import styles from '@ui/ui-kit/Tabs/Tabs.module.scss'

import { TAB_COLORS } from '../constants'

const setupTab = (props = {}) => {
  const defaultProps = {
    value: 'tab1',
    label: 'Tab 1',
    ...props,
  }

  render(
    <Tabs.Root defaultValue={defaultProps.value}>
      <Tabs.List>
        <Tab {...defaultProps} />
      </Tabs.List>
    </Tabs.Root>
  )

  return {
    tab: screen.getByText(defaultProps.label),
    ...defaultProps,
  }
}

describe('Tab', () => {
  afterEach(cleanup)

  it('renders correctly', () => {
    const { tab } = setupTab()

    expect(tab).toBeInTheDocument()
  })

  it('renders with label', () => {
    const { label } = setupTab()

    expect(screen.getByText(label)).toBeInTheDocument()
  })

  it('has default styles', () => {
    const { tab } = setupTab()

    expect(tab).toHaveClass(styles.tab)
  })

  it('applies disabled class when disabled prop is true', () => {
    const { tab } = setupTab({ disabled: true })

    expect(tab).toHaveClass(styles.disabled)
  })

  it('does not apply disabled class when disabled prop is false', () => {
    const { tab } = setupTab({ disabled: false })

    expect(tab).not.toHaveClass(styles.disabled)
  })
  it('displays the correct label', () => {
    const { label } = setupTab()

    expect(screen.getByText(label)).toBeInTheDocument()
  })
  it('does not trigger onClick event when disabled', () => {
    const onClick = jest.fn()
    const { tab } = setupTab({ disabled: true, onClick })

    fireEvent.click(tab)

    expect(onClick).not.toHaveBeenCalled()
  })
  it('becomes active when selected', () => {
    const { tab, label } = setupTab()
    const activeTab = screen.getByRole('tab', { selected: true, name: label })

    expect(activeTab).toBeInTheDocument()

    fireEvent.click(tab)

    expect(activeTab).toHaveAttribute('data-state', 'active')
  })

  it('has correct ARIA roles and attributes', () => {
    const { tab, label } = setupTab()
    const tabButton = screen.getByRole('tab', { name: label })

    expect(tab).toBe(tabButton)

    fireEvent.click(tab)

    expect(tabButton).toHaveAttribute('aria-selected', 'true')
  })
})
const colorProps = [TAB_COLORS.PRIMARY, TAB_COLORS.GHOST]
const disabledProps = [true, false]
