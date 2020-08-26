import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import HomeBtn from '../HomeBtn/HomeBtn'

const HomeProj = () => {
    return (
        <StaticQuery 
            query={graphql`
                query {
                    file(relativePath: { eq: "leading-project-based-learning_background.jpg" }) {
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
                        className="HomeProj"
                        fluid={image}
                    >
                        <div className="HomeProj__container">
                            <h1 className="HomeProj__container--title">Leading Project-based learning</h1>
                            <p className="HomeProj__container--text">Our tasks feature Story writing, research, essay writing, article creations and synonym searching tasks. We realise that students learn best when they apply feedback and concepts through projects, instead of tick boxes and filling in blanks.</p>   
                            <HomeBtn to="/workbooks" text="Take a look at our workbooks" />
                        </div>
                    </BackgroundImage>
                )
            }}  
        />
    )
}
export default HomeProj