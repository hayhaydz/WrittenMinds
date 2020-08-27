import React from 'react'

import Layout from '../components/Layout/Layout'

const Workbooks = () => {
    return (
        <Layout>

        </Layout>
    )
}
export default Workbooks

// export const pageQuery = graphql`
//     query {
//         allMarkdownRemark(
//             filter: { fileAbsolutePath: { regex: "\/lifestyle/"}}
//             sort: { fields: [frontmatter___date], order: DESC }
//         ) {
//             edges {
//             node {
//                 fields {
//                     slug
//                 }
//                 frontmatter {
//                     date(formatString: "DD/MM/YYYY")
//                     author
//                     description
//                     subtitle
//                     title
//                     featured_image {
//                         childImageSharp {
//                             fluid(maxWidth: 500, quality: 100) {
//                                 ...GatsbyImageSharpFluid
//                             }
//                         }
//                     }
//                 }
//             }
//             }
//         }
//     } 
// `