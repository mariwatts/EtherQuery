// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EtherQuery title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EtherQuery/i);
    expect(titleElement).toBeInTheDocument();
});
