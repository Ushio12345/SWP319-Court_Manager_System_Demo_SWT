import React, { Component } from "react";

export default class CardYard extends Component {
    render() {
        return (
            <div>
                <div className="card-yard">
                    <div className="card-yard-img">
                        <img src="asserts/img/download.jpg" alt="Ảnh Sân" />
                    </div>
                    <div className="card-yard-content">
                        <p>Tên sân:</p>
                        <p>Địa chỉ:</p>
                        <p>Giá tiền:</p>
                        <p>Giờ mở cửa:</p>
                        {/* <div className="stars">
                            <form action>
                                <input className="star star-5" id="star-5" type="radio" name="star" />
                                <label className="star star-5" htmlFor="star-5" />
                                <input className="star star-4" id="star-4" type="radio" name="star" />
                                <label className="star star-4" htmlFor="star-4" />
                                <input className="star star-3" id="star-3" type="radio" name="star" />
                                <label className="star star-3" htmlFor="star-3" />
                                <input className="star star-2" id="star-2" type="radio" name="star" />
                                <label className="star star-2" htmlFor="star-2" />
                                <input className="star star-1" id="star-1" type="radio" name="star" />
                                <label className="star star-1" htmlFor="star-1" />
                            </form>
                        </div> */}
                        <a href>Đặt Ngay</a>
                    </div>
                </div>
            </div>
        );
    }
}
