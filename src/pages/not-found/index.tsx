import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaRegFrown } from 'react-icons/fa'

export const NotFound = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-4">
      <Helmet>
        <title>404 — Page Not Found | Justin Davis</title>
        <meta name="description" content="Page not found. The page you are looking for does not exist or has been moved." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="text-center max-w-md">
        <FaRegFrown className="text-6xl text-accent-color mx-auto mb-6" />
        <h1 className="text-6xl font-bold dark:text-white text-gray-800 mb-4">404</h1>
        <h2 className="text-xl font-medium dark:text-white text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-lite dark:text-color-910 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-color to-variant-bg text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gradient-to-l transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
