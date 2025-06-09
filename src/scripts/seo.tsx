// src/components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
    title = "Jahmia Hezron | Fullstack Developer | Flutter, Golang, React",
    description = "Jahmia Hezron is a fullstack developer specializing in modern web, desktop, and mobile apps using Flutter, Golang, and React.",
    keywords = "Jahmia Hezron, Flutter, Fullstack Developer, Golang, React, Uganda, Web Developer, Mobile Developer, Software Engineer, UI/UX Design, App Development, Coding, Open Source",
    url = "https://jahmia-hezron.github.io",
    image = "/banner.png",
    twitterHandle = "@yourTwitterHandle",
    canonical = "https://jahmia-hezron.github.io",
    structuredData = null
}) => {
    // Default JSON-LD structured data if none provided
    const defaultStructuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Jahmia Hezron",
        alternateName: "Hezron Jahmia",
        jobTitle: "Fullstack Developer",
        image: `${url}${image}`,
        url: url,
        sameAs: [
            "https://www.linkedin.com/in/jahmia-hezron",
            "https://github.com/Jahmia-Hezron/",
            `https://twitter.com/${twitterHandle.replace("@", "")}`
        ],
        worksFor: {
            "@type": "Organization",
            name: "BM Publications"
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Kampala",
            addressCountry: "UG"
        }
    };

    return (
        <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <link rel="canonical" href={canonical} />

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />

            {/* SEO Meta */}
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${url}${image}`} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${url}${image}`} />
            <meta name="twitter:creator" content={twitterHandle} />

            {/* Apple Touch Icon */}
            <link rel="apple-touch-icon" href={`${url}${image}`} />
            <link rel="manifest" href="/manifest.json" />

            {/* Preconnect for Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* Structured Data JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData || defaultStructuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
