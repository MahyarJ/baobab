import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders label correctly', () => {
    const { getByText } = render(<Button label="Show Anything" />);
    const label = getByText('Show Anything');
    expect(label).toBeInTheDocument();
  });

  it('handles event on clicks', async () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button label="test" onClick={handleClick} />);
    fireEvent.click(getByText('test'));
    expect(handleClick).toBeCalledTimes(1);
  });
});
