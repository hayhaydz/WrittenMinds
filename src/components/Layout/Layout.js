import React from 'react'
import '../../styles/main.scss'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
    return (
        <main className="Layout">
            <Header/>
            {children}
            <Footer/>
        </main>
    )
}
export default Layout