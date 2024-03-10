import { NextComponentType } from 'next'
import React from 'react'

const Schedule: NextComponentType = () => {
    return (
        <>
            <section className="schedule pd" data-scroll-section>
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
                    <div className='row handle'>
                        <div className='col-md-6'>
                            <span>Đã đặt</span>
                            <span>Còn trống</span>
                            <span>Đang chọn</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Schedule