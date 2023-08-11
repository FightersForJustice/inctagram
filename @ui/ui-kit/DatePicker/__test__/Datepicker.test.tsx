import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import { MainDatePicker } from '../DatePicker'
describe('date picker renders correctly', () => {
  it('date picker render', () => {
    const { asFragment } = render(<MainDatePicker />)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('Date picker', () => {
  afterEach(cleanup)

  const onClickMock = jest.fn()

  it('renders correctly', () => {
    render(<MainDatePicker />)

    expect(screen.getByPlaceholderText('MM/DD/YYYY')).toBeInTheDocument()
  })

  it('disabled works', () => {
    render(<MainDatePicker disabled  />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')
    expect(datePickerElement).toBeDisabled()
  })

  it('error displays', () => {
    render(<MainDatePicker value='99/99/9999' />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')
    expect(datePickerElement.parentElement).toHaveClass('Mui-error')
  })

  it('value dispays', () => {
    render(<MainDatePicker value='12/12/2000' />)
    
    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')
    expect(datePickerElement).toHaveAttribute('value')
    expect(datePickerElement.getAttribute('value')).toBe('12/12/2000')
  })

  it('lower border value dispays', () => {
    render(<MainDatePicker value='01/01/1900' />)
    
    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')

    expect(datePickerElement).toHaveAttribute('value')
    expect(datePickerElement.parentElement).not.toHaveClass('Mui-error')
    expect(datePickerElement.getAttribute('value')).toBe('01/01/1900')
  })

  it('lower out of border value dispays with error', () => {
    render(<MainDatePicker value='12/31/1899' />)
    
    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')

    expect(datePickerElement).toHaveAttribute('value')
    expect(datePickerElement.parentElement).toHaveClass('Mui-error')
    expect(datePickerElement.getAttribute('value')).toBe('12/31/1899')
  })

  it('higher border value dispays', () => {
    render(<MainDatePicker value='12/31/2099' />)
    
    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')

    expect(datePickerElement).toHaveAttribute('value')
    expect(datePickerElement.parentElement).not.toHaveClass('Mui-error')
    expect(datePickerElement.getAttribute('value')).toBe('12/31/2099')
  })

  it('higher out of border value dispays with error', () => {
    render(<MainDatePicker value='01/01/2100' />)
    
    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')

    expect(datePickerElement).toHaveAttribute('value')
    expect(datePickerElement.parentElement).toHaveClass('Mui-error')
    expect(datePickerElement.getAttribute('value')).toBe('01/01/2100')
  })

  it('calendar button open picker', () => {
    render(<MainDatePicker />)
    
    const datePickerButtonElement = screen.getByRole('button')
    fireEvent.click(datePickerButtonElement)
    expect(screen.getByRole('grid')).toBeInTheDocument()
  })
})