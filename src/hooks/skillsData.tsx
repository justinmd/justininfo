export type SkillsDataReturnType = ReturnType<typeof skillsData>

export const skillsData = () => {
    const advanceSkills = [
        "React",
        "Next.js",
        "Angular",
        "TypeScript",
        "JavaScript (ES2015+)",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Node.js",
        "Python",
        "Micro-frontends",
        "Design Systems",
        "WCAG Accessibility",
        "Core Web Vitals",
        "REST & GraphQL",
        "MongoDB & PostgreSQL",
        "GCP & AWS",
        "Webpack & Vite",
        "Redux & RxJS",
        "Framer Motion & GSAP",
        "CI/CD & GitHub Actions",
        "Agile / Scrum",
        "Front-End Architecture",
        "Performance Optimization",
        "Component-Driven Development",
        "Java Spring Boot",
        "Authentication & Security Architecture",
        "Digital Transformation Strategy",
    ]

    const familiarSkills = [
        "VueJS",
        "Ionic",
        "D3.js",
        "Docker",
        "Kubernetes",
        "PHP",
        "Java",
        "BigQuery",
        "GraphQL",
        "Web Components",
        "PWA",
        "i18n / RTL",
        "Android / iOS / Ionic",
        "Jenkins",
    ]

    const tools = [
        "VS Code / Cursor IDE",
        "Git & GitHub",
        "Figma / Adobe XD",
        "Jira & Confluence",
        "Storybook",
        "Jest / Cypress / Playwright",
        "Claude / GitHub Copilot",
        "BrowserStack",
        "Nx / Turborepo",
        "Google Analytics 4",
        "GitLab",
    ]

    return {
        advanceSkills,
        familiarSkills,
        tools
    }
}
