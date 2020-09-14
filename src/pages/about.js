import React from 'react'

import Layout from '../components/Layout/Layout'

import AboutLanding from '../components/AboutLanding/AboutLanding'
import AboutAttention from '../components/AboutAttention/AboutAttention'
import AboutDetails from '../components/AboutDetails/AboutDetails'

const About = () => {
    return (
        <Layout customTitle="About">
            <AboutLanding />
            <AboutAttention />
            <AboutDetails />
        </Layout>
    )
}
export default About