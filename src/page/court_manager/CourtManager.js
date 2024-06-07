import React, { Component } from "react";
import "../../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import Yard from "../../js/model/Yard";
import Court from "./Court";

export default class CourtManager extends Component {
    componentDidMount() {
        axios
            .get("https://662b9fd1de35f91de158edc0.mockapi.io/yard")
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <section className="manager">
                    <div className="topbar">
                        <div className="logo">
                            <div className="logo-img">
                                <img src="asserts/img/logo-cau-long-dep-01.png" alt />
                            </div>
                            <div className="nameapp">
                                <p>ForBaD</p>
                            </div>
                        </div>
                        <div className="select-branch">
                            <select id="branch-select">
                                <option value>Thủ Đức</option>
                                <option value={1}>Gò Vấp</option>
                                <option value={2}>Bình Thạnh</option>
                                <option value={3}>Tân Bình</option>
                            </select>
                        </div>
                        <div className="search">
                            <input type="text" placeholder="Tìm kiếm tại đây." id="search" />
                            <label htmlFor="search">
                                <i className="fa-solid fa-magnifying-glass" />
                            </label>
                        </div>
                        <div className="notification">
                            <div className="bell-icon">
                                <i className="fa-solid fa-bell" />
                                <div className="number-notification">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                        <div className="login">
                            <a href="updateProfile.html" className="user">
                                <img src="asserts/img/download (user).jpg" alt />
                            </a>
                            <p className="user-name">Welcome,Ushio</p>
                        </div>
                    </div>
                    <div className="body-manager">
                        <div className="manager-left">
                            <div className="list-option">
                                <ul className="listManaher nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#dsDashboard" data-bs-toggle="tab">
                                            <span className="icon">
                                                <i className="fa-solid fa-chart-line" />
                                            </span>
                                            <span className="title">Thống kê</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#dsOrder" data-bs-toggle="tab">
                                            <span className="icon">
                                                <i class="fa-solid fa-file-invoice"></i>
                                            </span>
                                            <span className="title">Quản lý đơn đặt hàng</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#dsStaff" data-bs-toggle="tab">
                                            <span className="icon">
                                                <i className="fa-solid fa-computer" />
                                            </span>
                                            <span className="title">Quản lý Nhân viên</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#dsCoSo" data-bs-toggle="tab">
                                            <span className="icon">
                                                <i className="fa-solid fa-shop" />
                                            </span>
                                            <span className="title">Quản lý Cơ Sở</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#dsYard" data-bs-toggle="tab">
                                            <span className="icon">
                                                <i class="fa fa-table-tennis"></i>
                                            </span>
                                            <span className="title">Quản lý Sân</span>
                                        </a>
                                    </li>
                                    <a className="w-75 logout m-auto " href="/login">
                                        <span className="icon">
                                            <i className="fas fa-sign-out-alt" />
                                        </span>
                                        <span className="title">Đăng xuất</span>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        <div className="manager-right">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="dsDashboard" role="tabpanel">
                                    <div className="dash-num grid grid-cols-4 gap-4">
                                        <div className="dash-num-item">
                                            <div className="dash-num-item-left">
                                                <h3>100</h3>
                                                <p>Lượt truy cập mỗi ngày</p>
                                            </div>
                                            <div className="dash-num-item-icon">
                                                <i className="fa-regular fa-eye" />
                                            </div>
                                        </div>
                                        <div className="dash-num-item">
                                            <div className="dash-num-item-left">
                                                <h3>20</h3>
                                                <p>Chi nhánh</p>
                                            </div>
                                            <div className="dash-num-item-icon">
                                                <i className="fa-solid fa-house" />
                                            </div>
                                        </div>
                                        <div className="dash-num-item">
                                            <div className="dash-num-item-left">
                                                <h3>30</h3>
                                                <p>Đơn / ngày</p>
                                            </div>
                                            <div className="dash-num-item-icon">
                                                <i className="fa-solid fa-file-invoice" />
                                            </div>
                                        </div>
                                        <div className="dash-num-item">
                                            <div className="dash-num-item-left">
                                                <h3>10 tr</h3>
                                                <p>Doanh thu / ngày</p>
                                            </div>
                                            <div className="dash-num-item-icon">
                                                <i className="fa-solid fa-money-bill" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="char">
                                        <canvas id="chardoanhthuthang" width="vw-100" height />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="dsOrder" role="tabpanel">
                                    {/* Content for dsOrder */}
                                    <div className="row mb-4">
                                        <div className="col-md-8">
                                            {/* BEGIN BUTTON THÊM MỚI */}
                                            <div className="btn-order row">
                                                <button className="btn btn-success col-lg-4 me-3" data-toggle="tab" href="#dsOrder">
                                                    <i className />
                                                    Đơn cố định
                                                </button>
                                                <button className="btn btn-success col-lg-4" data-toggle="tab" href="#dsOrder2">
                                                    <i className />
                                                    Đơn ngày
                                                </button>
                                            </div>
                                        </div>
                                        <div className="search col-lg-4">
                                            {/* BEGIN TÌM KIẾM */}
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nhập từ khóa"
                                                    aria-label="Recipient's username"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <div className="input-group-append">
                                                    <span className="input-group-text" id="basic-addon2">
                                                        <i className="fa fa-search" />
                                                    </span>
                                                </div>
                                            </div>
                                            {/* END TÌM KIẾM */}
                                        </div>
                                    </div>
                                    <div className="btn-select d-flex align-items-center justify-content-start mb-4">
                                        {/*                     
              <select id="branch-select" style="background-color: aqua;">
                  <option value="">Cơ sở</option>
                  <option value="1">Thủ Đức</option>
                  <option value="2">Bình Thạnh</option>
                  <option value="3">Tân Bình</option>
              </select>  */}
                                        <select id="branch-select">
                                            <option value>Tháng</option>
                                            <option value={1}>Tháng 1</option>
                                            <option value={2}>Tháng 2</option>
                                            <option value={3}>Tháng 3</option>
                                            <option value={4}>Tháng 4</option>
                                            <option value={5}>Tháng 5</option>
                                            <option value={6}>Tháng 6</option>
                                            <option value={7}>Tháng 7</option>
                                            <option value={8}>Tháng 8</option>
                                            <option value={9}>Tháng 9</option>
                                            <option value={10}>Tháng 10</option>
                                            <option value={11}>Tháng 11</option>
                                            <option value={12}>Tháng 12</option>
                                        </select>
                                    </div>
                                    <div className="status-btn d-flex align-items-center justify-content-between">
                                        <div className="status">
                                            <a className="nav-link active" href>
                                                Đang chờ duyệt
                                            </a>
                                            <a className="nav-link" href>
                                                Chờ check-in
                                            </a>
                                            <a className="nav-link" href>
                                                Đã check-in
                                            </a>
                                            <a className="nav-link" href>
                                                Đã hủy
                                            </a>
                                        </div>
                                        <div className="check-all">
                                            <button id className="btn btn-warning" data-toggle="modal" href>
                                                <i className />
                                                Duyệt tất cả
                                            </button>
                                        </div>
                                    </div>
                                    {/* END BUTTON THÊM MỚI */}
                                    <div className="clear-fix" />
                                    <div className="tblOrder" id="tblOrder">
                                        {/* BEGIN TABLE SẢN PHẨM */}
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Mã Đơn</th>
                                                    <th>Mã Khách</th>
                                                    <th>Sân</th>
                                                    <th>Số buổi</th>
                                                    <th>Thao tác</th>
                                                    <th>Chi tiết</th>
                                                </tr>
                                            </thead>
                                            <tbody id="tbDSOrder" />
                                        </table>
                                        {/* END TABLE SẢN PHẨM */}
                                    </div>
                                </div>

                                {/* ----------------------Coso------------------------------------- */}

                                <div className="tab-pane fade show active" id="dsCoSo" role="tabpanel">
                                    <Court />
                                </div>
                                {/* ---------------------------------------kết thúc COw so------------------------------------------------- */}
                                {/* yard */}
                                <div className="tab-pane fade" id="dsYard" role="tabpanel">
                                    <h1 class="text-center">Trang quản lí thông tin sân</h1>
                                    <div className="choiceCourt">
                                        <select className=" p-2">
                                            <option>Sân cầu lông Hoàng Kiếm</option>
                                            <option>Sân cầu lông Xuân Diệu</option>
                                        </select>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button
                                            id="btnAddYard1"
                                            className="btn btn-success my-4 w-25"
                                            data-bs-toggle="modal"
                                            data-bs-target="#addYard"
                                        >
                                            <i className="fa fa-plus mr-1" /> Thêm sân mới
                                        </button>
                                        <button
                                            id="btnAddSlot2"
                                            className="btn btn-success my-4 w-25"
                                            data-bs-toggle="modal"
                                            data-bs-target="#addSlot"
                                        >
                                            <i className="fa fa-plus mr-1" /> Thêm slot mới
                                        </button>
                                    </div>
                                    {/*Danh sách sản phẩm */}
                                    {/* <div class="location-search d-flex justify-content-between align-items-center"> */}
                                    {/* <div class="location w-25">
                      <select name="" id="">
                          <option value="">Thành phố Thủ Đức</option>
                          <option value="">Quận Bình Chánh</option>
                      </select>
                  </div> */}
                                    {/* <div className="input-group w-50">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập từ khóa"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text" id="basic-addon2">
                                                <i className="fa fa-search" />
                                            </span>
                                        </div>
                                    </div> */}
                                    {/* </div> */}
                                    <div className="change-yard mt-4">
                                        {/* <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link active"
                                                    id="active-tab"
                                                    data-bs-toggle="tab"
                                                    href="#active"
                                                    role="tab"
                                                    aria-controls="active"
                                                    aria-selected="true"
                                                >
                                                    Sân 1
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link"
                                                    id="link1-tab"
                                                    data-bs-toggle="tab"
                                                    href="#san2"
                                                    role="tab"
                                                    aria-controls="link1"
                                                    aria-selected="false"
                                                >
                                                    Sân 2
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link"
                                                    id="link2-tab"
                                                    data-bs-toggle="tab"
                                                    href="#san3"
                                                    role="tab"
                                                    aria-controls="link2"
                                                    aria-selected="false"
                                                >
                                                    Sân 3
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link disabled"
                                                    id="disabled-tab"
                                                    data-bs-toggle="tab"
                                                    href="#disabled"
                                                    role="tab"
                                                    aria-controls="disabled"
                                                    aria-selected="false"
                                                    aria-disabled="true"
                                                >
                                                    Thông tin sân
                                                </a>
                                            </li>
                                        </ul> */}

                                        <div className="tab-content" id="myTabContent">
                                            <Yard />
                                            {/* <div className="tab-pane fade" id="san2" role="tabpanel" aria-labelledby="link1-tab">
                                                <div className="row">
                                                    <div className="table-yard-info col-lg-7">
                                                        <button
                                                            id="btnAddYard2"
                                                            className="btn btn-success my-4"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addYard"
                                                        >
                                                            <i className="fa fa-plus mr-1" /> Thêm sân mới
                                                        </button>
                                                        <table className="table table-striped table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th colSpan={4} className="text-center">
                                                                        Sân 2
                                                                    </th>
                                                                </tr>
                                                                <tr>
                                                                    <th>ID</th>
                                                                    <th>Slot</th>
                                                                    <th>Cơ sở</th>
                                                                    <th>Thao tác</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="tblYard"></tbody>
                                                        </table>
                                                    </div>
                                                    <div className="table-slot col-lg-5">
                                                        <button
                                                            id="btnAddSlot2"
                                                            className="btn btn-success my-4"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addSlot"
                                                        >
                                                            <i className="fa fa-plus mr-1" /> Thêm slot mới
                                                        </button>
                                                        <table className="table table-striped table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th colSpan={4} className="text-center">
                                                                        Slot
                                                                    </th>
                                                                </tr>
                                                                <tr>
                                                                    <th>ID</th>
                                                                    <th>Khung giờ</th>
                                                                    <th>Thao tác</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="tblSlot"></tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div className="tab-pane fade" id="san3" role="tabpanel" aria-labelledby="link2-tab">
                                                <div className="row">
                                                    <div className="table-yard-info col-lg-7">
                                                        <button
                                                            id="btnAddYard3"
                                                            className="btn btn-success my-4"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addYard"
                                                        >
                                                            <i className="fa fa-plus mr-1" /> Thêm sân mới
                                                        </button>
                                                        <table className="table table-striped table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th colSpan={4} className="text-center">
                                                                        Sân 3
                                                                    </th>
                                                                </tr>
                                                                <tr>
                                                                    <th>ID</th>
                                                                    <th>Slot</th>
                                                                    <th>Cơ sở</th>
                                                                    <th>Thao tác</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="tblYard"></tbody>
                                                        </table>
                                                    </div>
                                                    <div className="table-slot col-lg-5">
                                                        <button
                                                            id="btnAddSlot3"
                                                            className="btn btn-success my-4"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addSlot"
                                                        >
                                                            <i className="fa fa-plus mr-1" /> Thêm slot mới
                                                        </button>
                                                        <table className="table table-striped table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th colSpan={4} className="text-center">
                                                                        Slot
                                                                    </th>
                                                                </tr>
                                                                <tr>
                                                                    <th>ID</th>
                                                                    <th>Khung giờ</th>
                                                                    <th>Thao tác</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="tblSlot"></tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>

                                        {/* Modal for adding yard */}
                                        <div className="modal fade" id="addYard" tabIndex="-1" aria-labelledby="addYardLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title" id="addYardLabel">
                                                            Thêm mới sân
                                                        </h4>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="form-group">
                                                            <label htmlFor="idYard">Mã sân</label>
                                                            <input id="idYard" className="form-control" placeholder="Mã sân" readOnly />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="TenSan">Tên sân</label>
                                                            <input id="TenSan" className="form-control" placeholder="Nhập tên sân" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="CoSo">Cơ sở</label>
                                                            <input id="CoSo" className="form-control" placeholder="Nhập cơ sở" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="imgYard">Link hình ảnh</label>
                                                            <input id="imgYard" className="form-control" placeholder="" />
                                                        </div>
                                                        <div className="form-group">
                                                            <button className="btn btn-success">Tạo</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Modal for adding slot */}
                                        <div className="modal fade" id="addSlot" tabIndex="-1" aria-labelledby="addSlotLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title" id="addSlotLabel">
                                                            Thêm mới slot
                                                        </h4>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="form-group">
                                                            <label htmlFor="idSlot">Mã slot</label>
                                                            <input id="idSlot" className="form-control" placeholder="Mã slot" readOnly />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="KhungGio">Khung giờ</label>
                                                            <input id="KhungGio" className="form-control" placeholder="Nhập khung giờ" />
                                                        </div>
                                                        <div className="form-group">
                                                            <button className="btn btn-success">Tạo</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="dsStaff" role="tabpanel">
                                {/*Danh sách sản phẩm */}
                                <div className="row">
                                    <div className="col-md-8">
                                        {/* BEGIN BUTTON THÊM MỚI */}
                                        <button id="btnThemStaff" className="btn btn-success w-25" data-toggle="modal" data-target="#myStaff">
                                            <i className="fa fa-plus mr-1" />
                                            Thêm Mới
                                        </button>
                                        {/* END BUTTON THÊM MỚI */}
                                    </div>
                                    <div className="col-md-4">
                                        {/* BEGIN TÌM KIẾM */}
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Nhập từ khóa"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />
                                            <div className="input-group-append">
                                                <span className="input-group-text" id="basic-addon2">
                                                    <i className="fa fa-search" />
                                                </span>
                                            </div>
                                        </div>
                                        {/* END TÌM KIẾM */}
                                    </div>
                                </div>
                                <div className="tblStaff" id="tblStaff">
                                    {/* BEGIN TABLE SẢN PHẨM */}
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>ID</th>
                                                <th>Tên</th>
                                                <th>Số điện thoại</th>
                                                <th>Email</th>
                                                <th>Thao tác</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tbDSStaff" />
                                    </table>
                                    {/* END TABLE SẢN PHẨM */}
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="footer-Manager ">
                    <p>© Badminton Court Management - Team 4 - SWP391</p>
                </div>
                {/*-Staff-*/}
                <div className="modal fade" id="myStaff">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Thêm nhân viên</h4>
                                <button type="button" className="close" data-dismiss="modal">
                                    ×
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Mã nhân viên</label>
                                    <input id="MaNV" className="form-control" placeholder="Nhập vào mã nhân viên" />
                                </div>
                                <div className="form-group">
                                    <label>Tên nhân viên</label>
                                    <input id="TenNV" className="form-control" placeholder="Nhập vào tên nhân viên" />
                                </div>
                                <div className="form-group">
                                    <label>Điện thoại</label>
                                    <input id="DienThoai" className="form-control" placeholder="Nhập số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <label>Điện thoại</label>
                                    <input id="DienThoai" className="form-control" placeholder="Nhập số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <label>Cơ sở</label>
                                    <input id="CoSo" className="form-control" placeholder="Nhập cơ sở" />
                                </div>
                                <div className="form-group">
                                    <label>Sân phụ trách</label>
                                    <input id="SanPhuTrach" className="form-control" placeholder="Nhập vào sân phụ trách" />
                                </div>
                                <div className="form-group">
                                    <label>Type</label>
                                    <input id="Type" className="form-control" placeholder="Nhập Type" />
                                </div>
                                <div className="form-group">
                                    <button onclick="addProduct()" className="btn btn-success">
                                        Lưu
                                    </button>
                                    <button onclick="updateProduct()" className="btn btn-primary ml-2">
                                        Hủy
                                    </button>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer" />
                        </div>
                    </div>
                </div>

