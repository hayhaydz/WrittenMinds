import React from 'react'
import '../../styles/main.scss'

const Layout = ({children}) => {
    return (
        <main className="Layout">
            {children}
        </main>
    )
}
export default Layout