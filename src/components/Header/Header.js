import React, { useState } from 'react'
import { Link } from 'gatsby'

import Logo from '../../img/Logo.svg'
import Icon from './Icon/Icon'
import Navigation from './Navigation/Navigation'

const Header = () => {
    const [open, setOpen ] = useState(false);

    return (
        <header className="Header">
            <Link to={`/`} className="Header__logo"><img src={Logo} className="Header__logo--img" alt="Written Minds text, Written is white and Minds is pink, finishing with a white fullstop at the end."/></Link>
            <Icon open={open} setOpen={setOpen} />
            <Navigation open={open} setOpen={setOpen} />
        </header>
    )
}
export default Header