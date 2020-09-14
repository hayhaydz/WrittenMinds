import React from 'react'
import '../../styles/main.scss'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SEO from '../SEO/SEO'

const Layout = ({children, customTitle, customDescription, customImgSrc}) => {
    return (
        <main className="Layout">
            <SEO customTitle={customTitle} customDescription={customDescription} customImgSrc={customImgSrc}/>
            <Header/>
            {children}
            <Footer/>
        </main>
    )
}
export default Layout