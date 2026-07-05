import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { profile } from '@/content/profile';
import About from './About';

describe('About', () => {
  it('renders the profile intro and primary actions from content', () => {
    render(<About />);

    expect(screen.getByText(profile.name)).toBeInTheDocument();
    expect(screen.getByText(profile.title)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /open contact modal/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: profile.coreValues[0].title })).toBeInTheDocument();
    expect(screen.getByText(profile.coreValues[1].description)).toBeInTheDocument();
  });

  it('opens the contact modal when the contact button is clicked', () => {
    render(<About />);

    fireEvent.click(screen.getByRole('button', { name: /open contact modal/i }));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/let's connect/i)).toBeInTheDocument();
  });
});
