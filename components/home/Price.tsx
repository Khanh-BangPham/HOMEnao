import React from 'react'
import Link from 'next/link'
import { NextComponentType } from 'next'

const Price: NextComponentType = () => {
    return (
        <>
            <section className="price" data-scroll-section>
                <div className="container">
                    <div className="price__textbox textbox --yellow --center">
                        <h3 className="titlemain">Hôme nào - Danh mục giá phòng </h3>
                        <p>Cuối tuần (thứ Bảy, Chủ nhật) phụ thu thêm 25,000/mỗi ca.</p>
                        <Link className="price__textbox-btn btn" href="#">Xem chi tiết giá phòng </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Price