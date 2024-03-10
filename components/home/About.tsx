import React from 'react'
import Link from 'next/link'
import largeLogo from '../../assets/images/logo.jpg'

function About() {
    return (
        <>
            <section className="about pd" data-scroll-section>
                <div className="container">
                    <div className="about__textbox textbox --right">
                        <h3 className="titlemain">
                            Homestay
                        </h3>
                        <p>HÔME nào - Không gian nghỉ ngơi giản dị và ấm áp, mang đến sự thân quen như trong chính ngôi nhà riêng của bạn.</p>
                        <p>185/2B Phạm Văn Chiêu, Phường 14, Quận Gò Vấp, Ho Chi Minh City, Vietnam</p>
                        <Link className="botton" href="/contact">Tìm hiểu thêm </Link>
                    </div>
                    <i className="about__img c-fixed_target" >
                        <img className="c-fixed is-inview" data-scroll data-scroll-speed="-12" src={largeLogo.src} />
                    </i>
                </div>
            </section>
        </>
    )
}

export default About