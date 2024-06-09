import React, { Component } from "react";

export default class Yard extends Component {
    render() {
        return (
            <div>
                <div className="tab-pane fade" id="dsYard" role="tabpanel">
                    <h1 class="text-center">Trang quản lí thông tin sân</h1>
                    <div className="choiceCourt">
                        <select className=" p-2">
                            <option>Sân cầu lông Hoàng Kiếm</option>
                            <option>Sân cầu lông Xuân Diệu</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <button id="btnAddYard1" className="btn btn-success my-4 w-25" data-bs-toggle="modal" data-bs-target="#addYard">
                            <i className="fa fa-plus mr-1" /> Thêm sân mới
                        </button>
                        <button id="btnAddSlot2" className="btn btn-success my-4 w-25" data-bs-toggle="modal" data-bs-target="#addSlot">
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
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
        );
    }
}
