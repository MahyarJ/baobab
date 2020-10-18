import React from 'react';
import { render } from '@testing-library/react';
import ImageBox from './ImageBox';

describe('ImageBox', () => {
  it('renders button with label Show Image', () => {
    const { getByText } = render(<ImageBox image="http://foo.com" />);
    const button = getByText('Show Image');
    expect(button).toBeInTheDocument();
  });

  it('does not render image on first render', () => {
    const { container } = render(<ImageBox image="http://foo.com" />);
    const image = container.querySelector('img');
    expect(image).toBeNull();
  });
});
