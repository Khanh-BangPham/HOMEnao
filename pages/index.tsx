import React, { useEffect, useRef } from 'react'
import type { NextPage } from 'next';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sliders from '../components/home/Sliders'
import Product from '../components/home/Product'
import Menubox from '../components/home/Menubox'
import Price from '../components/home/Price'
import Schedule from '../components/home/Schedule'
import About from '../components/home/About'
import Gallery from '../components/home/Gallery'
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Page: NextPage = () => {

  const backToTopClick = () => {
    console.log(1)
  }
  return (
    <>
      <div>
      {/* <Menubox /> */}
      <div data-scroll-container>
        <Header />
        <main className="mainwrapper homepage" >
          <Sliders />
          <Product />
          <Price />
          <Schedule />
          <About />
          <Gallery />
        </main>
        <Footer backToTopClick={backToTopClick} />
      </div>
      </div>
    </>
  )
}

export default Page