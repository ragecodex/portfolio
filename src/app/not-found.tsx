export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[var(--color-text-primary)] mb-4">404</h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-8">
          Page not found
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-[var(--color-accent-primary)] text-white rounded-lg hover:bg-[var(--color-accent-primary)]-hover)] transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
