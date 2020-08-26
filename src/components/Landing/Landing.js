import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import BackgroundImage from 'gatsby-background-image'
import { MdChevronRight } from 'react-icons/md'
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'

const Landing = () => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    file(relativePath: { eq: "landing_background.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 1920, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            `}
            render={data => {
                const image = data.file.childImageSharp.fluid
                return (
                    <BackgroundImage
                        tag="section"
                        className="Landing"
                        fluid={image}
                    >
                        <h1 className="Landing__heading">Creating inovative modern <span className="Landing__heading--keyword">workbooks</span> to help increase your <span className="Landing__heading--keyword">child's</span> engagement.</h1>
                        <div className="Landing__buttons">
                            <Link to={`/workbooks`} className="Landing__buttons--btn Landing__buttons--btn--primary" >Workbooks</Link>
                            <Link to={`/tutoring`} className="Landing__buttons--btn Landing__buttons--btn--secondary" >Tutoring</Link>
                        </div>
                        <div className="Landing__social">
                            <a href="https://google.com" className="Landing__social--link" target="_blank" rel="noreferrer"><AiOutlineInstagram className="Landing__social--link--icon" aria-label="Visit Instagram page" /></a>
                            <a href="https://google.com" className="Landing__social--link" target="_blank" rel="noreferrer"><AiFillFacebook className="Landing__social--link--icon" aria-label="Visit Facebook page"/></a>
                        </div>
                        <AnchorLink to={`/#why`} className="Landing__scrollLink"><MdChevronRight className="Landing__scrollLink--icon"/></AnchorLink>
                    </BackgroundImage>
                )
            }}
        />
    )
}
export default Landing