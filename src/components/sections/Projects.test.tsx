import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { projects } from '@/content/projects';
import Projects from './Projects';

describe('Projects', () => {
  it('renders project cards from content and expands the selected project details', () => {
    render(<Projects />);

    expect(screen.getByRole('heading', { name: /featured projects/i })).toBeInTheDocument();
    expect(screen.getByText(projects[0].name)).toBeInTheDocument();

    const firstToggle = screen.getAllByRole('button', { name: /expand/i })[0];
    fireEvent.click(firstToggle);

    expect(screen.getByText('Challenge')).toBeInTheDocument();
    expect(screen.getByText('Solution')).toBeInTheDocument();
    expect(screen.getByText(projects[0].challenge)).toBeInTheDocument();
  });

  it('collapses the expanded project when toggled again', () => {
    render(<Projects />);

    const toggle = screen.getAllByRole('button', { name: /expand/i })[0];
    fireEvent.click(toggle);
    expect(screen.getByText('Challenge')).toBeInTheDocument();

    fireEvent.click(toggle);
    expect(screen.queryByText('Challenge')).not.toBeInTheDocument();
  });
});
