import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FiExternalLink } from 'react-icons/fi'

const pages = [
  { path: '/', label: 'Home / About', desc: 'Principal Engineer & UI Architect — professional overview, impact stats, and press coverage.' },
  { path: '/projects', label: 'Projects', desc: 'PRISM AI, Curelight, SAGE, Target.com, NFL Sunday Ticket — flagship contributions.' },
  { path: '/experience', label: 'Experience', desc: 'Work history, skills, tools, and education.' },
  { path: '/resume', label: 'Resume', desc: 'Download or view the full CV in PDF format.' },
  { path: '/publications', label: 'Publications', desc: 'Peer-reviewed research in AI, cybersecurity, healthcare, and software engineering.' },
  { path: '/contact', label: 'Contact', desc: 'Get in touch for opportunities, consulting, or collaborations.' },
]

export const Sitemap = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-4 py-20">
      <Helmet>
        <title>Sitemap | Justin Davis</title>
        <meta name="description" content="Sitemap of justindavis.info — all pages on the personal website of Justin Davis, Principal Engineer and UI Architect." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold dark:text-white text-gray-800 mb-2">Sitemap</h1>
        <p className="text-gray-lite dark:text-[#b7b7b7] mb-8">
          All pages on Justin Davis — Principal Engineer & UI Architect
        </p>
        <div className="space-y-4">
          {pages.map(({ path, label, desc }) => (
            <Link
              key={path}
              to={path}
              className="block p-5 rounded-xl border-2 border-[#EEF5FA] dark:border-[#212425] hover:border-accent-color dark:hover:border-accent-color transition-colors group"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-semibold dark:text-white group-hover:text-accent-color transition-colors">{label}</span>
                <FiExternalLink className="h-4 w-4 text-gray-400 group-hover:text-accent-color transition-colors" />
              </div>
              <p className="text-sm text-gray-lite dark:text-[#b7b7b7]">{desc}</p>
              <p className="text-xs text-accent-color mt-1 font-mono">{path}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
