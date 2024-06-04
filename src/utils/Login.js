import { Component } from "react";
import Footer from "../componets/Footer";
import "../css/login.css";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: "",
            password: "",  
        }; 
    }

    setParams = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    login = (event) => {
        event.preventDefault();
        
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            emailOrPhoneNumber: this.state.phoneNumber,
            password: this.state.password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
    
        fetch("http://localhost:8080/forbad/auth/signin", requestOptions)
        .then((response) => {
            if (response.status === 200) {        
                window.location.href = "http://localhost:3003/home"; // Chuyển hướng người dùng sau khi đăng nhập thành công
            } else {
                alert("Đăng nhập không thành công !"); // Trả về phản hồi nếu không thành công
            }
        })
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    }

    login_google = (event) => {
        fetch("http://localhost:8080/forbad/auth/google")
            .then((response) => response.json())
            .then((data) => {
                // Redirect to the Google login URL
                window.location.href = data.redirectUrl;
            })
            .catch((error) => console.error(error));
    }

    render() {
        return (
            <div>
                <p id="wrong-repass" className="text-danger text-bold fw-bolder"></p>
                <div className="header-login-form">
                    <div className="container d-flex align-items-center justify-content-between">
                        <div className="header-login-form-left">
                            <div className="logo-header-login">
                                <img src="asserts/img/logo-cau-long-dep-01.png" alt="Logo" />
                            </div>
                            <div className="name-page">
                                <p className="m-0">Đăng nhập</p>
                            </div>
                        </div>
                        <div className="header-login-form-right m-0">
                            <a href="Guest.jsx">
                                Trở về trang chủ <i className="fa-solid fa-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="login-form" id="Login-form">
                    <div className="login-left">
                        <img src="asserts/img/logo-cau-long-dep-01.png" alt="Logo" />
                    </div>
                    <div className="login-right">
                        <form onSubmit={this.login}>
                            <h1>Đăng nhập</h1>
                            <div className="name-phone d-flex">
                                <div className="input-box">
                                <input 
                                        type="text" 
                                        name="phoneNumber" 
                                        placeholder="Số điện thoại" 
                                        id="phoneNumber" 
                                        value={this.state.phoneNumber}
                                        onChange={this.setParams}
                                />
                                    <i className="fa-solid fa-user" />
                                    <p id="userName-error" className="text-danger"></p>
                                </div>
                            </div>
                            <div className="input-box">
                            <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Mật khẩu" 
                                    id="password" 
                                    value={this.state.password}
                                    onChange={this.setParams}
                                />
                                <i className="fa-solid fa-lock" />
                                <p id="email-error" className="text-danger"></p>
                            </div>
                            <div className="remember-forgot">
                                <label><input type="checkbox" />Nhớ mật khẩu</label>
                                <a href="#">Quên mật khẩu</a>
                             </div>
                            <p id="wrong-repass" className="text-danger text-bold fw-bolder"></p>
                            <div>
                                    <button className="btn btn-success p-2" type="submit">
                                    Đăng nhập
                                    </button>
                                </div>
                            <div className="divider">
                                <span>hoặc</span>
                            </div>
                            <div className="login-with">
                                <div className="gmail">
                                    <button className="btn btn-danger p-2" onClick={this.login_google}>
                                        <i className="fa-brands fa-google" /> Google
                                    </button>
                                </div>
                            </div>
                            <div className="register-link">
                                <p>
                                    Bạn chưa có tài khoản? <a href="Register.js">Đăng ký</a>
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