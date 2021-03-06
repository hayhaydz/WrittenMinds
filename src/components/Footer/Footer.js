import React from 'react'
import { Link } from 'gatsby'
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className="Footer">
            <section className="Footer__container">
                <h1 className="Footer__container--title" >Looking for a Workbook?</h1>
                <h2 className="Footer__container--subtitle" >Take a look at our selection!</h2>
                <Link to={`/workbooks`} className="Footer__container--link" >Workbooks</Link>
            </section>
            <section className="Footer__container">
                <h1 className="Footer__container--title" >Looking for a Tutor?</h1>
                <h2 className="Footer__container--subtitle" >Get in contact now!</h2>
                <Link to={`/tutoring#book`} className="Footer__container--link" >Contact Us</Link>
            </section>
            <div className="Footer__social">
                <a href="https://www.instagram.com/writtenminds_official/" className="Footer__social--link" target="_blank" rel="noreferrer"><AiOutlineInstagram className="Footer__social--link--icon" aria-label="Visit Instagram page" /></a>
                <a href="https://google.com" className="Footer__social--link" target="_blank" rel="noreferrer"><AiFillFacebook className="Footer__social--link--icon" aria-label="Visit Facebook page"/></a>
            </div>
            <p className="Footer__copyright">WrittenMinds © All rights Reserved.</p>
        </footer>
    )
}
export default Footer