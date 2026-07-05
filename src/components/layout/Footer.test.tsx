import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  it('renders social links and opens the contact modal', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /linkedin profile/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /open contact modal/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /open contact modal/i }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
