import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { MdArrowDownward } from 'react-icons/md'

const FeaturedWorkbook = ({ workbook }) => {
    return (
        <section className="FeaturedWorkbook">
            <Img fluid={workbook.frontmatter.cover_image.childImageSharp.fluid} className="FeaturedWorkbook__img"/>
            <div className="FeaturedWorkbook__right">
                <h1 className="FeaturedWorkbook__right--title" >{workbook.frontmatter.title}</h1>
                <h4 className="FeaturedWorkbook__right--detail-title">PRICE</h4>
                <h2 className="FeaturedWorkbook__right--price">{workbook.frontmatter.price}</h2>
                <Link to={workbook.fields.slug} className="FeaturedWorkbook__right--link">Download Now</Link>
                <AnchorLink to="/workbooks#workbookRoll" className="FeaturedWorkbook__right--scrollLink">View more workbooks <MdArrowDownward className="FeaturedWorkbook__right--scrollLink--icon" /></AnchorLink>
            </div>
        </section>
    )
}
export default FeaturedWorkbook