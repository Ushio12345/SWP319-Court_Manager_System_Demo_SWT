import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Yard() {
    const [yards, setYards] = useState([]);
    const [newYard, setNewYard] = useState({ nameCourt: "", Slot: "", CoSo: "", imgYard: "" });

    useEffect(() => {
        fetchYards();
    }, []);

    const fetchYards = async () => {
        try {
            const response = await axios.get("https://662b9fd1de35f91de158edc0.mockapi.io/yard");
            setYards(response.data);
        } catch (error) {
            console.error("Error fetching yards:", error);
        }
    };

    const addYard = async () => {
        try {
            const response = await axios.post("https://662b9fd1de35f91de158edc0.mockapi.io/yard", newYard);
            setYards([...yards, response.data]);
            setNewYard({ nameCourt: "", Slot: " ", CoSo: "", imgYard: "" });
        } catch (error) {
            console.error("Error adding yard:", error);
        }
    };

    const updateYard = async (id, updatedYard) => {
        try {
            const response = await axios.put(`https://662b9fd1de35f91de158edc0.mockapi.io/yard/${id}`, updatedYard);
            setYards(yards.map((yard) => (yard.id === id ? response.data : yard)));
        } catch (error) {
            console.error("Error updating yard:", error);
        }
    };

    const deleteYard = async (id) => {
        try {
            await axios.delete(`https://662b9fd1de35f91de158edc0.mockapi.io/yard/${id}`);
            setYards(yards.filter((yard) => yard.id !== id));
        } catch (error) {
            console.error("Error deleting yard:", error);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setNewYard({ ...newYard, [id]: value });
    };

    return (
        <div className="tab-pane fade show active" id="active" role="tabpanel" aria-labelledby="active-tab">
            <div className="row">
                <div className="table-yard-info col-lg-7">
                    <button id="btnAddYard1" className="btn btn-success my-4" data-bs-toggle="modal" data-bs-target="#addYard">
                        <i className="fa fa-plus mr-1" /> Thêm sân mới
                    </button>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th colSpan={4} className="text-center">
                                    Sân 1
                                </th>
                            </tr>
                            <tr>
                                <th>ID</th>
                                <th>Slots</th>
                                <th>Tên cơ sở</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody id="tblYard">
                            {yards.map((yard) => (
                                <tr key={yard.id}>
                                    <td>{yard.id}</td>
                                    <td>
                                        <ul>
                                            {Array.isArray(yard.Slot) ? (
                                                yard.Slot.map((slot, index) => <li key={index}>{slot}</li>)
                                            ) : (
                                                <li>{yard.Slot}</li>
                                            )}
                                        </ul>
                                    </td>
                                    <td>{yard.nameCourt}</td>
                                    <td>
                                        <button className="btn" onClick={() => console.log(yard)}>
                                            <i className="fa-solid fa-circle-info"></i>
                                        </button>
                                        <button className="btn">
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <button className="btn" onClick={() => deleteYard(yard.id)}>
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="table-slot col-lg-5">
                    <button id="btnAddSlot2" className="btn btn-success my-4" data-bs-toggle="modal" data-bs-target="#addSlot">
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

            {/* Modal */}
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
                                <label htmlFor="nameCourt">Tên sân</label>
                                <input
                                    id="nameCourt"
                                    className="form-control"
                                    placeholder="Nhập tên sân"
                                    value={newYard.nameCourt}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="CoSo">Cơ sở</label>
                                <input
                                    id="CoSo"
                                    className="form-control"
                                    placeholder="Nhập cơ sở"
                                    value={newYard.CoSo}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="imgYard">Link hình ảnh</label>
                                <input
                                    id="imgYard"
                                    className="form-control"
                                    placeholder="Nhập link hình ảnh"
                                    value={newYard.imgYard}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success" data-bs-dismiss="modal" onClick={addYard}>
                                    Tạo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
