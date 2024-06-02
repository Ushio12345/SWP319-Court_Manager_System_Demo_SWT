import React, { Component, createRef } from "react";
import Footer from "../../componets/Footer";
import axios from "axios"; // Import axios library
import "../../css/login.css";
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

    getInformationRegister = async (event) => {
        event.preventDefault();

        const userName = document.getElementById("userName").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const rePassword = document.getElementById("re-password").value.trim();
        const selectedRoles = document.querySelectorAll('input[name="role"]:checked');

        const errorMessages = {
            userName: "Bạn chưa nhập tên đăng nhập.",
            phoneNumber: "Bạn chưa nhập số điện thoại.",
            email: "Bạn chưa nhập email.",
            password: "Bạn chưa nhập password.",
            rePassword: "Bạn chưa nhập lại mật khẩu.",
            role: "Bạn chưa chọn loại tài khoản.",
        };

        const userNameError = document.getElementById("userName-error");
        const phoneNumberError = document.getElementById("phoneNumber-error");
        const emailError = document.getElementById("email-error");
        const passwordError = document.getElementById("password-error");
        const rePasswordError = document.getElementById("re-password-error");
        const roleError = document.getElementById("role-error");
        const wrongRepass = document.getElementById("wrong-repass");

        if (userNameError) userNameError.innerHTML = "";
        if (phoneNumberError) phoneNumberError.innerHTML = "";
        if (emailError) emailError.innerHTML = "";
        if (passwordError) passwordError.innerHTML = "";
        if (rePasswordError) rePasswordError.innerHTML = "";
        if (wrongRepass) wrongRepass.innerHTML = "";

        let isValid = true;

        if (!userName) {
            if (userNameError) userNameError.innerHTML = errorMessages.userName;
            isValid = false;
        }
        if (!phoneNumber) {
            if (phoneNumberError) phoneNumberError.innerHTML = errorMessages.phoneNumber;
            isValid = false;
        }
        if (!email) {
            if (emailError) emailError.innerHTML = errorMessages.email;
            isValid = false;
        }
        if (!password) {
            if (passwordError) passwordError.innerHTML = errorMessages.password;
            isValid = false;
        }
        if (!rePassword) {
            if (rePasswordError) rePasswordError.innerHTML = errorMessages.rePassword;
            isValid = false;
        }
        if (selectedRoles.length === 0) {
            if (roleError) roleError.innerHTML = errorMessages.role;
            isValid = false;
        }

        if (!isValid) return;

        if (password !== rePassword) {
            if (wrongRepass) wrongRepass.innerHTML = "Mật khẩu chưa khớp. Xin vui lòng nhập lại!";
            return;
        }
        async function checkEmailExists(email) {
            try {
                const response = await axios.get(`https://662b9fd1de35f91de158edc0.mockapi.io/Account?email=${email}`);
                return response.data.length > 0;
            } catch (error) {
                console.error("Error while checking email existence:", error);

                return false;
            }
        }
        try {
            const roles = Array.from(selectedRoles).map((role) => role.value);
            const emailExists = await checkEmailExists(email);
            if (emailExists) {
                alert("Email đã tồn tại trong hệ thống. Vui lòng sử dụng một địa chỉ email khác.");
                return;
            }
            const response = await axios.post("https://662b9fd1de35f91de158edc0.mockapi.io/Account", {
                userName,
                phoneNumber,
                email,
                password,
                roles,
            });

            if (response.status === 201) {
                const token = response.data.token;
                localStorage.setItem("token", token);
                alert("Đăng ký thành công!");
            }
        } catch (error) {
            console.error("An error occurred while registering:", error);
            if (error.response && error.response.status === 409) {
                alert("Email đã tồn tại trong hệ thống. Vui lòng sử dụng một địa chỉ email khác.");
            } else {
                // Handle other errors if needed
            }
        }
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
                        <form onSubmit={this.getInformationRegister}>
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
                                    <input type="password" placeholder="Mật Khẩu" id="password" ref={this.passwordRef} />
                                    <i id="lock" className="fa-solid fa-lock" data-target="password" ref={this.lockRef} />
                                    <p id="password-error" className="text-danger"></p>
                                </div>
                                <div className="input-box">
                                    <input type="password" placeholder="Nhập lại mật khẩu" id="re-password" ref={this.rePasswordRef} />
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