                {/*-CoSo-*/}
                <div className="modal fade" id="myCoSo">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Thêm cơ sở</h4>
                                <button type="button" className="close" data-dismiss="modal">
                                    ×
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Mã cơ sở</label>
                                    <input id="MaCS" className="form-control" placeholder="Nhập vào mã cơ sở" />
                                </div>
                                <div className="form-group">
                                    <label>Tên cơ sở</label>
                                    <input id="TênCS" className="form-control" placeholder="Nhập vào tên cơ sở" />
                                </div>
                                <div className="form-group">
                                    <label>Địa chỉ</label>
                                    <input id="Diachi" className="form-control" placeholder="Nhập địa chỉ" />
                                </div>
                                <div className="form-group">
                                    <label>Giờ làm việc</label>
                                    <input id="Workhour" className="form-control" placeholder="Nhập khung giờ" />
                                </div>
                                <div className="form-group">
                                    <label>Giờ làm việc</label>
                                    <input id="Workhour" className="form-control" placeholder="Nhập khung giờ" />
                                </div>
                                <div className="form-group">
                                    <label>Đánh giá</label>
                                    <input id="Feedback" className="form-control" placeholder="Nhập khung giờ" />
                                </div>
                                <div className="form-group">
                                    <label>Số sân</label>
                                    <input id="Yardnumber" className="form-control" placeholder="Nhập số sân" />
                                </div>
                                <div className="form-group">
                                    <label>Số sân</label>
                                    <input id="Yardnumber" className="form-control" placeholder="Nhập đánh giá" />
                                </div>
                                <div className="form-group">
                                    <button onclick="addProduct()" className="btn btn-success">
                                        Lưu
                                    </button>
                                    <button onclick="updateProduct()" className="btn btn-primary ml-2">
                                        Hủy
                                    </button>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer" />
                        </div>
                    </div>
                </div>

