import { useData } from '../../hooks'
import { useEffect, useState } from 'react'
import { Avatar, Footer, PageTitle, DesktopNav, MobileNav, MenuButton, ThemeToggleButton, SocialLinks, Logo } from '../../components'
import { HomeCard } from '../home/HomeCard'
import { Link } from 'react-router-dom'
import { TechIcon } from "../../components"
import { BsArrowRightShort, BsCodeSlash } from 'react-icons/bs'

export function Projects() {
  const { avatars, handleImageChange, projectsArray, setPrivacyPolicyIsOpen } = useData()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => { handleImageChange(false, avatars.coding) }, [])
  useEffect(() => { if (menuOpen) setPrivacyPolicyIsOpen(false) }, [menuOpen])

  return (
    <main className="relative">
      <PageTitle
        title="Projects — AI, Healthcare, Finance & Retail Platforms"
        description="Projects by Justin Davis — PRISM multi-agent conversational AI platform, Curelight national vaccine finder for CDC (100M+ users), SAGE portfolio management for BNY Mellon, Target.com recommendation engine, NFL Sunday Ticket web modernization."
        path="/projects"
      />

      <section className="z-[100] bg-white dark:bg-black min-h-screen bg-no-repeat bg-center bg-cover bg-fixed w-full">
        <div className="container z-[1000] w-full bg-primary-bg-light dark:bg-primary-bg-dark lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[35px]">
          <div className="w-full z-[1000] flex justify-between items-center px-4">
            <Link to="/">
              <Logo />
            </Link>
            <div className="flex items-center">
              <ThemeToggleButton />
              <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
          </div>
        </div>

        <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[110px]">
          <div className="col-span-12 lg:col-span-4 hidden lg:block h-auto sticky">
            <HomeCard />
          </div>

          <div className="col-span-12 lg:col-span-8">
            <DesktopNav />

            <section className="bg-white overflow-hidden lg:mb-20 lg:rounded-2xl dark:bg-[#111111]">
              <div className="relative w-full flex items-center justify-center">
                <div className="lg:hidden absolute z-10 top-[10rem] w-[200px]" data-aos="fade-in">
                  <Avatar absolute={false} width="200px" />
                </div>
              </div>

              <div className="container sm:px-5 md:px-10 lg:px-14">
                <div className="py-12 px-4 md:px-0">
                  <h2 data-aos="fade-left" className="after-effect after:left-44 mt-[12rem] lg:mt-0">Projects</h2>

                  <div className="mt-[30px] space-y-6">
                    {projectsArray.map((project) => (
                      <div
                        key={project.id}
                        data-aos="fade-up"
                        className="p-6 rounded-2xl border-2 border-[#EEF5FA] dark:border-[#212425] hover:border-accent-color dark:hover:border-accent-color transition-colors"
                      >
                        <div className="flex flex-col lg:flex-row gap-6">
                          {project.pageLink && (
                            <a href={project.pageLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                              <img
                                src={project.image}
                                alt={`${project.title} — project screenshot`}
                                className="w-full lg:w-[280px] h-auto lg:h-[160px] object-contain rounded-xl border border-[#EEF5FA] dark:border-[#212425]"
                              />
                            </a>
                          )}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-semibold dark:text-white mb-2">{project.title}</h3>
                            <p className="text-sm text-gray-lite dark:text-[#b7b7b7] leading-relaxed mb-4">{project.description}</p>
                            {project.icons && project.icons.length > 0 && (
                              <div className="flex flex-wrap gap-3 mb-4">
                                {project.icons.map(tech => (
                                  <TechIcon key={`${tech.id}-${tech.tooltip}`} IconElement={tech.Icon} tooltip={tech.tooltip} animation={tech.animation} color={tech.color} />
                                ))}
                              </div>
                            )}
                            <div className="flex flex-wrap gap-3">
                              {project.pageLink && (
                                <a
                                  href={project.pageLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-sm text-accent-color hover:underline font-medium"
                                >
                                  <BsArrowRightShort className="h-4 w-4" />
                                  View Project
                                </a>
                              )}
                              {project.codeLink && (
                                <a
                                  href={project.codeLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-sm text-gray-lite dark:text-[#b7b7b7] hover:text-accent-color dark:hover:text-accent-color transition-colors"
                                >
                                  <BsCodeSlash className="h-4 w-4" />
                                  View Source
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pb-20">
                <Footer />
              </div>
            </section>
          </div>
        </div>
      </section>

      <div data-aos="fade-up" className="socialSm:fixed hidden socialSm:flex flex-col items-center bg-transparent button-vertical-after after:h-40 after:translate-y-[7rem] bottom-0 left-0 w-[10%] h-[25%]">
        <SocialLinks />
      </div>
    </main>
  )
}
