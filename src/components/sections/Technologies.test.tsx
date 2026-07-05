import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { technologies } from '@/content/technologies';
import Technologies from './Technologies';

describe('Technologies', () => {
  it('renders the technology cards from content', () => {
    render(<Technologies />);

    expect(screen.getByRole('heading', { name: /technologies & tools/i })).toBeInTheDocument();
    expect(screen.getByText(technologies[0].name)).toBeInTheDocument();
    expect(screen.getByText(technologies[7].name)).toBeInTheDocument();
  });
});
