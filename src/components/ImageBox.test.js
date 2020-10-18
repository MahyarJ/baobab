import React from 'react';
import { render } from '@testing-library/react';
import ImageBox from './ImageBox';

describe('ImageBox', () => {
  it('renders childrens correctly', () => {
    const { getByTestId } = render(<ImageBox />);
    // We have a 1. title, 2. subtitle and a button
    expect(getByTestId('imageBox').children.length).toEqual(3);
  });

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
