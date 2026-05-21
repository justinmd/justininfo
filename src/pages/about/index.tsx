import { Footer } from '../../components'
import { HomeCard } from '../home/HomeCard';
import { useData } from '../../hooks';
import { useEffect } from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { FaAward, FaUsers, FaCertificate, FaNewspaper, FaHospital, FaGlobe } from 'react-icons/fa'
import { MdOutlineMenuBook, MdOutlineBusinessCenter, MdVerified } from 'react-icons/md'

const ImpactBanner = () => {
  const stats = [
    { value: '100M+', label: 'Users Impacted',          sub: 'Curelight · enterprise platforms',   icon: <FaUsers className="text-2xl" /> },
    { value: '50K+',  label: 'Healthcare Providers',     sub: 'Curelight network · pharmacy chains', icon: <FaHospital className="text-2xl" /> },
    { value: '17+',   label: 'Years Experience',         sub: 'Castlight · Target · Solgenie',       icon: <MdOutlineBusinessCenter className="text-2xl" /> },
    { value: '7+',    label: 'Publications',             sub: 'IEEE · Scopus · IJSR',               icon: <MdOutlineMenuBook className="text-2xl" /> },
    { value: '15+',   label: 'Conferences',              sub: 'Peer reviewer & invited judge',       icon: <FaAward className="text-2xl" /> },
  ]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 mb-5" data-aos="fade-up">
      {stats.map(({ value, label, sub, icon }, i) => (
        <div key={i} className="bg-[#F3F6F6] dark:bg-[#1D1D1D] rounded-2xl p-5 text-center">
          <div className="text-accent-color flex justify-center mb-2">{icon}</div>
          <p className="text-3xl font-bold dark:text-white text-gray-800">{value}</p>
          <p className="text-sm font-semibold dark:text-white text-gray-700 mt-1">{label}</p>
          <p className="text-xs text-gray-400 dark:text-[#b7b7b7] mt-0.5">{sub}</p>
        </div>
      ))}
    </div>
  )
}

const AboutMeParagraph = () => (
  <div className="text-gray-lite dark:text-color-910 leading-7 space-y-4">
    <p>
      Internationally recognized <strong className="dark:text-white">Principal Engineer, UI Architect, published researcher, and technology judge</strong> with <strong className="dark:text-white">17+ years of experience</strong> delivering scalable, mission-critical digital platforms across healthcare, finance, retail, telecommunications, and media. My work spans AI-driven healthcare navigation, national public health infrastructure, secure authentication systems, microfrontend architecture, and high-performance enterprise platforms.
    </p>
    <p>
      I currently serve as <strong className="dark:text-white">Principal Engineer</strong> at Castlight Health / apree health, where I provide architectural leadership for digital healthcare platforms supporting millions of users. I served as Principal Engineer for <strong className="dark:text-white">PRISM</strong>, a next-generation multi-agent conversational AI platform built on Gemini 2.5, LangGraph, and GCP, and led engineering for <strong className="dark:text-white">Project Curelight / Vaccine Finder</strong>, a nationally deployed vaccine inventory reporting platform supporting the CDC during the U.S. COVID-19 response.
    </p>
    <p>
      My professional impact extends beyond employer-based contributions into recognized service to the broader scientific and engineering community. I have authored peer-reviewed publications in AI, cybersecurity, healthcare technology, and software architecture, and have peer-reviewed approximately <strong className="dark:text-white">70 research papers across 15 international conferences</strong>. I have also served as a judge for the United Hack V6 Hackathon, Globee Awards, and IEEE Senior Member application evaluations.
    </p>
    <p>
      Previously, as <strong className="dark:text-white">UI Architect at Solgenie Technologies</strong>, I led the SAGE portfolio management system for BNY Mellon and modernized DIRECTV's NFL Sunday Ticket platform. At <strong className="dark:text-white">Target Corporation</strong>, I led UI engineering for the Guest Profile Recommendation Engine and developed a custom image zoom framework that reduced server calls by over 90%.
    </p>
    <p>
      I am a Senior Member of IEEE and a <strong className="dark:text-white">Fellow of BCS (The Chartered Institute for IT)</strong>, IETE, NSPE, IOASD, and NIPES, as well as a Full Member of Sigma Xi. My recognitions include the Stevie Award, Titan Innovation Award Gold, Noble Award Gold, Global Recognition Award, Target Rockstar/Rocker Awards, and Castlight Impact Award.
    </p>
  </div>
)

