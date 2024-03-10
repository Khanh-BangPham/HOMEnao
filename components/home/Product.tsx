import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import imgslide1 from '../../assets/images/AL0A0001.jpg'
import imgslide2 from '../../assets/images/AL0A0017.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll'
import { NextComponentType } from 'next'
import { useLocomotiveScroll, Scroll } from 'react-locomotive-scroll'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScrollEventObject {
    scroll: {
      x: number;
      y: number;
      limit: number;
    };
}
const Product: NextComponentType = () => {
    const textboxLeftElm = useRef<HTMLDivElement>(null)
    const imgLeftElm = useRef<HTMLDivElement>(null)
    const textboxRightElm = useRef<HTMLDivElement>(null)
    const imgRightElm = useRef<HTMLDivElement>(null)
    const tl = useRef<GSAPTimeline>()

    return (
            <section className="products" data-scroll-section data-scroll-section-inview>
                <div className="container">
                    <div className="product">
                        <div className="product__textbox textbox --left c-direction-block_item_inner is-inview" 
                        ref={textboxLeftElm} 
                        data-scroll-id="product-textbox-1"
                        data-scroll
                        data-scroll-speed="-6"
                        data-scroll-target=".product"
                        data-scroll-direction="horizontal"
                        >
                            <h3 className="titlemain">Tiện nghi</h3>
                            <p>Homestay Tiện Nghi được thiết kế và trang bị một cách đặc biệt để đáp ứng các nhu cầu cao cấp của du khách.</p>
                            <Link className="botton" href="#">Tìm hiểu thêm <i><img className="./img/rightarrow-yl.png" /></i></Link>
                        </div>
                        <div className="product__img" ref={imgLeftElm} 
                        data-scroll
                       
                        data-scroll-speed="6"
                        data-scroll-target=".product"
                        data-scroll-direction="horizontal"
                        >
                            <img src={imgslide1.src} />
                        </div>
                    </div>
                    <div className="product">
                        <div className="product__textbox textbox --right" ref={textboxRightElm} 
                        data-scroll
                        data-scroll-speed="12"
                        data-scroll-id="product-textbox-2"
                        data-scroll-target=".product"
                        data-scroll-direction="horizontal"
                        >
                            <h3 className="titlemain">Netflix</h3>
                            <p>Homestay Netflix là một xu hướng mới, được lấy cảm hứng từ cách mà Netflix tạo ra nội dung giải trí độc đáo và cá nhân hóa cho mỗi người dùng.</p>
                            <Link className="botton" href="#">Tìm hiểu thêm <i><img className="./img/rightarrow-yl.png" /></i></Link>
                        </div>
                        <div className="product__img" ref={imgRightElm} 
                        data-scroll
                        data-scroll-speed="-12"
                        data-scroll-target=".product"
                        data-scroll-direction="horizontal"
                        >
                            <img src={imgslide2.src} />
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Product