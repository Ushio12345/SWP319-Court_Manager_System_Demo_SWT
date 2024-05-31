import React, { Component, createRef } from "react";
import "../../css/login.css";
import getInformationRegister from "../../js/Register.js";
import Footer from "../../componets/Footer.jsx";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.passwordRef = createRef();
        this.rePasswordRef = createRef();
        this.lockRef = createRef();
        this.lockReRef = createRef();
    }

    componentDidMount() {
        this.lockRef.current.addEventListener("click", this.togglePasswordVisibility);
        this.lockReRef.current.addEventListener("click", this.togglePasswordVisibility);
    }

    componentWillUnmount() {
        this.lockRef.current.removeEventListener("click", this.togglePasswordVisibility);
        this.lockReRef.current.removeEventListener("click", this.togglePasswordVisibility);
    }

    togglePasswordVisibility = (event) => {
        const target = event.target;
        const targetInput = target.dataset.target === "password" ? this.passwordRef.current : this.rePasswordRef.current;
        const type = targetInput.getAttribute("type") === "password" ? "text" : "password";
        targetInput.setAttribute("type", type);
        target.classList.toggle("fa-lock");
        target.classList.toggle("fa-eye");
    };

    render() {
        return (
            <div>
                <div className="header-login-form">
                    <div className="container d-flex align-items-center justify-content-between">
                        <div className="header-login-form-left">
                            <div className="logo-header-login">
                                <img src="asserts/img/logo-cau-long-dep-01.png" alt="Logo" />
                            </div>
                            <div className="name-page">
                                <p className="m-0">Đăng kí</p>
                            </div>
                        </div>
                        <div className="header-login-form-right m-0">
                            <a href="Guest.html">
                                Trở về trang chủ <i className="fa-solid fa-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="login-form" id="register-form">
                    <div className="login-left">
                        <img src="asserts/img/logo-cau-long-dep-01.png" alt="Logo" />
                    </div>
                    <div className="login-right">
                        <form onSubmit={getInformationRegister}>
                            <h1>Đăng kí</h1>
                            <div className="name-phone d-flex">
                                <div className="input-box" style={{ marginRight: 5 }}>
                                    <input type="text" placeholder="Họ và tên" id="userName" />
                                    <i className="fa-solid fa-user" />
                                    <p id="userName-error" className="text-danger"></p>
                                </div>
                                <div className="input-box">
                                    <input type="text" placeholder="Số điện thoại" id="phoneNumber" />
                                    <i className="fa-solid fa-phone" />
                                    <p id="phoneNumber-error" className="text-danger"></p>
                                </div>
                            </div>
                            <div className="input-box">
                                <input type="email" placeholder="Email" id="email" />
                                <i className="fa-solid fa-envelope" />
                                <p id="email-error" className="text-danger"></p>
                            </div>
                            <div className="input-pass" style={{ display: "flex" }}>
                                <div className="input-box" style={{ marginRight: 5 }}>
                                    <input type="password" placeholder="Mật Khẩu" id="password" ref={this.passwordRef} required />
                                    <i id="lock" className="fa-solid fa-lock" data-target="password" ref={this.lockRef} />
                                    <p id="password-error" className="text-danger"></p>
                                </div>
                                <div className="input-box">
                                    <input type="password" placeholder="Nhập lại mật khẩu" id="re-password" ref={this.rePasswordRef} required />
                                    <i id="lock-re" className="fa-solid fa-lock" data-target="re-password" ref={this.lockReRef} />
                                    <p id="re-password-error" className="text-danger"></p>
                                </div>
                            </div>
                            <p id="wrong-repass" className="text-danger text-bold fw-bolder"></p>
                            <div className="role p-2">
                                <label>Chọn vai trò:</label>
                                <label htmlFor="guest">
                                    <input type="radio" name="role" value="guest" id="guest" /> Khách
                                </label>
                                <label htmlFor="owner">
                                    <input type="radio" name="role" value="owner" id="owner" /> Chủ sân
                                </label>
                                <p id="role-error" className="text-danger"></p>
                            </div>
                            <div className="btn">
                                <button type="submit">Đăng kí</button>
                            </div>
                            <hr />
                            <div className="login-with">
                                <div className="gmail">
                                    <button className="btn btn-danger p-2">
                                        <i className="fa-brands fa-google" /> Đăng nhập với Google
                                    </button>
                                </div>
                            </div>
                            <div className="register-link">
                                <p>
                                    Bạn đã có tài khoản? <a href="login.html">Đăng nhập</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
