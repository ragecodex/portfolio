import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { education } from '@/content/education';
import Education from './Education';

describe('Education', () => {
  it('renders the education cards from content', () => {
    render(<Education />);

    expect(screen.getByRole('heading', { name: /education/i })).toBeInTheDocument();
    expect(screen.getAllByText(education[0].institution).length).toBeGreaterThan(0);
    expect(screen.getByText((content) => content.includes(education[0].degree))).toBeInTheDocument();
  });
});
