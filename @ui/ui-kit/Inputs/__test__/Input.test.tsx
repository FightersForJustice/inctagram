import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import { MainInput } from '../Inputs'
describe('Input renders correctly', () => {
  afterEach(cleanup)

  const testError = 'test error message'
  const testLabel = 'test label'

  it('should render default correctly', () => {
    const { asFragment } = render(<MainInput />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render error correctly', () => {
    const { asFragment } = render(<MainInput errormessages={[testError]} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render disabled correctly', () => {
    const { asFragment } = render(<MainInput disabled />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render with label correctly', () => {
    const { asFragment } = render(<MainInput label={testLabel} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('Input', () => {
  afterEach(cleanup)

  const testError = 'test error message'
  const testLabel = 'test label'
  const testId = 'test id'
  const testPlaceholder = 'test placeholder'

  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<MainInput placeholder={testPlaceholder} />)

    const inputElement = getByPlaceholderText(testPlaceholder)

    expect(inputElement).toBeInTheDocument()
  })

  it('should be disabled when disabled prop is true', () => {
    const { getByPlaceholderText } = render(<MainInput placeholder={testPlaceholder} disabled />)

    const inputElement = getByPlaceholderText(testPlaceholder)

    expect(inputElement).toBeDisabled()
  })

  it('should display error', () => {
    const { getByPlaceholderText } = render(<MainInput placeholder={testPlaceholder} errormessages={[testError]} />)

    const inputElement = getByPlaceholderText(testPlaceholder)

    expect(inputElement).toHaveClass('inputError')
  })

  it('should focus input when it`s clicked', () => {
    const { getByPlaceholderText } = render(<MainInput placeholder={testPlaceholder} errormessages={[testError]} />)

    const inputElement = getByPlaceholderText(testPlaceholder)
    fireEvent.click(inputElement)

    expect(inputElement).toBeEnabled()
  })

  it('should focus input when label clicked', () => {
    const { getByPlaceholderText } = render(<MainInput id={testId} label={testLabel} placeholder={testPlaceholder} />)

    const labelElement = screen.getByText(testLabel)
    const inputElement = getByPlaceholderText(testPlaceholder)
    fireEvent.click(labelElement)

    expect(inputElement).toBeEnabled()
  })

  it('should display error message on screen', () => {
    const { getByText } = render(<MainInput placeholder={testPlaceholder} errormessages={[testError]} />)
    const errorElement = getByText(testError)

    expect(errorElement).toBeInTheDocument()
  })
})
