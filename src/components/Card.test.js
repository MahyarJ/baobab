import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Card>
        <div>test</div>
      </Card>,
    );
    const div = getByText('test');
    expect(div).toBeInTheDocument();
  });
});
