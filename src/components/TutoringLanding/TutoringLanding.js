import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { MdArrowDownward } from 'react-icons/md'

const TutoringLanding = () => {
    return (
        <StaticQuery 
            query={graphql`
                query {
                    file(relativePath: { eq: "two-hands-working.jpg" }) {
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
                    <section className="TutoringLanding">
                        <Img fluid={image} className="TutoringLanding__img" placeholderStyle={{filter: `blur(16px)`, transform: `scale(1.04)`}}/>
                        <div className="TutoringLanding__right">
                            <h1 className="TutoringLanding__right--title">Personal Tutoring</h1>
                            <span className="TutoringLanding__right--detail-title">Starting At</span>
                            <h2 className="TutoringLanding__right--price">&pound;14.99 <span className="TutoringLanding__right--price--detail">per hour</span></h2>
                            <AnchorLink to="/tutoring#book" className="TutoringLanding__right--link">Book Now</AnchorLink>
                            <AnchorLink to="/tutoring#how" className="TutoringLanding__right--scrollLink">View more about tutoring <MdArrowDownward className="TutoringLanding__right--scrollLink--icon" /></AnchorLink>
                        </div>
                    </section>
                )
            }}
        />
    )
}
export default TutoringLanding