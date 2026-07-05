import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { languages } from '@/content/languages';
import Languages from './Languages';

describe('Languages', () => {
  it('renders each language from content with its proficiency label', () => {
    render(<Languages />);

    expect(screen.getByRole('heading', { name: /languages/i })).toBeInTheDocument();
    expect(screen.getByText(languages[0].name)).toBeInTheDocument();
    expect(screen.getByText(languages[1].name)).toBeInTheDocument();
  });
});
