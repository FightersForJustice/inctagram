import React from 'react'
import { render, fireEvent, cleanup, screen, waitFor } from '@testing-library/react'
import { TextArea } from './Textarea'
import styles from './Textarea.module.scss'

const value = 'type sth here...'

describe('Textarea', () => {
  const setup = (props = {}) => {
    const defaultProps = {
      onChange: jest.fn(),
      onFocus: jest.fn(),
      disabled: false,
      ...props,
    }

    render(<TextArea {...defaultProps} />)

    return {
      textarea: screen.getByRole('textbox'),
      ...defaultProps,
    }
  }

  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    const { textarea } = setup()

    expect(textarea).toBeInTheDocument()
    expect(textarea).toMatchSnapshot()
  })

  it('changes value and calls onChange', () => {
    const { textarea, onChange } = setup()
    fireEvent.change(textarea, { target: { value } })

    expect(textarea).toHaveValue(value)
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  //   it('does not respond to events when disabled', () => {
  //     const { textarea, onChange, onFocus } = setup({ disabled: true })

  //     fireEvent.change(textarea, { target: { value } })
  //     fireEvent.focus(textarea)

  //     expect(onChange).not.toHaveBeenCalled()
  //     expect(onFocus).not.toHaveBeenCalled()
  //   })

  it('is disabled when disabled prop is true', () => {
    const { textarea } = setup({ disabled: true })

    expect(textarea).toBeDisabled()
  })
  it('is not disabled when disabled prop is missing', () => {
    const { textarea } = setup()

    expect(textarea).not.toBeDisabled()
  })
  it('is not disabled when disabled prop is false', () => {
    const { textarea } = setup({ disabled: false })

    expect(textarea).not.toBeDisabled()
  })

  it('has default styles when color prop is not provided', () => {
    const { textarea } = setup()

    expect(textarea).toHaveClass(styles.Default)
  })
  it('has Active styles when Active color prop is provided', () => {
    const { textarea } = setup({ color: 'Active' })

    expect(textarea).toHaveClass(styles.Active)
    expect(textarea).toMatchSnapshot()
  })
  it('has Error styles when Error color prop is provided', () => {
    const { textarea } = setup({ color: 'Error' })

    expect(textarea).toHaveClass(styles.Error)
    expect(textarea).toMatchSnapshot()
  })
})