                {/* yard */}
                <div className="modal fade" id="addYard">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Thêm mới sânfsfsfds</h4>
                                <button type="button" className="close" data-dismiss="modal">
                                    ×
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="MaNV">Mã sân</label>
                                    <input id="idYard" className="form-control" placeholder readOnly />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="TenNV">Tên sân</label>
                                    <input id="TenSan" className="form-control" placeholder="Nhập tên sân" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="DienThoai1">Tên cơ sở</label>
                                    <input id="TenCoSo" className="form-control" placeholder="Nhập tên cơ sở" />
                                </div>
                                <div class="form-group">
                                    <label for="">Link hình ảnh</label>
                                    <input id="imgLink" class="form-control" placeholder="Đường dẫn ảnh" />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success">Tạo</button>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer"></div>
                        </div>
                    </div>
                </div>
                {/* slot modal */}
                <div className="modal fade" id="addSlot">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Thêm mới slot</h4>
                                <button type="button" className="close" data-dismiss="modal">
                                    ×
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="form-group mb-3">
                                    <label htmlFor="MaNV">Mã slot</label>
                                    <input id="idYard" className="form-control" placeholder readOnly />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="TenNV">Khung giờ</label>
                                    <input id="TenSan" className="form-control" placeholder="Nhập khung giờ" />
                                </div>
                                <div className="form-group mb-3">
                                    <button onclick="addSlot()" className="btn btn-success">
                                        Tạo
                                    </button>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
