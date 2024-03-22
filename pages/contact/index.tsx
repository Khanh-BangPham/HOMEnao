import Link from 'next/link'
import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import imgslide1 from '../../assets/images/AL0A0001.jpg'

const contact = () => {
  const backToTopClick = () => {
    console.log(1)
  }
  return (
    <>
      <Header />
      <div className="contact pd" data-scroll-section>
        <div className="contact__textbox textbox --center">
          <h3 className="titlemain">Thông tin liên hệ</h3>
          <div className='breadcrumb'>
            <div className="bt-option">
              <Link href="./">Trang chủ</Link>
              <span>Liên hệ</span>
            </div>
          </div>
        </div>
        <div className="contact__detail">
          <div className="container">
            <div className='row'>
                <div className="contact__textbox textbox --right">
                        <p><b>Địa chỉ:</b> 185/2B Phạm Văn Chiêu, Phường 14, Quận Gò Vấp, Ho Chi Minh City, Vietnam</p>
                        <p><b>Điện thoại:   </b> (+84)000 000 000</p>
                        {/* <Link className="botton" href="https://www.facebook.com/homestaynao">Facebook </Link> */}
                </div>                
            </div>
          </div>
        </div>
      </div>
      <Footer backToTopClick={backToTopClick} />
    </>
  )
}

export default contact