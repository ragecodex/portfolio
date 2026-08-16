import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Header from './Header';

describe('Header', () => {
  let observerInstances: Array<{
    observe: ReturnType<typeof vi.fn>;
    disconnect: ReturnType<typeof vi.fn>;
    unobserve: ReturnType<typeof vi.fn>;
    trigger: (entries: Partial<IntersectionObserverEntry>[]) => void;
  }>;

  beforeEach(() => {
    observerInstances = [];

    class MockIntersectionObserver {
      callback: IntersectionObserverCallback;
      observe = vi.fn();
      disconnect = vi.fn();
      unobserve = vi.fn();

      constructor(callback: IntersectionObserverCallback) {
        this.callback = callback;
        observerInstances.push(this as unknown as typeof observerInstances[number]);
      }

      trigger(entries: Partial<IntersectionObserverEntry>[]) {
        this.callback(entries as IntersectionObserverEntry[], this as unknown as IntersectionObserver);
      }
    }

    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders navigation items and toggles the mobile menu', () => {
    const scrollIntoView = vi.fn();
    Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
      configurable: true,
      value: scrollIntoView,
    });

    document.body.innerHTML = '<section id="about"></section>';
    const aboutSection = document.getElementById('about');

    render(<Header />);

    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /toggle menu/i }));
    expect(screen.getAllByText(/featured work/i).length).toBeGreaterThan(0);

    const observer = observerInstances[0];
    observer.trigger([{ isIntersecting: true, target: aboutSection as Element }]);

    const activeProfileButton = screen.getAllByRole('button', { name: /profile/i })[0];
    expect(activeProfileButton.className).toContain('text-white');

    fireEvent.click(screen.getAllByRole('button', { name: /profile/i })[1]);
    expect(scrollIntoView).toHaveBeenCalled();
  });
});
