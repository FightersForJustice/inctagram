import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { Button } from '../Button'
import { BUTTON_COLORS } from '../constants'

describe('render snapshot correctly \t', () => {
  afterEach(cleanup)

  const textProps = 'clickMe'
  const colorProps = [BUTTON_COLORS.BASIC, BUTTON_COLORS.GHOST, BUTTON_COLORS.OUTLINED, BUTTON_COLORS.PRIMARY]
  const disabledProps = [true, false]

  colorProps.forEach((color) => {
    disabledProps.forEach((disabled) => {
      it(`text:${textProps} \t
            color: ${color} \t
            disabled: ${disabled} \t
            `, () => {
        const props = {
          text: textProps,
          color: color,
          disabled: disabled,
        }
        const { asFragment } = render(<Button {...props} />)

        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})

describe('Button', () => {
  afterEach(cleanup)
  const onClickMock = jest.fn()

  it('renders correctly', () => {
    const { getByText } = render(<Button text="Click me" />)

    const buttonElement = getByText('Click me')
    expect(buttonElement).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', () => {
    const { getByText } = render(<Button text="Click me" onClick={onClickMock} />)

    const buttonElement = getByText('Click me')
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('applies custom color class', () => {
    const { container } = render(<Button text="Click me" color={BUTTON_COLORS.BASIC} />)

    const buttonElement = container.querySelector('button')
    expect(buttonElement).toHaveClass('button' + BUTTON_COLORS.BASIC)
  })

  it('is disabled when disabled prop is true', () => {
    const { container } = render(<Button text="Click me" disabled={true} />)

    const buttonElement = container.querySelector('button')
    expect(buttonElement).toBeDisabled()
  })

  it('defaults to PRIMARY color when color prop is missing', () => {
    const { container } = render(<Button text="Click me" />)

    const buttonElement = container.querySelector('button')
    expect(buttonElement).toHaveClass('button' + BUTTON_COLORS.PRIMARY)
  })

  it('does not call onClick handler when disabled', () => {
    const { getByText } = render(<Button text="Click me" onClick={onClickMock} disabled={true} />)

    const buttonElement = getByText('Click me')
    fireEvent.click(buttonElement)
    expect(onClickMock).not.toHaveBeenCalled()
  })
})
