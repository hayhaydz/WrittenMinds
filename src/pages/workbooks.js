import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import FeaturedWorkbook from '../components/FeaturedWorkbook/FeaturedWorkbook'
import WorkbookRoll from '../components/WorkbookRoll/WorkbookRoll'

const Workbooks = ({ data }) => {
  const workbookData = data.allMarkdownRemark.edges;
  let featuredWorkbook;
  for(const workbook of workbookData) {
    if(workbook.node.frontmatter.featured_workbook) {
      featuredWorkbook = workbook.node
    }
  }

  return (
      <Layout>
          <FeaturedWorkbook workbook={featuredWorkbook} />
          <WorkbookRoll workbookData={workbookData} />
      </Layout>
  )
}
export default Workbooks

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/workbooks/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            featured_workbook
            title
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
    }
  }
`