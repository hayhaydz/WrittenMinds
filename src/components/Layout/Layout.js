import React from 'react'
import '../../styles/main.scss'

import Header from '../Header/Header'

const Layout = ({children}) => {
    return (
        <main className="Layout">
            <Header/>
            {children}
        </main>
    )
}
export default Layout