import React from 'react'
import Header from '../../components/Header'
import Link from 'next/link'
import RoomItem from '../../components/homestay/RoomItem'
import Footer from '../../components/Footer'
import imgslide1 from '../../assets/images/AL0A0001.jpg'
import { Carousel } from 'react-responsive-carousel'

const detail = () => {
  // Define the onClickThumb callback function
const onClickThumb = (index: Number, item: any) => {
  // Your logic to handle the click event on the thumb
  console.log(`Clicked on thumb at index ${index}. Item:`, item);
  // Example: Navigate to a specific page or display more information about the item
};

// Example usage:
const thumbnails = [
  { src: imgslide1.src, alt: 'Image 1' },
  { src: imgslide1.src, alt: 'Image 2' },
  { src: imgslide1.src, alt: 'Image 3' }
];

// Render thumbnails
thumbnails.map((thumbnail, index) => (
  <img
    key={index}
    src={thumbnail.src}
    alt={thumbnail.alt}
    onClick={() => onClickThumb(index, thumbnail)}
  />
));
  const backToTopClick = () => {
    console.log(1)
  }
  return (
    <>
      <Header />
      <div className="room pd" data-scroll-section>
        <div className="room__textbox textbox --center">
          <h3 className="titlemain">Chi tiết phòng-<span> NETFLIX 201 </span></h3>
          <div className='breadcrumb'>
            <div className="bt-option">
              <Link href="./">Trang chủ</Link>
              <Link href="./detail">Homestay</Link>
              <span>Detail</span>
            </div>
          </div>
        </div>
        <div className="room__detail">
          <div className="container">
            <div className='row'>
              <div className="col-lg-6">
                <Carousel className="room__detail-carousel"
                showArrows={false} autoPlay={true} showThumbs={true} interval={3000} stopOnHover={false} transitionTime={1500}>
                  <img src={imgslide1.src} alt="" />
                  <img src={imgslide1.src} alt="" />
                  <img src={imgslide1.src} alt="" />
                  <img src={imgslide1.src} alt="" />
                </Carousel>
                <div className="ri-text">
                    <h4>NETFLIX 201</h4>
                    <h3><span>Bảng giá: </span></h3>
                    <h3><span>Ca trưa  </span><span> 11h - 15h  </span>220.000 vnđ</h3>
                    <h3><span>Ca chiều  </span><span> 15h30 - 19h30  </span>220.000 vnđ</h3>
                    <h3><span>Ca qua đêm  </span><span> 20h - 10h30  </span>350.000 vnđ</h3>
                    <span>Vì là hệ thống homestay self-checkin, nên bạn lưu ý phải điền đúng SĐT (Tốt nhất là SDT có thể liên hệ qua ZALO) và Email khi thực hiện đặt phòng. Để hệ thống ghi nhận và gửi những thông tin nhận phòng cho bạn nhé!
                    <br />Nếu có vấn đề gì thắc mắc trong quá trình đặt phòng.
                    <br />Bạn có thể liên hệ qua SĐT/ZALO: 0584 835 027</span>
                </div>
              </div>
              <div className="col-lg-6">
                <form  className="room__detail-form">
                  <h4>Thông tin đặt phòng</h4>
                  <label htmlFor="">
                    Số người:
                    <input type="number" min="1" max="10"/>
                  </label>
                  <label>
                    Họ và tên:
                    <input type="text" />
                  </label>
                  <label>
                    Số điện thoại:
                    <input type="text" />
                  </label>
                  <label>
                    Email: 
                    <input type="text" />
                  </label>
                  <label>
                    Ghi chú:
                    <textarea />
                  </label>
                  <input className='btn' type="submit" value="Đặt phòng" />
                </form>
              </div>
              <div className="col-lg-12">
                    <div className="schedule-textbox textbox --center">
                        <h3 className="titlemain">Lịch đặt phòng</h3>
                    </div>
                    <div className="infinite-scroll-table" style={{ fontFamily: 'Cabin' }}>
                        <table className="table">
                            <thead className="available-time-booking">
                                <tr className="freeze-header">
                                    <th className="sticky-column">Thứ</th>
                                    <th>Ngày</th>
                                    <th>11:00 - 14:00</th>
                                    <th>14:30 - 17:30</th>
                                    <th>18:00 - 21:00</th>
                                    <th>Qua đêm 21:30 - 10:30</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="sticky-column">4</td>
                                    <td className="sticky-column2">06-03-2024</td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="sticky-column">4</td>
                                    <td className="sticky-column2">06-03-2024</td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="sticky-column">4</td>
                                    <td className="sticky-column2">06-03-2024</td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="sticky-column">4</td>
                                    <td className="sticky-column2">06-03-2024</td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="sticky-column">4</td>
                                    <td className="sticky-column2">06-03-2024</td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="sticky-column">4</td>
                                    <td className="sticky-column2">06-03-2024</td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="sticky-column">4</td>
                                    <td className="sticky-column2">06-03-2024</td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="sticky-column">4</td>
                                    <td className="sticky-column2">06-03-2024</td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="sticky-column">4</td>
                                    <td className="sticky-column2">06-03-2024</td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="sticky-column">4</td>
                                    <td className="sticky-column2">06-03-2024</td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                    <td>
                                        <div className="available-item"></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='row handle'>
                        <div className='col-md-6'>
                            <span>Đã đặt</span>
                            <span>Còn trống</span>
                            <span>Đang chọn</span>
                        </div>
                    </div>
              </div>
              <div className='total-price col-lg-6'>
                        Tổng tiền tạm tính:
                        <span> 0 </span>
                        <span> vnđ</span>
                    </div>
            </div>
          </div>
        </div>
      </div>
      <Footer backToTopClick={backToTopClick} />
    </>
  )
}

export default detail