import React from 'react';
import { Link } from 'gatsby'

const Navigation = ({ open, setOpen }) => {
    return (
        <div className={'Navigation' + (open ? ' Navigation--open' : '')}>
            <nav className="Navigation__nav">
                <ul className="Navigation__nav--ul">
                    <li className="Navigation__nav--li"><Link to={`/`} className="Navigation__nav--link" activeClassName="Navigation__nav--link--active">Home</Link></li>
                    <li className="Navigation__nav--li"><Link to={`/workbooks`} className="Navigation__nav--link" activeClassName="Navigation__nav--link--active">Workbooks</Link></li>
                    <li className="Navigation__nav--li"><Link to={`/tutoring`} className="Navigation__nav--link" activeClassName="Navigation__nav--link--active">Tutoring</Link></li>
                    <li className="Navigation__nav--li"><Link to={`/about`} className="Navigation__nav--link" activeClassName="Navigation__nav--link--active">About</Link></li>
                    <li className="Navigation__nav--li"><Link to={`/blog`} className="Navigation__nav--link" activeClassName="Navigation__nav--link--active">Blog</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navigation