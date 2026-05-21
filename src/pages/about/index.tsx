import { Footer, PageTitle } from '../../components'
import { HomeCard } from '../home/HomeCard';
import { useData } from '../../hooks';
import { useEffect } from 'react';

const AboutMeParagraph = () => {
  return (
    <div className="text-gray-lite dark:text-color-910 leading-7 space-y-4">
      <p>
        Innovative and results-driven <strong className="dark:text-white">Principal Engineer and UI Architect</strong> with over <strong className="dark:text-white">17+ years of experience</strong> delivering scalable, user-centric digital solutions across healthcare, finance, retail, and media sectors. Proven expertise in full-stack development, modern frontend frameworks, authentication systems, and microservices architecture.
      </p>
      <p>
        Currently serving as <strong className="dark:text-white">Principal Engineer</strong> at Castlight Health / apree health, where I provide architectural leadership across digital healthcare platforms. I served as Principal Engineer for <strong className="dark:text-white">PRISM</strong>, a next-generation multi-agent conversational AI platform built on Gemini 2.5, LangGraph, and GCP. I led engineering for <strong className="dark:text-white">Project Curelight / Vaccine Finder</strong>, a nationally deployed platform supporting real-time vaccine inventory reporting to the CDC — playing a critical role in the U.S. COVID-19 response.
      </p>
      <p>
        Previously, as <strong className="dark:text-white">UI Architect at Solgenie Technologies</strong>, I led the SAGE portfolio management system for BNY Mellon and the NFL Sunday Ticket web modernization for DIRECTV. At <strong className="dark:text-white">Target Corporation</strong>, I led UI engineering for the Guest Profile Recommendation Engine and built a custom image zoom plugin that reduced server calls by 90%+. I've also led projects for Deluxe Corporation, TE Connectivity, and Capgemini.
      </p>
      <p>
        A published researcher with <strong className="dark:text-white">18+ peer-reviewed publications</strong> in AI, cybersecurity, healthcare technology, and software architecture. <strong className="dark:text-white">Senior Member, IEEE</strong> — Fellow of IETE, NSPE, BCS, and IOASD. Full Member of Sigma Xi. Recipient of the Stevie Award, Titan Innovation Award (Gold), Noble Award (Gold), and Global Recognition Award.
      </p>
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
      <PageTitle
        title="About"
        description="About Justin Davis — Principal Engineer and UI Architect with 17+ years of experience. Architected Curelight national vaccine-finder for CDC (100M+ users). Led PRISM multi-agent conversational AI platform. IEEE Senior Member, IETE Fellow. 18+ publications."
        path="/about"
      />
      {/* End pagetitle */}

      <div className=" lg:rounded-2xl bg-white dark:bg-[#111111] overflow-hidden mb-[2rem]">
        <div>
          <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
            {/* About page title */}
            <h2 className="after-effect after:left-52 lg:block hidden">
              About Me
            </h2>
            <div className="lg:hidden">
              {/* Sidebar personal information for mobile devices */}
              <div>
                <HomeCard />
              </div>
              <div className=" md:gap-10 mb-12 md:pt-[30px] items-center lg:hidden px-6">
                <h2 className="after-effect after:left-52 mb-5">About Me</h2>
                <div className="col-span-12 space-y-2.5">
                  <div className="lg:mr-16">
                    <AboutMeParagraph />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden ">
              <div className="col-span-12 space-y-2.5">
                <div className="lg:mr-16">
                  <AboutMeParagraph />
                </div>
              </div>
            </div>
          </div>
          {/* End about descriptions */}

          {/* Common Footer call here */}
          <div className='pb-10'>
            <Footer />
          </div>
        </div>
      </div>
    </section>
  )
}