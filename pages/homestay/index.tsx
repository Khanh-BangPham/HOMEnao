import Link from 'next/link'
import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import imgslide1 from '../../assets/images/AL0A0001.jpg'
import RoomItem from '../../components/homestay/RoomItem'

const homestay = () => {
  const backToTopClick = () => {
    console.log(1)
  }
  return (
    <>
      <Header />
      <div className="homestay pd" data-scroll-section>
        <div className="homestay__textbox textbox --center">
          <h3 className="titlemain">Danh sách Home Stay</h3>
          <div className='breadcrumb'>
            <div className="bt-option">
              <Link href="./">Trang chủ</Link>
              <span>Home stay</span>
            </div>
          </div>
        </div>
        <div className="homestay__lists">
          <div className="container">
            <div className='row'>
              <RoomItem />
              <RoomItem />
              <RoomItem />
              <RoomItem />
            </div>
          </div>
        </div>
      </div>
      <Footer backToTopClick={backToTopClick} />
    </>
  )
}

export default homestay