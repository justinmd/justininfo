export type Publication = {
    id: number
    title: string
    authors: string
    venue: string
    year: number
    citations?: number
    link?: string
    type: 'journal' | 'conference' | 'article'
}

export const publicationsData = (): Publication[] => [
    {
        id: 1,
        title: "Multi-Tenant OpenID Connect Integration: Architectural Strategies for Secure and Scalable Authentication",
        authors: "J Davis",
        venue: "Sarcouncil Journal of Multidisciplinary, 5, 55-60",
        year: 2025,
        citations: 2,
        link: "https://doi.org/10.5281/zenodo.15766896",
        type: 'journal'
    },
    {
        id: 2,
        title: "Decoding Cybersecurity Discourse and Communication Dynamics in Financial Institutions",
        authors: "J Davis, S Maddini, S Kankala, RK Ravindran, M Kunkulagunta, et al.",
        venue: "Journal of Responsible Technology, 100142",
        year: 2025,
        citations: 1,
        type: 'journal'
    },
    {
        id: 3,
        title: "Machine Learning-Powered Personalization Engine for E-Commerce: Integrating Customer Experience with Inventory Optimization",
        authors: "J Davis",
        venue: "Journal of Engineering and Computer Sciences, 4(6), 258-273",
        year: 2025,
        link: "https://doi.org/10.5281/zenodo.15766853",
        type: 'journal'
    },
    {
        id: 4,
        title: "Accessibility in Mobile and Web-Engineering for Compliance and Inclusion",
        authors: "J Davis",
        venue: "Journal of Computer Science and Technology Studies, 7(6), 973-983",
        year: 2025,
        type: 'journal'
    },
    {
        id: 5,
        title: "Where Microfrontends with Module Federation Are Required: Advantages, Disadvantages, and the Risk of Overengineering",
        authors: "J Davis",
        venue: "International Journal of Science and Research (IJSR), 14(6), 1499-1500",
        year: 2025,
        link: "https://www.ijsr.net/getabstract.php?paperid=SR25621033541",
        type: 'journal'
    },
    {
        id: 6,
        title: "Enhancing Agile Software Development through Advanced Human-Computer Interaction Design",
        authors: "D Guru, J Davis, M Kunkulagunta, GS Nadella, S Kankala, V Raghunath, et al.",
        venue: "Journal of University of Bahrain",
        year: 2025,
        type: 'journal'
    },
    {
        id: 7,
        title: "Modern Authentication Methods: Enhancing Security and User Experience",
        authors: "J Davis",
        venue: "Journal of Information Systems Engineering and Management, 10(60s)",
        year: 2025,
        type: 'journal'
    },
]
