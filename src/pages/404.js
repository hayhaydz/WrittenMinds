import React from 'react'
import { Link } from 'gatsby'
import { MdArrowBack } from 'react-icons/md'

import Header from '../components/Header/Header'

const NotFound = () => {
    return (
        <section className="NotFound">
            <Header />
            <div className="NotFound__container">
                <h1 className="NotFound__container--heading">Oops. It looks like you're a little lost.</h1>
                <p className="NotFound__container--text">Don't worry we'll get you back on track now.</p>
                <Link to={`/`} className="NotFound__container--link" ><MdArrowBack className="NotFound__container--link--icon" />Return Home</Link>
            </div>
        </section>
    )
}
export default NotFound