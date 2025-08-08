import React from 'react';
import { render, screen } from '@testing-library/react';
import ExampleComponent from '../src/components/ExampleComponent';

describe('ExampleComponent', () => {
  test('renders ExampleComponent', () => {
    render(<ExampleComponent />);
    const element = screen.getByText(/example component/i);
    expect(element).toBeInTheDocument();
  });

  // Add more tests as needed
});