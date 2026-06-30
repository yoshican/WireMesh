// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WireMesh title', () => {
    render(<App />);
    const titleElement = screen.getByText(/WireMesh/i);
    expect(titleElement).toBeInTheDocument();
});
