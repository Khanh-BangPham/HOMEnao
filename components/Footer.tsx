import React, { useEffect, useRef } from 'react'
import Link from 'next/link'

interface FooterComponentProps {
    backToTopClick: () => void; // Define the type for the function
}

const Footer: React.FC<FooterComponentProps> = ({backToTopClick}) => {


    return (
        <>
            <footer data-scroll-section>
                <div className="container">
                    <p>© 2024 HÔME nào, Create by Beng </p>
                    <Link href="./"><img className="img/logo.png" /></Link>
                    <a onClick={backToTopClick} href="#" className="backtotop" >BACK TO TOP</a>
                </div>
            </footer>
        </>
    )
}

export default Footer