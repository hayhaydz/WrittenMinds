import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'

const workbook = ({ data }) => {
    console.log(data);

    return (
        <Layout>
            <article className="WorkbookPost">
                <h1>This is a workbook.</h1>
            </article>
        </Layout>
    )
}
export default workbook

export const pageQuery = graphql`
    query ArticlePostBySlug($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                description
                price
                cover_image {
                    childImageSharp {
                        fluid(maxWidth: 1920, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`