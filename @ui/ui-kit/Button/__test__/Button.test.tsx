import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Button } from '../Button'
import { BUTTON_COLORS } from '../constants'


describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button text="Click me" />)
    const buttonElement = getByText('Click me')

    expect(buttonElement).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(<Button text="Click me" onClick={onClickMock} />)
    const buttonElement = getByText('Click me')

    fireEvent.click(buttonElement)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('applies custom color class', () => {
    const { container } = render(<Button text="Click me" color={BUTTON_COLORS.BASIC} />)
    const buttonElement = container.querySelector('button')

    expect(buttonElement).toHaveClass("button" + BUTTON_COLORS.BASIC)
  })

  it('is disabled when disabled prop is true', () => {
    const { container } = render(<Button text="Click me" disabled={true} />)
    const buttonElement = container.querySelector('button')

    expect(buttonElement).toBeDisabled()
  })
})
