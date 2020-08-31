import React from 'react';
import { Link } from 'gatsby'
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'

const Navigation = ({ open, setOpen }) => {
    return (
        <div className={'Navigation' + (open ? ' Navigation--open' : '')}>
            <nav className="Navigation__nav">
                <ul className="Navigation__nav--ul">
                    <li className="Navigation__nav--li"><Link to={`/`} className="Navigation__nav--link" activeClassName="Navigation__nav--link--active">Home</Link></li>
                    <li className="Navigation__nav--li"><Link to={`/workbooks`} className="Navigation__nav--link" activeClassName="Navigation__nav--link--active" partiallyActive={true}>Workbooks</Link></li>
                    <li className="Navigation__nav--li"><Link to={`/tutoring`} className="Navigation__nav--link" activeClassName="Navigation__nav--link--active" partiallyActive={true}>Tutoring</Link></li>
                    <li className="Navigation__nav--li"><Link to={`/about`} className="Navigation__nav--link" activeClassName="Navigation__nav--link--active">About</Link></li>
                    <li className="Navigation__nav--li"><Link to={`/blog`} className="Navigation__nav--link" activeClassName="Navigation__nav--link--active" partiallyActive={true}>Blog</Link></li>
                </ul>
            </nav>
            <div className="Navigation__social">
                <a href="https://google.com" className="Navigation__social--link" target="_blank" rel="noreferrer"><AiOutlineInstagram className="Navigation__social--link--icon" aria-label="Visit Instagram page" /></a>
                <a href="https://google.com" className="Navigation__social--link" target="_blank" rel="noreferrer"><AiFillFacebook className="Navigation__social--link--icon" aria-label="Visit Facebook page"/></a>
            </div>
        </div>
    )
}
export default Navigation