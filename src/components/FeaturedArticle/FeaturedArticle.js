import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const FeaturedArticle = ({ article }) => {
    return (
        <section className="FeaturedArticle">
            <h1 className="FeaturedArticle__heading">Featured Article</h1>
            <article className="FeaturedArticle__container">
                <Img fluid={article.frontmatter.featured_image.childImageSharp.fluid} className="FeaturedArticle__container--img" />
                <div className="FeaturedArticle__container--right">
                    <h1 className="FeaturedArticle__container--right--title">{article.frontmatter.title}</h1>
                    <p className="FeaturedArticle__container--right--desc">{article.frontmatter.description}</p>
                    <Link to={article.fields.slug} className="FeaturedArticle__container--right--link" >View More</Link>
                </div>
            </article>
        </section>
    )
}
export default FeaturedArticle