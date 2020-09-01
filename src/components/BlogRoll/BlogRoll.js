import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const BlogRoll = ({ articleData }) => {
    return (
        <section className="BlogRoll">
            {articleData.map((data, index) => {
                return !data.node.frontmatter.featured_article &&
                    <article className="BlogRoll__article" key={index}>
                        <Img fluid={data.node.frontmatter.featured_image.childImageSharp.fluid} className="BlogRoll__article--img" />
                        <h1 className="BlogRoll__article--title">{data.node.frontmatter.title}</h1>
                        <p className="BlogRoll__article--desc">{data.node.frontmatter.description}</p>
                        <Link to={data.node.fields.slug} className="BlogRoll__article--link">View More</Link>
                    </article>
            }
            )}
        </section>
    )
}
export default BlogRoll