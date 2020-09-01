import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import FeaturedArticle from '../components/FeaturedArticle/FeaturedArticle'
import BlogRoll from '../components/BlogRoll/BlogRoll'

const Blog = ({ data }) => {
    const articleData = data.allMarkdownRemark.edges;
    let featuredArticle;
    for(const article of articleData) {
        if(article.node.frontmatter.featured_article) {
            featuredArticle = article.node
            break
        }
    }
    if(featuredArticle === undefined) {
        featuredArticle = articleData[0].node
        featuredArticle.frontmatter.featured_article = true
    }

    return (
        <Layout>
            <FeaturedArticle article={featuredArticle} />
            <BlogRoll articleData={articleData} />
        </Layout>
    )
}
export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            featured_article
            title
            description
            featured_image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`