import React from 'react'
import Link from 'next/link'
import { NextComponentType } from 'next'
import imgslide1 from '../../assets/images/AL0A0001.jpg'
import imgslide2 from '../../assets/images/AL0A0017.jpg'
import imgslide3 from '../../assets/images/AL0A0008.jpg'
import imgslide4 from '../../assets/images/AL0A9872.jpg'
import imgslide5 from '../../assets/images/AL0A9909.jpg'

const Gallery: NextComponentType = () => {
    return (
        <>
            <section className="gallery pd" data-scroll-section>
                <div className="container">
                    <div className="gallery__textbox textbox">
                        <h3 className="titlemain">Chào mừng bạn đến với HÔME nào</h3>
                        <p>Chúng tôi sẽ cố gắng nâng cao chất lượng dịch vụ của HÔME NÀO ngày càng tốt hơn và mong rằng sẽ có thêm cơ hội được phục vụ quý khách.</p>
                    </div>
                    <div className="gallery__carousel">
                        <div className="carousel-img" itemScope data-pswp-uid={1}>
                            <figure className="image img1">
                                <Link href={imgslide1.src} data-size="600x400">
                                    <img src={imgslide1.src} />
                                </Link>
                            </figure>
                            <figure className="image img2">
                                <Link href={imgslide2.src} data-size="600x400">
                                    <img src={imgslide2.src} />
                                </Link>
                            </figure>
                            <figure className="image img3">
                                <Link href={imgslide3.src} data-size="600x830">
                                    <img src={imgslide3.src} />
                                </Link>
                            </figure>
                            <figure className="image img4">
                                <Link href={imgslide4.src} data-size="600x400">
                                    <img src={imgslide4.src} />
                                </Link>
                            </figure>
                            <figure className="image img5">
                                <Link href={imgslide5.src} data-size="600x400">
                                    <img src={imgslide5.src} />
                                </Link>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery