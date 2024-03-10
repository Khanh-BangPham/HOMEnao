import React from 'react'
import Link from 'next/link'

const Menubox = () => {
    return (
        <>
            <nav className="menubox">
                <ul>
                    <li><Link className="active" href="#slider">Home</Link></li>
                    <li><Link href="#products">Product</Link></li>
                    <li><Link href="#videos">videos</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#gallery">Gallery</Link></li>
                    <li><Link href="#news">News</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Menubox