import React from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import Modal from '../Modal'
import { CLOSE_MODAL_TEST_ID } from '../constants'

const title = 'Test Modal'
const children = <div>Some Text</div>
const setActive = jest.fn()

const activeProps = [true, false]
const closeProps = [true, false]

describe('render snapshot correctly \t', () => {
  afterEach(cleanup)

  activeProps.forEach((active) => {
    closeProps.forEach((close) => {
      it(`active:${active} \t
      setActive: ${setActive} \t
      title: ${title} \t
      close: ${close} \t
            `, () => {
        const props = {
          active: active,
          setActive: setActive,
          title: title,
          close: close,
        }
        const { asFragment } = render(<Modal {...props}>{children}</Modal>)

        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})

describe('Modal Component', () => {
  afterEach(cleanup)

  it('renders correctly with title and children', () => {
    render(
      <Modal active={true} setActive={() => {}} title={title}>
        {children}
      </Modal>
    )

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText('Some Text')).toBeInTheDocument()
  })

  it('closes when close button is clicked', () => {
    render(
      <Modal active={true} setActive={setActive} title={title} close={true}>
        {children}
      </Modal>
    )

    const closeButton = screen.getByTestId(CLOSE_MODAL_TEST_ID)
    fireEvent.click(closeButton)
    expect(setActive).toHaveBeenCalledWith(false)
  })

  it('does not show close button when "close" prop is not provided', () => {
    render(
      <Modal active={true} setActive={() => {}} title={title}>
        {children}
      </Modal>
    )

    expect(screen.queryByTestId('close-button')).not.toBeInTheDocument()
  })

  it('renders correctly when children is null', () => {
    render(
      <Modal active={true} setActive={() => {}} title={title}>
        {null}
      </Modal>
    )

    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
