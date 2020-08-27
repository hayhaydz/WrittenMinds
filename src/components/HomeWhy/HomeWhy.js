import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import HomeBtn from '../HomeBtn/HomeBtn'

const HomeWhy = () => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    file(relativePath: { eq: "hand-showing-man-work.jpg" }) {
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
                    <section className="HomeWhy">
                        <Img fluid={image} className="HomeWhy__img"/>
                        <div className="HomeWhy__container">
                            <h1 className="HomeWhy__container--title">Why WrittenMinds?</h1>
                            <p className="HomeWhy__container--text">Having spent two-years tutoring and developing workbooks and tasks that improve spelling, thinking and written ability, we know how to capture your children's imaginations and immerse them in learning.</p>
                            <HomeBtn to="/about" text="Learn more about us" />
                        </div>
                    </section>
                )
            }}
        />
    )
}
export default HomeWhy