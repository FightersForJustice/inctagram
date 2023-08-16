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

  it('renders correctly', () => {
    render(<MainDatePicker />)

    expect(screen.getByPlaceholderText('MM/DD/YYYY')).toBeInTheDocument()
  })

  it('should be disabled when disabled prop is true', () => {
    render(<MainDatePicker disabled />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')
    expect(datePickerElement).toBeDisabled()
  })

  it('should display error', () => {
    render(<MainDatePicker value="99/99/9999" />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')
    expect(datePickerElement.parentElement).toHaveClass('Mui-error')
  })

  it('should display value', () => {
    render(<MainDatePicker value="12/12/2000" />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')
    expect(datePickerElement).toHaveAttribute('value')
    expect(datePickerElement.getAttribute('value')).toBe('12/12/2000')
  })

  it('should display lower border value', () => {
    render(<MainDatePicker value="01/01/1900" />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')

    expect(datePickerElement).toHaveAttribute('value')
    expect(datePickerElement.parentElement).not.toHaveClass('Mui-error')
    expect(datePickerElement.getAttribute('value')).toBe('01/01/1900')
  })

  it('should display lower out of border value with error', () => {
    render(<MainDatePicker value="12/31/1899" />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')

    expect(datePickerElement).toHaveAttribute('value')
    expect(datePickerElement.parentElement).toHaveClass('Mui-error')
    expect(datePickerElement.getAttribute('value')).toBe('12/31/1899')
  })

  it('should display higher border value', () => {
    render(<MainDatePicker value="12/31/2099" />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')

    expect(datePickerElement).toHaveAttribute('value')
    expect(datePickerElement.parentElement).not.toHaveClass('Mui-error')
    expect(datePickerElement.getAttribute('value')).toBe('12/31/2099')
  })

  it('should display higher out of border value with error', () => {
    render(<MainDatePicker value="01/01/2100" />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')

    expect(datePickerElement).toHaveAttribute('value')
    expect(datePickerElement.parentElement).toHaveClass('Mui-error')
    expect(datePickerElement.getAttribute('value')).toBe('01/01/2100')
  })

  it('should open picker when calendar button clicked', () => {
    render(<MainDatePicker />)

    const datePickerButtonElement = screen.getByRole('button')
    fireEvent.click(datePickerButtonElement)
    expect(screen.getByRole('grid')).toBeInTheDocument()
  })

  it('should focus input when it`s clicked', () => {
    render(<MainDatePicker />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')
    fireEvent.click(datePickerElement)
    expect(datePickerElement).toBeEnabled()
  })

  it('should focus input when label clicked', () => {
    render(
      <div>
        <label htmlFor="id" id="label">
          label
        </label>
        <MainDatePicker id="id" />
      </div>
    )

    const labelElement = screen.getByText('label')
    fireEvent.click(labelElement)
    expect(screen.getByPlaceholderText('MM/DD/YYYY')).toBeEnabled()
  })

  it('should change the date when "number" button clicked', () => {
    render(<MainDatePicker value="10/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByRole('gridcell', { name: '24' }))
    expect(screen.getByPlaceholderText('MM/DD/YYYY').getAttribute('value')).toBe('10/24/2000')
  })

  it('should change the month when "next month" button clicked', () => {
    render(<MainDatePicker value="10/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByTitle('Next month'))
    fireEvent.click(screen.getAllByRole('gridcell', { name: '20' })[0])
    expect(screen.getByPlaceholderText('MM/DD/YYYY').getAttribute('value')).toBe('11/20/2000')
  })

  it('should change the month when "previous month" button clicked', () => {
    render(<MainDatePicker value="10/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByTitle('Previous month'))
    fireEvent.click(screen.getAllByRole('gridcell', { name: '20' })[0])
    expect(screen.getByPlaceholderText('MM/DD/YYYY').getAttribute('value')).toBe('09/20/2000')
  })

  it('should change the year when "next month" button clicked on last month', () => {
    render(<MainDatePicker value="12/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByTitle('Next month'))
    fireEvent.click(screen.getAllByRole('gridcell', { name: '20' })[0])
    expect(screen.getByPlaceholderText('MM/DD/YYYY').getAttribute('value')).toBe('01/20/2001')
  })

  it('should change the year when "previous month" button clicked on first month', () => {
    render(<MainDatePicker value="01/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByTitle('Previous month'))
    fireEvent.click(screen.getAllByRole('gridcell', { name: '20' })[0])
    expect(screen.getByPlaceholderText('MM/DD/YYYY').getAttribute('value')).toBe('12/20/1999')
  })

  it('should disable "Previous month" button on first month of first year', () => {
    render(<MainDatePicker value="01/01/1900" />)

    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByTitle('Previous month')).toBeDisabled()
  })

  it('should disable "Next month" button on last month of last year', () => {
    render(<MainDatePicker value="12/31/2099" />)

    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByTitle('Next month')).toBeDisabled()
  })

  it('should open year selector when "year" arrow button clicked', () => {
    render(<MainDatePicker value="01/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByLabelText('calendar view is open, switch to year view'))
    expect(screen.getByText('1900')).toBeInTheDocument()
    expect(screen.getByText('2099')).toBeInTheDocument()
  })

  it('should change year when "year" button clicked', () => {
    render(<MainDatePicker value="10/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByLabelText('calendar view is open, switch to year view'))
    fireEvent.click(screen.getByText('1950'))
    expect(screen.getByPlaceholderText('MM/DD/YYYY').getAttribute('value')).toBe('10/10/1950')
  })
  it('should focus number button', () => {
    render(<MainDatePicker value="10/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    const dateNumberButton = screen.getByRole('gridcell', { name: '24' })
    fireEvent.focus(dateNumberButton)
    expect(dateNumberButton).toHaveClass('Mui-focusVisible')
  })

  it('should have "selected" class on selected number button', () => {
    render(<MainDatePicker value="10/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    const dateNumberButton = screen.getByRole('gridcell', { name: '10' })
    expect(dateNumberButton).toHaveClass('Mui-selected')
  })
})
