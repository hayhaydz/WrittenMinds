import React from 'react'
import { Link } from 'gatsby'
import { MdArrowForward } from 'react-icons/md'

const HomeBtn = ({ to, text}) => {
    return <Link to={to} className="HomeBtn">{text}<MdArrowForward className="HomeBtn__icon"/></Link>
}
export default HomeBtn