import { AppleConceptDesign, BrokerAutoPage, CgNetflixClone } from "../assets/projects"
import { FaReact, FaPython } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiAngular, SiNodedotjs, SiGooglecloud } from "react-icons/si";

export type ProjectsDataReturnType = ReturnType<typeof projectsData>

export function projectsData() {
    const techStack = {
        react: { id: 1, Icon: FaReact, tooltip: "React", animation: "animate-spin-slow", color: "#5ed3f2" },
        typescript: { id: 3, Icon: SiTypescript, tooltip: "TypeScript", animation: null, color: "#3074bf" },
        nextjs: { id: 13, Icon: SiNextdotjs, tooltip: "Next.js", animation: null, color: "#000" },
        angular: { id: 8, Icon: SiAngular, tooltip: "Angular", animation: null, color: "#dd0031" },
        nodejs: { id: 11, Icon: SiNodedotjs, tooltip: "Node.js", animation: null, color: "#589450" },
        python: { id: 7, Icon: FaPython, tooltip: "Python", animation: null, color: "#3573a5" },
        gcp: { id: 14, Icon: SiGooglecloud, tooltip: "GCP", animation: null, color: "#4285F4" },
    }

    const projectsArray = [
        {
            id: 1,
            title: "PRISM — Multi-Agent Conversational AI Platform",
            description: "Served as Principal Engineer for PRISM, a next-generation multi-agent conversational AI platform built on Gemini 2.5, LangGraph, and GCP. Delivers personalized, multimodal healthcare guidance by integrating claims, benefits, eligibility, and provider data with seamless escalation to human care guides.",
            pageLink: "https://www.castlighthealth.com",
            codeLink: "",
            image: CgNetflixClone,
            icons: [
                techStack.react,
                techStack.typescript,
                techStack.nodejs,
                techStack.gcp,
                techStack.python,
            ]
        },
        {
            id: 2,
            title: "Curelight — National Vaccine Finder",
            description: "Architected a national vaccine-finder and inventory platform integrated with CDC Vaccines.gov. Reached 100M+ visitors since Jan 2021, supporting the U.S. government's COVID-19 vaccination response across 50,000+ healthcare providers and 14 major pharmacy chains.",
            pageLink: "https://www.castlighthealth.com",
            codeLink: "",
            image: BrokerAutoPage,
            icons: [
                techStack.react,
                techStack.typescript,
                techStack.nodejs,
                techStack.gcp,
            ]
        },
        {
            id: 3,
            title: "SAGE Portfolio Management System (BNY Mellon)",
            description: "Led end-to-end development of SAGE, a next-generation web platform for portfolio managers overseeing 401k and retirement funds. Unified legacy systems into a single Angular-based application with SignalR real-time updates, RESTful APIs, and MongoDB for secure trade archive management.",
            pageLink: "",
            codeLink: "",
            image: AppleConceptDesign,
            icons: [
                techStack.angular,
                techStack.typescript,
                techStack.nodejs,
            ]
        },
        {
            id: 4,
            title: "Target.com — Guest Profile Recommendation Engine",
            description: "Led UI engineering for Target's proprietary recommendation engine delivering personalized product recommendations across digital platforms. Built reusable components with HTML5, CSS3, JavaScript, jQuery, and Backbone.js. Created custom image zoom plugin reducing server calls by 90%+.",
            pageLink: "https://www.target.com",
            codeLink: "",
            image: CgNetflixClone,
            icons: [
                techStack.react,
                techStack.typescript,
                techStack.nodejs,
            ]
        },
        {
            id: 5,
            title: "NFL Sunday Ticket Web Modernization (DIRECTV)",
            description: "Led migration of DIRECTV's NFL Sunday Ticket from Flash/Flex to modern Angular 5, HTML5, and CSS stack. Architected modular frontend with video DRM, authentication systems, and performance optimization for 4K streaming and multi-device support.",
            pageLink: "",
            codeLink: "",
            image: AppleConceptDesign,
            icons: [
                techStack.angular,
                techStack.typescript,
            ]
        },
    ]

    return {
        projectsArray
    }
}
