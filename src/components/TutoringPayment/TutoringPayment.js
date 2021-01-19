import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const TutoringPayment = () => {
    return (
        <StaticQuery 
            query={graphql`
                query {
                    file(relativePath: { eq: "hand-holding-card-for-paying.jpg" }) {
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
                    <section className="TutoringPayment">
                        <Img fluid={image} className="TutoringPayment__img" />
                        <div className="TutoringPayment__container">
                            <h1 className="TutoringPayment__container--title">Payment methods</h1>
                            <p className="TutoringPayment__container--text">We are flexible and have a range of accounts, including PayPal. You chose the method.</p>
                            <p className="TutoringPayment__container--text">We only charge £14.50 per lesson (1hr30mins) and offer free workbooks once finished.</p>
                        </div>
                    </section>
                )
            }}
        />
    )
}
export default TutoringPayment