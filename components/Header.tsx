import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import iconLogo from '../assets/images/logo.ico'
import { NextComponentType } from 'next'

const Header: NextComponentType = () => {
    const [scrollActive, setScrollActive] = useState(false)
    const menuElm = useRef<HTMLDivElement>(null)
    function scrollHandler(){
            
        let x = window.pageYOffset;
        console.log(x)
        if (x >= 700){
            menuElm.current?.classList.add('--black')
        } else {
            menuElm.current?.classList.remove('--black')
        }
        setScrollActive(true)
    }
    useEffect(() => {
       
        // Add the event listener
        window.addEventListener('scroll', scrollHandler)

        // Remove the event listener on cleanup
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }   
    })
    return (
        <>
            <header ref={menuElm} data-scroll-section data-scroll-section-inview>
                <div className="container-fluid">
                    <div className="logo">
                        <Link href="./"><img src={iconLogo.src} /></Link>
                        <h1 className="hidden">Hôme nào</h1>
                    </div>
                    <ul className="menu">
                        <li><Link className="active" href="./">Home</Link></li>
                        <li><Link href="/homestay">Homestay</Link></li>
                        <li><Link href="/contact">Liên hệ</Link></li>
                    </ul>
                    <div className="right">
                        <div className="buynow">
                            <Link className="buynow__btn btn" href="/homestay">  BOOK NOW </Link>
                        </div>
                        <div className="bottonnav">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header