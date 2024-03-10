import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import imgslide1 from '../../assets/images/AL0A0001.jpg'
import imgslide2 from '../../assets/images/AL0A0017.jpg'
import imgslide3 from '../../assets/images/AL0A0008.jpg'
import { NextComponentType } from 'next';
const Sliders: NextComponentType = () => {
    return (
            <section className="sliders" data-scroll-section data-scroll-section-inview>
                <Carousel className="sliders__list" showThumbs={false} showArrows={false} autoPlay={true} interval={5000} stopOnHover={false} transitionTime={1500}>
                    <div className="sliders__list-item">
                        <div className="sl-textbox"  data-scroll>
                            <h2 className="title">HÔME nào</h2>
                            {/* <Link className="sl-textbox__btn btn" href="#">  BOOK NOW </Link> */}
                        </div>
                        <img className="imgsliders imgslide" src={imgslide1.src} />
                    </div>
                    <div className="sliders__list-item">
                        <div className="sl-textbox">
                            <h2 className="title">HÔME nào</h2>
                            {/* <Link className="sl-textbox__btn btn" href="#">  BOOK NOW </Link> */}
                        </div>
                        <img className="imgsliders imgslide" src={imgslide2.src} />
                    </div>
                    <div className="sliders__list-item">
                        <div className="sl-textbox">
                            <h2 className="title">HÔME nào</h2>
                            {/* <Link className="sl-textbox__btn btn" href="#">  BOOK NOW </Link> */}
                        </div>
                        <img className="imgsliders imgslide" src={imgslide3.src} />
                    </div>
                </Carousel>
            </section>
    )
}

export default Sliders