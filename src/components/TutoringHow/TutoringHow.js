import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const TutoringHow = () => {
    return (
        <StaticQuery 
            query={graphql`
                query {
                    file(relativePath: { eq: "lady-teaching-boy-on-computer.jpg" }) {
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
                    <section className="TutoringHow" id="how">
                        <Img fluid={image} className="TutoringHow__img" />
                        <div className="TutoringHow__container">
                            <h1 className="TutoringHow__container--title">How it works</h1>
                            <p className="TutoringHow__container--text">1.30hr lessons that start with learning ten new words, listing their meanings and writing two example sentences for them. We then blast into learning grammar or language devices that we then practice through projects, such as research and essay writing or writing a story.</p>
                            <p className="TutoringHow__container--text">We then give your child a workbook to use over the following week, which covers important topics that they can study and practice.</p>
                        </div>
                    </section>
                )
            }}
        />
    )
}
export default TutoringHow