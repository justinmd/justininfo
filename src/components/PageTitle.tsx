import { Helmet } from "react-helmet-async";

const SITE_URL = "https://justindavis.info";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
const SITE_NAME = "Justin Davis";

export type PageTitleProps = {
    title: string
    description?: string
    path?: string
    image?: string
}

export const PageTitle = ({
    title,
    description = "Justin Davis — Principal Engineer with 17+ years of experience in React, Angular, TypeScript, micro-frontends, and full-stack development. IEEE Senior Member. Fremont, CA.",
    path = "/",
    image = DEFAULT_IMAGE,
}: PageTitleProps) => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonical = `${SITE_URL}${path}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
            <link rel="alternate" hrefLang="en" href={canonical} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={SITE_NAME} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="profile" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:alt" content={SITE_NAME} />

            {/* Breadcrumb structured data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": `${SITE_URL}/`
                        },
                        ...(path !== "/" ? [{
                            "@type": "ListItem",
                            "position": 2,
                            "name": title,
                            "item": canonical
                        }] : [])
                    ]
                })}
            </script>
        </Helmet>
    )
}
