import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const WorkbookRoll = ({ workbookData }) => {
    return (
        <section className="WorkbookRoll" id="workbookRoll">
            {workbookData.map((data, index) => {
                return !data.node.frontmatter.featured_workbook &&
                    <Link to={data.node.fields.slug} key={index} className="WorkbookRoll__link">
                        <p className="WorkbookRoll__link--title">{data.node.frontmatter.title}</p>
                        <Img fluid={data.node.frontmatter.cover_image.childImageSharp.fluid} className="WorkbookRoll__link--img" placeholderStyle={{filter: `blur(16px)`, transform: `scale(1.04)`}}/>
                    </Link>
            }
            )}
        </section>
    )
}
export default WorkbookRoll