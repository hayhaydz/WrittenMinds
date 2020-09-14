import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const SEO = ({ customTitle, customDescription, customImgSrc }) => {
    const { site } = useStaticQuery(query)

    const defaults = site.siteMetadata

    const title = customTitle || defaults.title
    const titleTemplate = defaults.titleTemplate
    const description = customDescription || defaults.description
    const url = defaults.url
    const image = customImgSrc && defaults.image
        ? `${url}${customImgSrc}`
        : `${url}${defaults.image}`

    return (
        <Helmet>
            <html lang="en" />
            <title>{`${title}${titleTemplate}`}</title>
            <link rel="canonical" href={url} />
            <meta name="description" content={description} />
            {image && <meta name="image" content={image} />}

            <meta property="og:url" content={url} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
        </Helmet>
    )
}
export default SEO

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                description
                image
                title
                titleTemplate
                url
            }
        }
    }
`