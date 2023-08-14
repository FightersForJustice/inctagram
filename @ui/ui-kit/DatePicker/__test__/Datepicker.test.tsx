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

  it('disabled works', () => {
    render(<MainDatePicker disabled />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')
    expect(datePickerElement).toBeDisabled()
  })

  it('error displays', () => {
    render(<MainDatePicker value="99/99/9999" />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')
    expect(datePickerElement.parentElement).toHaveClass('Mui-error')
  })

  it('value displays', () => {
    render(<MainDatePicker value="12/12/2000" />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')
    expect(datePickerElement).toHaveAttribute('value')
    expect(datePickerElement.getAttribute('value')).toBe('12/12/2000')
  })

  it('lower border value displays', () => {
    render(<MainDatePicker value="01/01/1900" />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')

    expect(datePickerElement).toHaveAttribute('value')
    expect(datePickerElement.parentElement).not.toHaveClass('Mui-error')
    expect(datePickerElement.getAttribute('value')).toBe('01/01/1900')
  })

  it('lower out of border value displays with error', () => {
    render(<MainDatePicker value="12/31/1899" />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')

    expect(datePickerElement).toHaveAttribute('value')
    expect(datePickerElement.parentElement).toHaveClass('Mui-error')
    expect(datePickerElement.getAttribute('value')).toBe('12/31/1899')
  })

  it('higher border value displays', () => {
    render(<MainDatePicker value="12/31/2099" />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')

    expect(datePickerElement).toHaveAttribute('value')
    expect(datePickerElement.parentElement).not.toHaveClass('Mui-error')
    expect(datePickerElement.getAttribute('value')).toBe('12/31/2099')
  })

  it('higher out of border value displays with error', () => {
    render(<MainDatePicker value="01/01/2100" />)

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

  it('click input focusing date picker', () => {
    render(<MainDatePicker />)

    const datePickerElement = screen.getByPlaceholderText('MM/DD/YYYY')
    fireEvent.click(datePickerElement)
    expect(datePickerElement).toBeEnabled()
  })

  it('click on label focusing date picker', () => {
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

  it('clicking on the "number" button changes the date', () => {
    render(<MainDatePicker value="10/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByRole('gridcell', { name: '24' }))
    expect(screen.getByPlaceholderText('MM/DD/YYYY').getAttribute('value')).toBe('10/24/2000')
  })

  it('clicking on the "next month" button changes the month', async () => {
    render(<MainDatePicker value="10/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByTitle('Next month'))
    fireEvent.click(screen.getAllByRole('gridcell', { name: '20' })[0])
    expect(screen.getByPlaceholderText('MM/DD/YYYY').getAttribute('value')).toBe('11/20/2000')
  })

  it('clicking on the "previous month" button changes the month', async () => {
    render(<MainDatePicker value="10/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByTitle('Previous month'))
    fireEvent.click(screen.getAllByRole('gridcell', { name: '20' })[0])
    expect(screen.getByPlaceholderText('MM/DD/YYYY').getAttribute('value')).toBe('09/20/2000')
  })

  it('clicking on the "next month" button on last month changes year', async () => {
    render(<MainDatePicker value="12/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByTitle('Next month'))
    fireEvent.click(screen.getAllByRole('gridcell', { name: '20' })[0])
    expect(screen.getByPlaceholderText('MM/DD/YYYY').getAttribute('value')).toBe('01/20/2001')
  })

  it('clicking on the "previous month" button on first month changes year', async () => {
    render(<MainDatePicker value="01/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByTitle('Previous month'))
    fireEvent.click(screen.getAllByRole('gridcell', { name: '20' })[0])
    expect(screen.getByPlaceholderText('MM/DD/YYYY').getAttribute('value')).toBe('12/20/1999')
  })

  it('"Previous month" button is disabled on first month of first year', async () => {
    render(<MainDatePicker value="01/01/1900" />)

    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByTitle('Previous month')).toBeDisabled()
  })

  it('"Next month" button is disabled on last month of last year', async () => {
    render(<MainDatePicker value="12/31/2099" />)

    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByTitle('Next month')).toBeDisabled()
  })

  it('clicking on the "year arrow" button open year selector', async () => {
    render(<MainDatePicker value="01/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByLabelText('calendar view is open, switch to year view'))
    expect(screen.getByText('1900')).toBeInTheDocument()
    expect(screen.getByText('2099')).toBeInTheDocument()
  })

  it('clicking on the "year" button change date', async () => {
    render(<MainDatePicker value="10/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByLabelText('calendar view is open, switch to year view'))
    fireEvent.click(screen.getByText('1950'))
    expect(screen.getByPlaceholderText('MM/DD/YYYY').getAttribute('value')).toBe('10/10/1950')
  })
  it('focusing number button works', async () => {
    render(<MainDatePicker value="10/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    const dateNumberButton = screen.getByRole('gridcell', { name: '24' })
    fireEvent.focus(dateNumberButton)
    expect(dateNumberButton).toHaveClass('Mui-focusVisible')
  })

  it('selected number button have "selected" class', async () => {
    render(<MainDatePicker value="10/10/2000" />)

    fireEvent.click(screen.getByRole('button'))
    const dateNumberButton = screen.getByRole('gridcell', { name: '10' })
    expect(dateNumberButton).toHaveClass('Mui-selected')
  })
})
