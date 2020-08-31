import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const TutoringFeedback = () => {
    return (
        <StaticQuery 
            query={graphql`
                query {
                    file(relativePath: { eq: "two-women-discussing-work.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 500, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            `}
            render={data => {
                const image = data.file.childImageSharp.fluid
                return (
                    <section className="TutoringFeedback">
                        <div className="TutoringFeedback__container">
                            <h1 className="TutoringFeedback__container--title">Feedback and school reports</h1>
                            <p className="TutoringFeedback__container--text">If possible, we would love parents to share recent school reports or issues they have noticed within their child's writing, allowing us to use the lesson plan and workbook that best suits them.</p>
                        </div>
                        <Img fluid={image} className="TutoringFeedback__img" />
                    </section>
                )
            }}
        />
    )
}
export default TutoringFeedback