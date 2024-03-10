import Link from 'next/link'
import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

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
              <Link href="/">Trang chủ</Link>
              <span>Home staty</span>
            </div>
          </div>
        </div>
        <div className="homestay__lists">
          <div className="container">
            <div className='row'>
              <div className='col-lg-4'>
                <div className="room-item">
                  <img src="https://maryjanethehome.s3.ap-southeast-2.amazonaws.com/1708329886154-Secret%20garden.jpg" alt="" />
                  <div className="ri-text">
                    <h4>Secret Garden</h4>
                    <h3>350,000 vnđ<span>/Qua đêm</span></h3>
                    <a className="primary-btn" href="/detail">Chi tiết</a></div></div>
              </div>
              <div className='col-lg-4'>
                <div className="room-item">
                  <img src="https://maryjanethehome.s3.ap-southeast-2.amazonaws.com/1708329886154-Secret%20garden.jpg" alt="" />
                  <div className="ri-text">
                    <h4>Secret Garden</h4>
                    <h3>350,000 vnđ<span>/Qua đêm</span></h3>
                    <a className="primary-btn" href="/detail">Chi tiết</a></div></div>
              </div>
              <div className='col-lg-4'>
                <div className="room-item">
                  <img src="https://maryjanethehome.s3.ap-southeast-2.amazonaws.com/1708329886154-Secret%20garden.jpg" alt="" />
                  <div className="ri-text">
                    <h4>Secret Garden</h4>
                    <h3>350,000 vnđ<span>/Qua đêm</span></h3>
                    <a className="primary-btn" href="/detail">Chi tiết</a></div></div>
              </div>
              <div className='col-lg-4'>
                <div className="room-item">
                  <img src="https://maryjanethehome.s3.ap-southeast-2.amazonaws.com/1708329886154-Secret%20garden.jpg" alt="" />
                  <div className="ri-text">
                    <h4>Secret Garden</h4>
                    <h3>350,000 vnđ<span>/Qua đêm</span></h3>
                    <a className="primary-btn" href="/detail">Chi tiết</a></div></div>
              </div>
              <div className='col-lg-4'>
                <div className="room-item">
                  <img src="https://maryjanethehome.s3.ap-southeast-2.amazonaws.com/1708329886154-Secret%20garden.jpg" alt="" />
                  <div className="ri-text">
                    <h4>Secret Garden</h4>
                    <h3>350,000 vnđ<span>/Qua đêm</span></h3>
                    <a className="primary-btn" href="/detail">Chi tiết</a></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer backToTopClick={backToTopClick} />
    </>
  )
}

export default homestay