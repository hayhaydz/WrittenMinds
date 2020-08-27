import React, { useState, useMemo } from 'react'
import { Link } from 'gatsby'
import { useScrollPosition } from './UseScrollPosition/UseScrollPosition'

import Logo from '../../img/Logo.svg'
import Icon from './Icon/Icon'
import Navigation from './Navigation/Navigation'

const Header = () => {
    const [open, setOpen ] = useState(false);
    const [hideOnScroll, setHideOnScroll] = useState(false)

    useScrollPosition(
        ({ currPos }) => {
            const isShow = currPos.y < 0
            if (isShow !== hideOnScroll) setHideOnScroll(isShow)
        },
        [hideOnScroll]
    )

    return useMemo(
        () => (
            <header className={'Header' + (hideOnScroll ? ' Header--scrolling' : '')}>
                <Link to={`/`} className="Header__logo"><img src={Logo} className="Header__logo--img" alt="Written Minds text, Written is white and Minds is pink, finishing with a white fullstop at the end."/></Link>
                <Icon open={open} setOpen={setOpen} />
                <Navigation open={open} setOpen={setOpen} />
            </header>
        ),
        [hideOnScroll, open]
    )
}
export default Header