import React from 'react';
import { render, screen } from '@testing-library/react';
import ShowCase from './ShowCase';

describe('ShowCase', () => {
  it('Should be in loading state on load', () => {
    render(<ShowCase />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