interface Project {
  emoji: string; title: string; company: string; badge: string
  problem: string; role: string; impact: string; significance: string
  link?: string; linkLabel?: string; proofLinks?: { label: string; url: string }[]
}

const FlagshipContributions = () => {
  const projects: Project[] = [
    {
      emoji: '🤖',
      title: 'PRISM — Multi-Agent Conversational AI Platform',
      company: 'Castlight Health / apree health · 2024 – Present',
      badge: 'Enterprise AI Platform',
      problem: 'Healthcare navigation required fragmented multi-channel interactions with no unified AI-driven layer for claims, benefits, eligibility, and provider data.',
      role: 'Principal Engineer — architected multi-agent orchestration layer using Gemini 2.5, LangGraph, and GCP. Designed context-aware conversational flows with seamless escalation to human care guides.',
      impact: 'Personalized multimodal healthcare guidance at enterprise scale · Integrated claims, benefits, eligibility, and provider data into a single AI-driven interface',
      significance: 'PRISM represents a transformative step in healthcare navigation — replacing fragmented multi-channel experiences with a unified conversational AI layer that understands the full healthcare context of each member.',
      link: 'https://www.castlighthealth.com',
      linkLabel: 'castlighthealth.com',
    },
    {
      emoji: '🏥',
      title: 'Curelight — National Vaccine Finder (CDC Vaccines.gov)',
      company: 'Castlight Health · 2021 – 2023',
      badge: 'U.S. Government Infrastructure',
      problem: 'Fragmented vaccine access during COVID-19 left millions unable to locate appointments nationally.',
      role: 'Led engineering for Curelight — architected real-time pharmacy-network integration, appointment scheduling, and location-based personalization at nationwide scale.',
      impact: '100M+ users served · 50K+ healthcare providers integrated · Direct support for U.S. Government pandemic response',
      significance: 'This platform became the technical backbone of the U.S. Government\'s COVID-19 vaccine distribution strategy — directly supporting the CDC\'s national vaccination campaign.',
      link: 'https://www.castlighthealth.com',
      linkLabel: 'castlighthealth.com',
    },
    {
      emoji: '💰',
      title: 'SAGE Portfolio Management System (BNY Mellon)',
      company: 'Solgenie Technologies · 2017 – 2019',
      badge: 'Enterprise Finance',
      problem: 'Legacy systems for 401k and retirement fund management were fragmented, with no unified real-time portfolio view for managers.',
      role: 'Led end-to-end development — architected Angular-based single-page application with SignalR real-time updates, RESTful APIs, and MongoDB for secure trade archive management.',
      impact: 'Unified legacy systems into a single platform · Real-time portfolio management for enterprise asset managers',
      significance: 'SAGE modernized BNY Mellon\'s retirement portfolio management by replacing a decade-old fragmented system landscape with a single, real-time Angular platform.',
    },
    {
      emoji: '🛒',
      title: 'Target.com — Guest Profile Recommendation Engine',
      company: 'Target Corporation · 2014 – 2016',
      badge: 'Fortune 50 Retail',
      problem: 'Target lacked a unified recommendation engine delivering personalized product experiences across digital channels.',
      role: 'Led UI engineering — built reusable components with HTML5, CSS3, JavaScript, jQuery, and Backbone.js. Created custom image zoom plugin replacing Adobe Scene7.',
      impact: 'Reduced server/API calls by 90%+ · Personalized recommendations across Target\'s digital platforms serving millions of shoppers',
      significance: 'The custom image zoom framework eliminated Target\'s dependency on Adobe Scene7 infrastructure, dramatically reducing server load while improving the shopping experience.',
    },
  ]

  return (
    <div className="mt-6" data-aos="fade-up">
      <h3 className="text-3xl dark:text-white font-semibold mb-4 border-b-2 border-[#EEF5FA] dark:border-[#212425] pb-2">
        Flagship Contributions
      </h3>
      <div className="space-y-5">
        {projects.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 60}
            className="p-6 rounded-2xl border-2 border-[#EEF5FA] dark:border-[#212425] hover:border-accent-color dark:hover:border-accent-color transition-colors"
          >
            <div className="flex items-start gap-3 mb-4 flex-wrap">
              <span className="text-3xl leading-none">{item.emoji}</span>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-base dark:text-white leading-snug">{item.title}</h4>
                <p className="text-xs text-accent-color mt-0.5">{item.company}</p>
              </div>
              <span className="flex-shrink-0 text-xs bg-accent-color/10 text-accent-color px-2.5 py-0.5 rounded-full font-medium whitespace-nowrap">
                {item.badge}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold dark:text-white">Problem: </span>
                <span className="text-gray-lite dark:text-[#b7b7b7]">{item.problem}</span>
              </p>
              <p>
                <span className="font-semibold dark:text-white">Role: </span>
                <span className="text-gray-lite dark:text-[#b7b7b7]">{item.role}</span>
              </p>
              <p className="flex items-start gap-1.5 flex-wrap">
                <span className="font-semibold dark:text-white shrink-0">Impact: </span>
                <span className="text-accent-color font-medium">{item.impact}</span>
              </p>
            </div>
            <div className="mt-3 pl-3 border-l-2 border-accent-color/40">
              <p className="text-xs text-gray-lite dark:text-[#b7b7b7] italic leading-relaxed">
                <span className="font-semibold not-italic dark:text-white text-gray-700">Significance: </span>
                {item.significance}
              </p>
            </div>
            {item.link && (
              <div className="flex flex-wrap gap-3 mt-3">
                <a href={item.link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-accent-color hover:underline">
                  <AiOutlineLink className="h-3 w-3" />
                  {item.linkLabel}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const RecognitionSection = () => {
  const items = [
    {
      icon: <MdVerified className="text-2xl text-accent-color flex-shrink-0" />,
      title: 'IEEE Senior Member',
      sub: 'Recognized for significant professional achievement',
      detail: 'Elected for sustained significant performance, contributions, and responsibility in software engineering and related technical fields.',
    },
    {
      icon: <FaCertificate className="text-2xl text-accent-color flex-shrink-0" />,
      title: 'Peer Reviewer & Conference Judge',
      sub: '15 international conferences · 70+ paper reviews',
      detail: 'Selected based on recognized domain expertise in AI, cybersecurity, healthcare technology, and software architecture.',
    },
    {
      icon: <FaAward className="text-2xl text-accent-color flex-shrink-0" />,
      title: 'Industry Awards',
      sub: 'Stevie Award · Titan Innovation Gold · Noble Award Gold',
      detail: 'Global Recognition Award · Target Rockstar/Rocker Awards · Castlight Impact Award — recognizing sustained exceptional performance.',
    },
    {
      icon: <MdOutlineMenuBook className="text-2xl text-accent-color flex-shrink-0" />,
      title: 'Scientific Memberships',
      sub: 'BCS Fellow · IETE Fellow · NSPE Fellow · Sigma Xi',
      detail: 'Elected to distinguished scientific and engineering societies recognizing research impact. 7+ publications across IEEE, Scopus, and IJSR.',
    },
  ]

  return (
    <div className="mt-6" data-aos="fade-up">
      <h3 className="text-3xl dark:text-white font-semibold mb-4 border-b-2 border-[#EEF5FA] dark:border-[#212425] pb-2">
        Professional Recognition
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 40}
            className="p-5 rounded-2xl border-2 border-[#EEF5FA] dark:border-[#212425]"
          >
            <div className="flex items-start gap-3 mb-2">
              {item.icon}
              <div>
                <h4 className="font-semibold dark:text-white text-sm">{item.title}</h4>
                <p className="text-xs text-accent-color mt-0.5">{item.sub}</p>
              </div>
            </div>
            <p className="text-xs text-gray-lite dark:text-[#b7b7b7] leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const NationalImpactSection = () => {
  const impacts = [
    {
      flag: '🇺🇸',
      scope: 'National — U.S. Government',
      headline: 'Built the digital infrastructure for America\'s COVID-19 vaccine rollout',
      detail: 'Led engineering for Curelight/Vaccines.gov, the platform serving 100M+ Americans during a declared national public health emergency. Directly supported the CDC\'s national vaccination campaign.',
    },
    {
      flag: '🤖',
      scope: 'Enterprise — AI-Powered Healthcare',
      headline: 'Architected next-generation multi-agent conversational AI',
      detail: 'As Principal Engineer for PRISM, designed a multi-agent AI platform on Gemini 2.5 and LangGraph that delivers personalized healthcare guidance by unifying claims, benefits, eligibility, and provider data.',
    },
    {
      flag: '🛒',
      scope: 'Commercial — Fortune 50 Scale',
      headline: 'Delivered transformative retail and financial platforms',
      detail: 'Led UI engineering for Target\'s recommendation engine serving millions of shoppers and architected BNY Mellon\'s SAGE portfolio management system unifying legacy retirement fund platforms.',
    },
  ]

  return (
    <div className="mt-6" data-aos="fade-up">
      <div className="flex items-center gap-2 mb-2">
        <FaGlobe className="text-accent-color text-xl" />
        <h3 className="text-3xl dark:text-white font-semibold">National & Global Impact</h3>
      </div>
      <p className="text-sm text-gray-lite dark:text-[#b7b7b7] mb-5 border-b-2 border-[#EEF5FA] dark:border-[#212425] pb-4">
        Three distinct domains of large-scale impact — government public health infrastructure, enterprise AI healthcare platforms, and Fortune 50 commerce.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {impacts.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 60}
            className="p-5 rounded-2xl bg-[#F3F6F6] dark:bg-[#1D1D1D] border-2 border-transparent hover:border-accent-color transition-colors"
          >
            <div className="text-3xl mb-3">{item.flag}</div>
            <p className="text-xs font-semibold text-accent-color uppercase tracking-wide mb-1">{item.scope}</p>
            <h4 className="text-sm font-semibold dark:text-white mb-2 leading-snug">{item.headline}</h4>
            <p className="text-xs text-gray-lite dark:text-[#b7b7b7] leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const typeColors: Record<string, string> = {
  'Government':   'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'News':         'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  'Press Release':'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'Corporate':    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  'Industry':     'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  'Technology':   'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
}

interface SourceItem { type: string; publisher: string; title: string; url: string; desc?: string }

const ExternalValidation = () => {
  const clusters: { emoji: string; heading: string; sources: SourceItem[] }[] = [
    {
      emoji: '🏥',
      heading: 'Curelight — Vaccine Finder (Government & Media)',
      sources: [
        {
          type: 'Government',
          publisher: 'U.S. Digital Service (USDS)',
          title: 'Vaccines.gov — Official USDS Project Page',
          url: 'https://www.usds.gov/projects/vaccines-dot-gov',
          desc: 'Official U.S. government project documentation for the national vaccine-finder platform.',
        },
        {
          type: 'News',
          publisher: 'NPR',
          title: 'CDC Launches Web Tool to Help Americans Find COVID-19 Vaccines',
          url: 'https://www.npr.org/sections/health-shots/2021/02/24/971164106/cdc-launches-web-tool-to-help-americans-find-covid-19-vaccines',
          desc: 'National media coverage of the CDC VaccineFinder launch and public accessibility.',
        },
        {
          type: 'News',
          publisher: 'STAT News',
          title: 'CDC Launches VaccineFinder to Show COVID-19 Vaccine Locations',
          url: 'https://www.statnews.com/2021/02/24/cdc-vaccinefinder-covid19-locations/',
        },
        {
          type: 'Government',
          publisher: 'CDC Archive',
          title: 'VaccineFinder Factsheet — Centers for Disease Control and Prevention',
          url: 'https://archive.cdc.gov/www_cdc_gov/vaccines/covid-19/reporting/vaccinefinder/vaccinefinder-factsheet.html',
          desc: 'Official CDC factsheet documenting the VaccineFinder platform and its national deployment.',
        },
        {
          type: 'Press Release',
          publisher: 'PR Newswire — Castlight Health',
          title: 'Castlight Health Launches New Resource for COVID-19 Vaccine Navigation',
          url: 'https://www.prnewswire.com/news-releases/castlight-health-launches-new-resource-to-help-employers-address-covid-19-vaccine-navigation-and-vaccine-literacy-301236934.html',
          desc: 'Official Castlight Health press release announcing the vaccine-navigation platform.',
        },
        {
          type: 'News',
          publisher: 'BioSpace',
          title: 'Castlight Health Launches Vaccine Navigation and Vaccine Literacy Resource',
          url: 'https://www.biospace.com/castlight-health-launches-new-resource-to-help-employers-address-covid-19-vaccine-navigation-and-vaccine-literacy',
        },
      ],
    },
    {
      emoji: '🛒',
      heading: 'Target.com — Corporate & Press Record',
      sources: [
        {
          type: 'Corporate',
          publisher: 'Target Corporation (Official)',
          title: 'Target Launches Redesigned E-Commerce Website — August 23, 2011',
          url: 'https://corporate.target.com/press/release/2011/08/target-launches-redesigned-e-commerce-website',
          desc: 'Official Target corporate press release announcing the launch of the new Target.com platform.',
        },
        {
          type: 'News',
          publisher: 'GeekWire',
          title: 'Target Finally Parts Ways with Amazon.com as Retailer\'s New Web Site Launches',
          url: 'https://www.geekwire.com/2011/target-finally-parts-ways-amazoncom-retailers-web-site-launch-starts-outage/',
          desc: 'News coverage of the historic platform migration marking Target\'s independence from Amazon infrastructure.',
        },
        {
          type: 'News',
          publisher: 'MPR News',
          title: 'Target\'s Website Overhaul',
          url: 'https://www.mprnews.org/story/2011/10/14/target-website',
        },
        {
          type: 'Industry',
          publisher: 'Wikipedia — Target Corporation',
          title: 'Target Corporation — Digital Platform History',
          url: 'https://en.wikipedia.org/wiki/Target_Corporation',
          desc: 'Documents the 2010 replatforming initiative with Sapient, IBM, and Oracle, and the 2011 launch replacing Amazon-hosted infrastructure.',
        },
      ],
    },
  ]

  return (
    <div className="mt-6" data-aos="fade-up">
      <div className="flex items-center gap-2 mb-2">
        <FaNewspaper className="text-accent-color text-xl" />
        <h3 className="text-3xl dark:text-white font-semibold">External Validation & Press Coverage</h3>
      </div>
      <p className="text-sm text-gray-lite dark:text-[#b7b7b7] mb-6 border-b-2 border-[#EEF5FA] dark:border-[#212425] pb-4">
        Third-party documentation from U.S. government agencies, national media, and corporate sources independently verifying the scale and deployment of key contributions.
      </p>

      <div className="space-y-8">
        {clusters.map((cluster, ci) => (
          <div key={ci} data-aos="fade-up" data-aos-delay={ci * 60}>
            <h4 className="text-base font-semibold dark:text-white mb-3 flex items-center gap-2">
              <span>{cluster.emoji}</span> {cluster.heading}
            </h4>
            <div className="space-y-2">
              {cluster.sources.map((src, si) => (
                <a
                  key={si}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-[#EEF5FA] dark:border-[#212425] hover:border-accent-color dark:hover:border-accent-color transition-colors group"
                >
                  <AiOutlineLink className="h-4 w-4 text-gray-400 dark:text-gray-500 group-hover:text-accent-color flex-shrink-0 mt-0.5 transition-colors" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${typeColors[src.type] ?? typeColors['Industry']}`}>
                        {src.type}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-400">{src.publisher}</span>
                    </div>
                    <p className="text-sm font-medium dark:text-white text-gray-700 group-hover:text-accent-color transition-colors leading-snug">
                      {src.title}
                    </p>
                    {src.desc && (
                      <p className="text-xs text-gray-lite dark:text-[#b7b7b7] mt-0.5 leading-relaxed">{src.desc}</p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const About = () => {
  const { avatars, handleImageChange } = useData()

  useEffect(() => {
    handleImageChange(false, avatars.idea)
  }, [])

  return (
    <section>
      <div className="lg:rounded-2xl bg-white dark:bg-[#111111] overflow-hidden mb-2">
        <div>
          <div className="pt-2 pb-4 px-3 md:px-5 lg:px-6">

            {/* Desktop heading */}
            <h2 className="after-effect after:left-52 lg:block hidden">About Me</h2>

            {/* Mobile layout */}
            <div className="lg:hidden">
              <div>
                <HomeCard />
              </div>
              <div className="md:gap-10 mb-4 md:pt-2 items-center px-3">
                <h2 className="after-effect after:left-52 mb-5">About Me</h2>
                <ImpactBanner />
                <AboutMeParagraph />
                <FlagshipContributions />
                <NationalImpactSection />
                <RecognitionSection />
                <ExternalValidation />
              </div>
            </div>

            {/* Desktop layout */}
            <div className="lg:grid grid-cols-12 md:gap-10 pt-2 items-start hidden">
              <div className="col-span-12 space-y-2.5">
                <div>
                  <ImpactBanner />
                  <AboutMeParagraph />
                  <FlagshipContributions />
                  <NationalImpactSection />
                  <RecognitionSection />
                  <ExternalValidation />
                </div>
              </div>
            </div>
          </div>

          <div className="pb-10">
            <Footer />
          </div>
        </div>
      </div>
    </section>
  )
}
