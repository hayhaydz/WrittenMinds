import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { MdArrowDownward } from 'react-icons/md'

const AboutLanding = () => {
    return (
        <section className="AboutLanding">
            <h1 className="AboutLanding__title">About Us</h1>
            <h2 className="AboutLanding__subtitle">What we can do for you</h2>
            <AnchorLink to="/about#attention" className="AboutLanding__scrollLink">Take a Look <span role="img" aria-label="eyes">👀</span><MdArrowDownward className="AboutLanding__scrollLink--icon" /></AnchorLink>
        </section>
    )
}
export default AboutLanding