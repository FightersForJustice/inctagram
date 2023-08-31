import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CheckBox } from '../CheckBox'; 

describe('CheckBox component', () => {
  it('renders unchecked checkbox by default', () => {
    const { getByLabelText } = render(<CheckBox>Check me</CheckBox>);
    const checkbox = getByLabelText('Check me');
    expect(checkbox).not.toBeChecked();
  });

  it('renders checked checkbox when "checked" prop is true', () => {
    const { getByLabelText } = render(<CheckBox checked>Check me</CheckBox>);
    const checkbox = getByLabelText('Check me');
    expect(checkbox).toBeChecked();
  });

  it('renders disabled checkbox when "disabled" prop is true', () => {
    const { getByLabelText } = render(<CheckBox disabled>Check me</CheckBox>);
    const checkbox = getByLabelText('Check me');
    expect(checkbox).toBeDisabled();
  });

  it('matches snapshot', () => {
    const { container } = render(<CheckBox>Check me</CheckBox>);
    expect(container).toMatchSnapshot();
  });
});