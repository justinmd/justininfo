import { useState, useEffect, ReactNode, useCallback } from "react"

import { Link, useLocation } from "react-router-dom"

import { FaRegUser } from "react-icons/fa"
import { CgNotes } from "react-icons/cg"
import { RiContactsBookLine } from "react-icons/ri"
import { MdOutlineMenuBook, MdOutlineBusinessCenter } from "react-icons/md"
import { AiOutlineFilePdf } from "react-icons/ai"

import avatarIdea from '../assets/about/justin-profile.jpeg'
import avatarCoding from '../assets/about/justin-profile.jpeg'
import avatarFist from '../assets/about/justin-profile.jpeg'
import avatarSuccess from '../assets/about/justin-profile.jpeg'
import avatarGreatness from '../assets/about/justin-profile.jpeg'

export type DataReturnType = ReturnType<typeof data>

export const data = () => {
    const [check, setCheck] = useState(false)
    const [local, setLocal] = useState(typeof window !== 'undefined' ? localStorage.getItem("theme") : null)
    const [currentImgSelection, setCurrentImgSelection] = useState(avatarIdea)
    const [privacyPolicyIsOpen, setPrivacyPolicyIsOpen] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return; // Skip on server-side
        
        const themeValue = localStorage?.getItem("theme");

        if (!themeValue) {
            setCheck(false)
            localStorage.setItem("theme", "dark")
        } else {
            themeValue === "dark" && setCheck(false)
            themeValue === "light" && setCheck(true)
        }

        localStorage?.getItem("theme") === "dark" 
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark")
    }, [])

    const handleTheme = (value : string) => {
        if (value !== "dark" && value !== "light") {
            return
        }
        if (typeof window === 'undefined') return; // Skip on server-side
        
        value === "dark"
            ? setCheck(false)
            : setCheck(true)
        localStorage.setItem("theme", value)
        setLocal(value)

        localStorage?.getItem("theme") === "dark"
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark")
    }

    const avatars = {
        idea: avatarIdea,
        coding: avatarCoding,
        fist: avatarFist,
        success: avatarSuccess,
        greatness: avatarGreatness
    }

    const handleImageChange = useCallback((isRandom : boolean = true, selection : string = '') => {

        if (isRandom) {
            setCurrentImgSelection((prev) => {
                const keyArray = Object.keys(avatars).filter(key => avatars[key] !== prev)
                const randomKeyIdx = Math.floor(Math.random() * keyArray.length)
                const randomKey = keyArray[randomKeyIdx]
                return avatars[randomKey]
              })
              return;
        }

        if (selection) {
            setCurrentImgSelection(selection)
            return;
        }

    }, []
)   

    // Menu Items

    const menuItems = [
        {
          id: "01",
          name: "About",
          link: "/",
          icon: <FaRegUser />,
        },
        {
          id: "03",
          name: "Experience",
          link: "/experience",
          icon: <MdOutlineBusinessCenter />,
        },
        {
          id: "08",
          name: "Resume",
          link: "/resume",
          icon: <AiOutlineFilePdf />,
        },
        {
          id: "06",
          name: "Publications",
          link: "/publications",
          icon: <MdOutlineMenuBook />,
        },
        {
          id: "04",
          name: "Contact",
          link: "/contact",
          icon: <RiContactsBookLine />,
        },
      ];

      const educationArray = [
        {
            id: 1,
            date: "2003 – 2007",
            title: "Bachelor of Technology (B.Tech.) — Computer Science & Engineering",
            place: "Government Engineering College Sreekrishnapuram | University of Calicut, Kerala, India",
            color: "#EEF5FA"
        },
      ]

      const experienceArray = [
        {
            id: 1,
            date: "Sep 2019 – Present",
            title: "Principal Engineer",
            place: "Castlight Health / apree health",
            location: "San Francisco Bay Area, CA",
            description: "Architectural leadership across healthcare navigation, public health, and AI-driven platforms. Designed multi-tenant OIDC authentication framework. Served as Principal Engineer for PRISM — multi-agent conversational AI on Gemini 2.5 and LangGraph. Led Curelight/Vaccine Finder national platform with CDC integration. Delivered HIPAA-compliant Working Well pandemic response platform.",
            color: "#EEF5FA"
        },
        {
            id: 2,
            date: "Sep 2017 – Jul 2019",
            title: "UI Architect",
            place: "Solgenie Technologies",
            location: "",
            description: "Spearheaded digital transformation for global clients. Led SAGE portfolio management system for BNY Mellon — Angular-based platform unifying legacy systems for real-time 401k/retirement fund management. Architected NFL Sunday Ticket web modernization for DIRECTV — migrated Flash/Flex to Angular 5, HTML5/CSS with video DRM, authentication, and 4K streaming support.",
            color: "#EEF5FA"
        },
        {
            id: 3,
            date: "Aug 2016 – Sep 2017",
            title: "UI Architect | Technical Director",
            place: "Amazecodes Solutions",
            location: "",
            description: "Led development of comprehensive product suite for Deluxe Corporation including end-to-end Product Detail Page (PDP) with REST API integration, scalable email marketing solution, and custom API services for image processing. Managed cross-functional teams, Agile ceremonies, and full-stack development.",
            color: "#EEF5FA"
        },
        {
            id: 4,
            date: "Aug 2014 – Aug 2016",
            title: "Lead Interactive Specialist",
            place: "Target Corporation",
            location: "",
            description: "Led UI engineering for Guest Profile Recommendation Engine — personalized product recommendations across Target's digital platforms. Developed reusable components using HTML5, CSS3, JavaScript, jQuery, Backbone.js. Created custom jQuery image zoom plugin replacing Adobe Scene7, reducing server/API calls by 90%+. Drove omnichannel integration between digital and physical stores.",
            color: "#EEF5FA"
        },
        {
            id: 5,
            date: "Mar 2013 – Aug 2014",
            title: "Senior Consultant",
            place: "Capgemini",
            location: "",
            description: "Consulted for Target Corporation (transitioned to full-time role), contributing to front-end engineering initiatives including the Guest Profile Recommendation Engine and Product Image Zoom Optimization projects.",
            color: "#EEF5FA"
        },
        {
            id: 6,
            date: "Aug 2011 – Mar 2013",
            title: "Senior Software Engineer",
            place: "TE Connectivity",
            location: "",
            description: "Led UI development for Prism FlexWave DAS platform — a distributed antenna system for large venues. Built dynamic configuration interfaces using PHP, JavaScript, jQuery, AJAX, XML, and JSON. Developed Selenium RC automation frameworks improving testing reliability and coverage.",
            color: "#EEF5FA"
        },
        {
            id: 7,
            date: "Mar 2009 – Jul 2011",
            title: "Systems Analyst",
            place: "Cosmonet Solutions",
            location: "",
            description: "Systems analysis and software development delivering technology solutions for enterprise clients.",
            color: "#EEF5FA"
        },
        {
            id: 8,
            date: "Jan 2008 – Jan 2009",
            title: "PHP Developer",
            place: "SkeinSoft",
            location: "",
            description: "Web development using PHP, MySQL, HTML, CSS, and JavaScript.",
            color: "#EEF5FA"
        },
      ]

      const contactArray = [
        {
            id: 1,
            title: "Phone",
            item1: "(469) 226-1675",
            item2: "(469) 226-1675",
            bg: "#FCF4FF"
        },
        {
            id: 2,
            title: "Email",
            item1: "justin.davis1982@gmail.com",
            item2: "justin.davis1982@gmail.com",
            bg: "#FCF4FF",
            bgDark: "accent-color"
        },
        {
            id: 3,
            title: "Address",
            item1: "Fremont, CA",
            item2: "Fremont, CA",
            bg: "#FCF4FF",
            bgDark: "accent-color"
        },
      ]

  return {
    local,
    check,
    handleTheme,
    menuItems,
    educationArray,
    experienceArray,
    contactArray,
    avatars,
    handleImageChange,
    currentImgSelection,
    privacyPolicyIsOpen,
    setPrivacyPolicyIsOpen
  }
}