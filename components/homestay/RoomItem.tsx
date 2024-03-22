import { NextComponentType } from 'next'
import React from 'react'
import imgslide1 from '../../assets/images/AL0A0001.jpg'

const RoomItem: NextComponentType = () => {
    return (
        <>
            <div className='col-lg-6 pd-20'>
                <div className="room-item">
                    <img src={imgslide1.src} alt="" />
                    <div className="ri-text">
                        <h4>NETFLIX 201</h4>
                        <h3>350,000 vnđ<span>/Qua đêm</span></h3>
                        <a className="botton" href="homestay/detail">CHI TIẾT</a>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default RoomItem