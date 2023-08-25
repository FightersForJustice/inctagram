import React from 'react'
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
import { TextArea } from '../Textarea'
import styles from './Textarea.module.scss'
import { TEXTAEREA_COLORS } from '../constants'

const setupTextArea = (props = {}) => {
  const defaultProps = {
    onChange: jest.fn(),
    onFocus: jest.fn(),
    ...props,
  }

  render(<TextArea {...defaultProps} />)

  return {
    textarea: screen.getByRole('textbox'),
    ...defaultProps,
  }
}

const value = 'type sth here...'

describe('TextArea snapshots \t', () => {
  afterEach(cleanup)

  const textProps = ['', 'Some text', 'Custom placeholder']
  const colorProps = [TEXTAEREA_COLORS.DEFAULT, TEXTAEREA_COLORS.ACTIVE, TEXTAEREA_COLORS.ERROR]
  const booleanProps = [true, false]

  textProps.forEach((text) => {
    colorProps.forEach((color) => {
      booleanProps.forEach((hasError) => {
        booleanProps.forEach((disabled) => {
          booleanProps.forEach((hovered) => {
            it(`text: "${text}", color: ${color}, hasError: ${hasError}, disabled: ${disabled}, hovered: ${hovered}`, () => {
              const props = {
                value: text,
                color: color,
                hasError: hasError,
                disabled: disabled,
                hovered: hovered,
              }
              const { asFragment } = render(<TextArea {...props} />)

              expect(asFragment()).toMatchSnapshot()
            })
          })
        })
      })
    })
  })
})

describe('Textarea', () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  it('does not respond to events when disabled', () => {
    const { textarea, onChange } = setupTextArea({ disabled: true })

    fireEvent.change(textarea, { target: { value } })
    fireEvent.focus(textarea)

    expect(onChange).not.toHaveBeenCalled()
  })

  it('renders correctly', () => {
    const { textarea } = setupTextArea()

    expect(textarea).toBeInTheDocument()
  })

  it('changes value and calls onChange', () => {
    const { textarea, onChange } = setupTextArea()
    fireEvent.change(textarea, { target: { value } })

    expect(textarea).toHaveValue(value)
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('renders label', () => {
    const label = 'Test Label'
    const { textarea } = setupTextArea({ label })
    const labelElement = screen.getByText(label)

    expect(labelElement).toBeInTheDocument()
    expect(labelElement).toBeVisible()
  })

  it('displays error message when hasError is true', () => {
    const errorMessage = 'Test Error Message'
    setupTextArea({ hasError: true, errorMessage })

    const error = screen.getByText(errorMessage)
    expect(error).toBeInTheDocument()
  })

  it('is disabled when disabled prop is true', () => {
    const { textarea } = setupTextArea({ disabled: true })

    expect(textarea).toBeDisabled()
  })
  it('is not disabled when disabled prop is missing', () => {
    const { textarea } = setupTextArea()

    expect(textarea).not.toBeDisabled()
  })
  it('is not disabled when disabled prop is false', () => {
    const { textarea } = setupTextArea({ disabled: false })

    expect(textarea).not.toBeDisabled()
  })

  it('renders placeholder', () => {
    const { textarea } = setupTextArea()

    expect(textarea).toHaveAttribute('placeholder')
  })
  it('checks placeholder value', () => {
    render(<TextArea />)
    const textarea = screen.getByRole('textbox')

    expect(textarea).toHaveAttribute('placeholder')
    expect(textarea).toMatchSnapshot()
  })

  it('has default styles when color prop is not provided', () => {
    const { textarea } = setupTextArea()

    expect(textarea).toHaveClass(styles.Default)
  })
  it('has Active styles when Active color prop is provided', () => {
    const { textarea } = setupTextArea({ color: 'Active' })

    expect(textarea).toHaveClass(styles.Active)
  })
  it('applies Active class when hovered', () => {
    setupTextArea({ hovered: true })

    const textareaElement = screen.getByRole('textbox')
    expect(textareaElement).toHaveClass('Active')
  })
  it('does not apply Active class when not hovered', () => {
    setupTextArea({ hovered: false })

    const textareaElement = screen.getByRole('textbox')
    expect(textareaElement).not.toHaveClass('Active')
  })
  it('has Error styles when Error color prop is provided', () => {
    const { textarea } = setupTextArea({ color: 'Error' })

    expect(textarea).toHaveClass(styles.Error)
  })
})
