import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const OtherWorkbooks = ({ currentWorkbook }) => {
    return (
        <StaticQuery 
            query={graphql`
                query {
                    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/workbooks/"}}, sort: {fields: [frontmatter___date], order: DESC}, limit: 4) {
                    edges {
                        node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
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
            `}
            render={data => {
                const otherWorkbooks = data.allMarkdownRemark.edges
                return (
                    <section className="OtherWorkbooks">
                        <h1 className="OtherWorkbooks__title">Other Workbooks</h1>
                        <div className="OtherWorkbooks__container">
                            {otherWorkbooks.map((data, index) => {
                                return data.node.frontmatter.title !== currentWorkbook.markdownRemark.frontmatter.title &&
                                    <Link to={data.node.fields.slug} className="OtherWorkbooks__container--link" key={index}><p className="OtherWorkbooks__container--link--title">{data.node.frontmatter.title}</p><Img fluid={data.node.frontmatter.cover_image.childImageSharp.fluid} className="OtherWorkbooks__container--link--img" placeholderStyle={{filter: `blur(16px)`, transform: `scale(1.04)`}}/></Link>
                            })}
                        </div>
                    </section>
                )
            }}
        />
    )
}
export default OtherWorkbooks