import { Footer, PageTitle } from '../../components'
import { HomeCard } from '../home/HomeCard';
import { useData } from '../../hooks';
import { useEffect } from 'react';

const AboutMeParagraph = () => {
  return (
    <div className="text-gray-lite dark:text-color-910 leading-7 space-y-4">
      <p>
        Internationally recognized <strong className="dark:text-white">Principal Engineer, UI Architect, published researcher, and technology judge</strong> with <strong className="dark:text-white">17+ years of experience</strong> delivering scalable, mission-critical digital platforms across healthcare, finance, retail, telecommunications, and media. My work spans AI-driven healthcare navigation, national public health infrastructure, secure authentication systems, microfrontend architecture, and high-performance enterprise platforms.
      </p>
      <p>
        I currently serve as <strong className="dark:text-white">Principal Engineer</strong> at Castlight Health / apree health, where I provide architectural leadership for digital healthcare platforms supporting millions of users. I served as Principal Engineer for <strong className="dark:text-white">PRISM</strong>, a next-generation multi-agent conversational AI platform built on Gemini 2.5, LangGraph, and GCP, and led engineering for <strong className="dark:text-white">Project Curelight / Vaccine Finder</strong>, a nationally deployed vaccine inventory reporting platform supporting the CDC during the U.S. COVID-19 response.
      </p>
      <p>
        My professional impact extends beyond employer-based contributions into recognized service to the broader scientific and engineering community. I have authored peer-reviewed publications in AI, cybersecurity, healthcare technology, and software architecture, and have peer-reviewed approximately <strong className="dark:text-white">70 research papers across 15 international conferences</strong>. I have also served as a judge for the United Hack V6 Hackathon, Globee Awards, and IEEE Senior Member application evaluations. These invited judging and peer-review roles demonstrate that my expertise is relied upon to evaluate the work, innovation, and professional advancement of others in the field.
      </p>
      <p>
        Previously, as <strong className="dark:text-white">UI Architect at Solgenie Technologies</strong>, I led the SAGE portfolio management system for BNY Mellon and modernized DIRECTV's NFL Sunday Ticket platform. At <strong className="dark:text-white">Target Corporation</strong>, I led UI engineering for the Guest Profile Recommendation Engine and developed a custom image zoom framework that reduced server calls by over 90%. I have also delivered enterprise technology solutions for Deluxe Corporation, TE Connectivity, Capgemini, and other major organizations.
      </p>
      <p>
        I am a <strong className="dark:text-white">Senior Member of IEEE</strong> and a Fellow of IETE, NSPE, BCS, IOASD, and NIPES, as well as a Full Member of Sigma Xi. My recognitions include the Stevie Award, Titan Innovation Award Gold, Noble Award Gold, Global Recognition Award, Target Rockstar/Rocker Awards, and Castlight Impact Award. Collectively, my leadership roles, scholarly publications, peer-review service, judging appointments, fellow-grade memberships, and award recognitions demonstrate sustained national and international recognition for contributions to software engineering, AI systems, cybersecurity, and digital healthcare innovation.
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
        description="About Justin Davis — Internationally recognized Principal Engineer and UI Architect with 17+ years of experience. Architected Curelight for CDC. Led PRISM conversational AI. IEEE Senior Member, IETE Fellow. Published researcher and technology judge."
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