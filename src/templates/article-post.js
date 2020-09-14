import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout/Layout'

const Article = ({ data }) => {
    const articleData = data.markdownRemark
    const imageSrc = articleData.frontmatter.featured_image.childImageSharp.fluid.src

    return (
        <Layout customTitle={articleData.frontmatter.title} customDescription={articleData.excerpt} customImgSrc={imageSrc}>
            <article className="Article">
                <span className="Article__date">{articleData.frontmatter.date}</span>
                <h1 className="Article__title">{articleData.frontmatter.title}</h1>
                <Img fluid={articleData.frontmatter.featured_image.childImageSharp.fluid} className="Article__img" placeholderStyle={{filter: `blur(16px)`, transform: `scale(1.04)`}}/>
                <div dangerouslySetInnerHTML={{__html: articleData.html}} className="Article__container" />
            </article>
        </Layout>
    )
}
export default Article

export const pageQuery = graphql`
    query ArticlePostBySlug($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "DD/MM/YYYY")
                featured_image {
                    childImageSharp {
                        fluid(maxWidth: 1920, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            src
                        }
                    }
                }
            }
            excerpt(pruneLength: 200)
            html
        }
    }
`