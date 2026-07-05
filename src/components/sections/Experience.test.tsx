import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { experiences } from '@/content/experience';
import Experience from './Experience';

describe('Experience', () => {
  it('renders the experience timeline from content', () => {
    render(<Experience />);

    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByText(experiences[0].company)).toBeInTheDocument();
    expect(screen.getAllByText(experiences[0].roles[0].title).length).toBeGreaterThan(0);
    expect(screen.getByText(/present/i)).toBeInTheDocument();
  });
});
