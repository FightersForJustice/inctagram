import React from 'react'
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
import { TextArea } from './Textarea'
import styles from './Textarea.module.scss'
import { TEXTAEREA_COLORS } from './constants'

describe('Textarea', () => {
  const value = 'type sth here...'
  const colorProps = [TEXTAEREA_COLORS.DEFAULT, TEXTAEREA_COLORS.ACTIVE, TEXTAEREA_COLORS.ERROR]

  colorProps.forEach((color) => {
    colorProps.forEach((disabled) => {
      it(`renders correctly \t
                color: ${color} \t
                disabled: ${disabled} \t
                `, () => {
        const placeholder = 'Enter your text...'

        const { textarea, ...defaultProps } = setup({ color, disabled, placeholder })
        expect(textarea).toBeInTheDocument()
        expect(textarea).toMatchSnapshot()
      })
    })
  })

  const setup = (props = {}) => {
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

  //doesn't work correctly

  // it('does not respond to events when disabled', () => {
  //   const { textarea, onChange, onFocus } = setup({ disabled: true })

  //   fireEvent.change(textarea, { target: { value } })
  //   fireEvent.focus(textarea)

  //   expect(onChange).not.toHaveBeenCalled()
  //   expect(onFocus).not.toHaveBeenCalled()
  // })

  it('renders correctly', () => {
    const { textarea } = setup()

    expect(textarea).toBeInTheDocument()
  })

  it('changes value and calls onChange', () => {
    const { textarea, onChange } = setup()
    fireEvent.change(textarea, { target: { value } })

    expect(textarea).toHaveValue(value)
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('renders label', () => {
    const label = 'Test Label'
    const { textarea } = setup({ label })
    const labelElement = screen.getByText(label)

    expect(labelElement).toBeInTheDocument()
    expect(labelElement).toBeVisible()
  })

  it('displays error message when hasError is true', () => {
    const errorMessage = 'Test Error Message'
    setup({ hasError: true, errorMessage })

    const error = screen.getByText(errorMessage)
    expect(error).toBeInTheDocument()
  })

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

  it('renders placeholder', () => {
    const { textarea } = setup()

    expect(textarea).toHaveAttribute('placeholder')
  })
  it('checks placeholder value', () => {
    render(<TextArea />)
    const textarea = screen.getByRole('textbox')

    expect(textarea).toHaveAttribute('placeholder')
    expect(textarea).toMatchSnapshot()
  })

  it('has default styles when color prop is not provided', () => {
    const { textarea } = setup()

    expect(textarea).toHaveClass(styles.Default)
  })
  it('has Active styles when Active color prop is provided', () => {
    const { textarea } = setup({ color: 'Active' })

    expect(textarea).toHaveClass(styles.Active)
  })
  it('applies Active class when hovered', () => {
    setup({ hovered: true })

    const textareaElement = screen.getByRole('textbox')
    expect(textareaElement).toHaveClass('Active')
  })
  it('does not apply Active class when not hovered', () => {
    setup({ hovered: false })

    const textareaElement = screen.getByRole('textbox')
    expect(textareaElement).not.toHaveClass('Active')
  })
  it('has Error styles when Error color prop is provided', () => {
    const { textarea } = setup({ color: 'Error' })

    expect(textarea).toHaveClass(styles.Error)
  })

  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })
})
