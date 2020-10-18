import React from 'react';
import { render } from '@testing-library/react';
import TreeBox from './TreeBox';

describe('TreeBox', () => {
  it('renders button with label Show Image', () => {
    const { getByText } = render(<TreeBox image="http://foo.com" />);
    const button = getByText('Show Image');
    expect(button).toBeInTheDocument();
  });

  it('does not render image on first render', () => {
    const { container } = render(<TreeBox image="http://foo.com" />);
    const image = container.querySelector('img');
    expect(image).toBeNull();
  });
});
