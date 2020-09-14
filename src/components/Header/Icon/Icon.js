import React from 'react'

import { MdMenu, MdClose } from 'react-icons/md'

const Icon = ({ open, setOpen }) => {
    return (
        <button className="Icon" open={open} onClick={() => setOpen(!open)} aria-label="Open Menu">
        {open ?
            <MdClose className="Icon--svg" /> :
            <MdMenu className="Icon--svg" />
        }
        </button>
    )
}
export default Icon