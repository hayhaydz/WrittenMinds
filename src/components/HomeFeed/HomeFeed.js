import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import HomeBtn from '../HomeBtn/HomeBtn'

const HomeFeed = () => {
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
                    <section className="HomeFeed">
                        <div className="HomeFeed__container">
                            <h1 className="HomeFeed__container--title">Constant feedback from parents</h1>
                            <p className="HomeFeed__container--text">At Writtenminds, we seek feedback from parents, letting them inform our lessons, alongside the students. Our thinking based lessons ( research, essays, etc) were developed because parents felt their kids needed help learning to think critically. We assist children by asking questions about current topics.</p>
                            <HomeBtn to="/tutoring" text="Start your child's tutoring now" />
                        </div>
                        <Img fluid={image} className="HomeFeed__img" />
                    </section>
                )
            }}
        />
    )
}
export default HomeFeed