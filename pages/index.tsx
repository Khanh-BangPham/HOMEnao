import React from 'react'
import Link from 'next/link'
import { AiFillCloseSquare } from "react-icons/ai";
import { Carousel } from 'react-responsive-carousel';
import imgslide1 from '../assets/images/AL0A0001.jpg'
import imgslide2 from '../assets/images/AL0A0017.jpg'
import imgslide3 from '../assets/images/AL0A0008.jpg'
import imgslide4 from '../assets/images/AL0A9872.jpg'
import imgslide5 from '../assets/images/AL0A9909.jpg'
import largeLogo from '../assets/images/logo.jpg'
import iconLogo from '../assets/images/logo.ico'

const Page = () => {
  return (
    <>
      <div>
        <header>
          <div className="container-fluid">
            <div className="logo">
              <Link href="./"><img src={iconLogo.src} /></Link>
              <h1 className="hidden">Hôme nào</h1>
            </div>
            <ul className="menu">
              <li><Link className="active" href="#slider">Home</Link></li>
              <li><Link href="#products">Homestay</Link></li>
              <li><Link href="#About">Liên hệ</Link></li>
            </ul>
            <div className="right">
              <div className="buynow">
                <Link className="buynow__btn btn" href="#">  BOOK NOW </Link>
              </div>
              <div className="bottonnav">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </header>
        <nav className="menubox">
          <ul>
            <li><Link className="active" href="#slider">Home</Link></li>
            <li><Link href="#products">Product</Link></li>
            <li><Link href="#videos">videos</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#gallery">Gallery</Link></li>
            <li><Link href="#news">News</Link></li>
          </ul>
        </nav>
        <div className="pupupVideo">
          <div className="pupupVideo__container">
            <iframe frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <div className="close">X</div>
          </div>
        </div>
        <div className="pupupVideo">
          <div className="pupupVideo__container">
            <iframe frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture1" allowFullScreen />
            <div className="close">X</div>
          </div>
        </div>
        <div className="pupupVideo">
          <div className="pupupVideo__container">
            <iframe frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <div className="close">X</div>
          </div>
        </div>
        <main className="mainwrapper homepage">
          <section className="sliders">
            <Carousel className="sliders__list" showThumbs={false} showArrows={false} autoPlay={true} interval={5000} stopOnHover={false} transitionTime={1500}>
              <div className="sliders__list-item">
                <div className="sl-textbox">
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
          <section className="products">
            <div className="container">
              <div className="product">
                <div className="product__textbox textbox --left">
                  <h3 className="titlemain">Tiện nghi</h3>
                  <p>Homestay Tiện Nghi được thiết kế và trang bị một cách đặc biệt để đáp ứng các nhu cầu cao cấp của du khách.</p>
                  <Link className="botton" href="#">Tìm hiểu thêm <i><img className="./img/rightarrow-yl.png" /></i></Link>
                </div>
                <div className="product__img">
                  <img src={imgslide1.src} />
                </div>
              </div>
              <div className="product">
                <div className="product__textbox textbox --right">
                  <h3 className="titlemain">Netflix</h3>
                  <p>Homestay Netflix là một xu hướng mới, được lấy cảm hứng từ cách mà Netflix tạo ra nội dung giải trí độc đáo và cá nhân hóa cho mỗi người dùng.</p>
                  <Link className="botton" href="#">Tìm hiểu thêm <i><img className="./img/rightarrow-yl.png" /></i></Link>
                </div>
                <div className="product__img">
                  <img src={imgslide2.src} />
                </div>
              </div>
            </div>
          </section>
          <section className="price">
            <div className="container">
              <div className="price__textbox textbox --yellow --center">
                <h3 className="titlemain">Hôme nào - Danh mục giá phòng </h3>
                <p>Cuối tuần (thứ Bảy, Chủ nhật) phụ thu thêm 25,000/mỗi ca.</p>
                <Link className="price__textbox-btn btn" href="#">Xem chi tiết giá phòng </Link>
              </div>
            </div>
          </section>
          <section className="schedule pd">
            <div className="container">
              <div className="schedule-textbox textbox --center">
                <h3 className="titlemain">Lịch đặt phòng</h3>
              </div>
              <div className="infinite-scroll-table" style={{ fontFamily: 'Cabin' }}>
                <table className="table" style={{ fontSize: 10 }}>
                  <thead className="available-time-booking">
                    <tr className="freeze-header">
                      <th className="sticky-column" colSpan={2}>Tên phòng</th><th colSpan={3} style={{ fontWeight: 'bolder' }}>201</th>
                      <th colSpan={3} style={{ fontWeight: 'bolder' }}>203</th>
                      <th colSpan={3} style={{ fontWeight: 'bolder' }}>202</th>
                      <th colSpan={3} style={{ fontWeight: 'bolder' }}>204</th>
                    </tr>
                    <tr className="freeze-header2">
                      <th className="sticky-column">Thứ</th>
                      <th className="sticky-column2" style={{ minWidth: 80, left: 31 }}>Ngày</th>
                      <th>11:00 - 15:00</th>
                      <th>15:30 - 19:30</th>
                      <th>Qua đêm 20:00 - 10:30</th>
                      <th>12:00 - 16:00</th>
                      <th>16:30 - 20:30</th>
                      <th>Qua đêm 21:00 - 11:30</th>
                      <th>11:30 - 15:30</th>
                      <th>16:00 - 20:00</th>
                      <th>Qua đêm 20:30 - 11:00</th>
                      <th>12:30 - 16:30</th>
                      <th>17:00 - 17:00</th>
                      <th>Qua đêm 21:30 - 12:30</th>
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
                      <td>
                        <div className="inAvailable-item "></div>
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
                      <td>
                        <div className="inAvailable-item "></div>
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
                      <td>
                        <div className="inAvailable-item "></div>
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
                      <td>
                        <div className="inAvailable-item "></div>
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
                      <td>
                        <div className="inAvailable-item "></div>
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

            </div>
          </section>
          <section className="about pd">
            <div className="container">
              <div className="about__textbox textbox --right">
                <h3 className="titlemain">
                  Homestay
                </h3>
                <p>HÔME nào - Không gian nghỉ ngơi giản dị và ấm áp, mang đến sự thân quen như trong chính ngôi nhà riêng của bạn.</p>
                <p>185/2B Phạm Văn Chiêu, Phường 14, Quận Gò Vấp, Ho Chi Minh City, Vietnam</p>
                <Link className="botton" href="/contact">Tìm hiểu thêm </Link>
              </div>
              <i className="about__img">
                <img src={largeLogo.src} />
              </i>
            </div>
          </section>
          <section className="gallery pd">
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
          {/* <section className="news pd">
          <div className="container">
            <div className="news__textbox textbox">
              <div className="titlemain">news</div>
              <p>We are a team of professionals in the wood processing and 
                the creation of wooden furniture of the highest class</p>
            </div>
            <div className="news__list">
              <div className="new">
                <img className="img/new1.jpg new__img" />
                <div className="new__textbox">
                  <h4 title="where does it come from?" className="new__textbox-title ">where does it come from?</h4>
                  <p>Contrary to popular belief, Lorem Ipsum 
                    is not simply random text. It has roots 
                    in a piece of classical Latin literature</p>
                </div>
              </div>
              <div className="new">
                <img className="img/new2.jpg new__img" />
                <div className="new__textbox">
                  <h4 title="there are many variations of passages" className="new__textbox-title">there are many variations of passages</h4>
                  <p>Contrary to popular belief, Lorem Ipsum 
                    is not simply random text. It has roots 
                    in a piece of classical Latin literature</p>
                </div>
              </div>
              <div className="new">
                <img className="./img/new3.jpg new__img" />
                <div className="new__textbox">
                  <h4 title="it is a long astablished fact that a reader" className="new__textbox-title">it is a long astablished fact that a reader</h4>
                  <p>Contrary to popular belief, Lorem Ipsum 
                    is not simply random text. It has roots 
                    in a piece of classical Latin literature</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
          {/* <section className="under">
          <img className="img/underweb1.jpg" />
          <img className="img/underweb2.jpg" />
          <img className="img/underweb3.jpg" />
          <img className="img/underweb4.jpg" />
          <img className="img/underweb1.jpg" />
          <img className="img/underweb2.jpg" />
          <img className="img/underweb3.jpg" />
          <img className="img/underweb4.jpg" />
        </section> */}
        </main>
        <footer>
          <div className="container">
            <p>© 2024 HÔME nào, Create by Beng </p>
            <Link href="./"><img className="img/logo.png" /></Link>
            <Link href="#" className="backtotop">BACK TO TOP</Link>
          </div>
        </footer>
        <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="pswp__bg" />
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter" />
                <button className="pswp__button pswp__button--close" title="Close (Esc)" />
                <button className="pswp__button pswp__button--share" title="Share" />
                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />
                <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip" />
              </div>
              <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
              </button>
              <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
              </button>
              <div className="pswp__caption">
                <div className="pswp__caption__center" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Page