import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-charcoal-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-crimson to-transparent" />

      <div className="relative text-center px-6">
        <div className="font-display text-[10rem] md:text-[16rem] text-crimson/10 leading-none select-none">
          404
        </div>
        <div className="-mt-8 md:-mt-16">
          <p className="section-subtitle">Page Not Found</p>
          <h1 className="section-title mb-6">
            Lost Your<br />
            <span className="text-crimson">Way?</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto mb-10">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
