import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Yard() {
    const [yards, setYards] = useState([]);
    const [slots, setSlots] = useState([]);
    const [newYard, setNewYard] = useState({ nameCourt: "", CoSo: "", imgYard: "" });
    const [newSlot, setNewSlot] = useState({ timeFrame: "", yardId: "" });
    const [selectedYard, setSelectedYard] = useState(null);

    useEffect(() => {
        fetchYards();
        fetchSlots();
    }, []);

    const fetchYards = async () => {
        try {
            const response = await axios.get("https://662b9fd1de35f91de158edc0.mockapi.io/yard");
            setYards(response.data);
        } catch (error) {
            console.error("Error fetching yards:", error);
        }
    };

    const fetchSlots = async () => {
        try {
            const response = await axios.get("https://662b9fd1de35f91de158edc0.mockapi.io/slot");
            setSlots(response.data);
        } catch (error) {
            console.error("Error fetching slots:", error);
        }
    };

    const addYard = async () => {
        try {
            const response = await axios.post("https://662b9fd1de35f91de158edc0.mockapi.io/yard", newYard);
            setYards([...yards, response.data]);
            setNewYard({ nameCourt: "", CoSo: "", imgYard: "" });
        } catch (error) {
            console.error("Error adding yard:", error);
        }
    };

    const addSlot = async () => {
        try {
            const response = await axios.post("https://662b9fd1de35f91de158edc0.mockapi.io/slot", newSlot);
            setSlots([...slots, response.data]);
            setNewSlot({ timeFrame: "", yardId: "" });
        } catch (error) {
            console.error("Error adding slot:", error);
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

    const updateSlot = async (id, updatedSlot) => {
        try {
            const response = await axios.put(`https://662b9fd1de35f91de158edc0.mockapi.io/slot/${id}`, updatedSlot);
            setSlots(slots.map((slot) => (slot.id === id ? response.data : slot)));
        } catch (error) {
            console.error("Error updating slot:", error);
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

    const deleteSlot = async (id) => {
        try {
            await axios.delete(`https://662b9fd1de35f91de158edc0.mockapi.io/slot/${id}`);
            setSlots(slots.filter((slot) => slot.id !== id));
        } catch (error) {
            console.error("Error deleting slot:", error);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "timeFrame" || id === "yardId") {
            setNewSlot({ ...newSlot, [id]: value });
        } else {
            setNewYard({ ...newYard, [id]: value });
        }
    };

    const handleDetailClick = (yard) => {
        setSelectedYard(yard);
    };

    return (
        <div className="tab-pane fade show active" id="active" role="tabpanel" aria-labelledby="active-tab">
            <div className="row">
                <div className="table-yard-info col-lg-7">
                    <button id="btnAddYard1" className="btn btn-success my-4 w-25" data-bs-toggle="modal" data-bs-target="#addYard">
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
                                <th className="text-start">Tên cơ sở</th>
                                <th>Hình ảnh</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody id="tblYard">
                            {yards.map((yard) => (
                                <tr key={yard.id}>
                                    <td>{yard.id}</td>
                                    <td className="text-align-start" style={{ textAlign: "left" }}>
                                        {yard.nameCourt}
                                    </td>
                                    <td>
                                        <img src={yard.imgYard} alt={yard.nameCourt} style={{ height: "100%", width: "45%", margin: "auto" }} />
                                    </td>
                                    <td className="d-flex align-items-center justify-content-center" style={{ height: "100px" }}>
                                        <button
                                            className="btn"
                                            onClick={() => handleDetailClick(yard)}
                                            data-bs-toggle="modal"
                                            data-bs-target="#detailYardModal"
                                        >
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
                    <button id="btnAddSlot2" className="btn btn-success my-4 w-50" data-bs-toggle="modal" data-bs-target="#addSlot">
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
                        <tbody id="tblSlot">
                            {slots.map((slot) => (
                                <tr key={slot.id}>
                                    <td className="text-center">{slot.id}</td>
                                    <td className="text-center">{slot.timeFrame}</td>
                                    <td className="d-flex" style={{ height: "" }}>
                                        <button className="btn" onClick={() => console.log(slot)}>
                                            <i className="fa-solid fa-circle-info"></i>
                                        </button>
                                        <button className="btn">
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <button className="btn" onClick={() => deleteSlot(slot.id)}>
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal thêm mới sân */}
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

            {/* Modal thêm mới slot */}
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
                                <label htmlFor="timeFrame">Khung giờ</label>
                                <input
                                    id="timeFrame"
                                    className="form-control"
                                    placeholder="Nhập khung giờ"
                                    value={newSlot.timeFrame}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="yardId">ID Sân</label>
                                <input
                                    id="yardId"
                                    className="form-control"
                                    placeholder="Nhập ID sân"
                                    value={newSlot.yardId}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success" data-bs-dismiss="modal" onClick={addSlot}>
                                    Tạo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal chi tiết sân */}
            <div className="modal fade" id="detailYardModal" tabIndex="-1" aria-labelledby="detailYardLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="detailYardLabel">
                                Chi tiết sân
                            </h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex">
                            {selectedYard && (
                                <>
                                    <div style={{ width: "50%" }}>
                                        <img src={selectedYard.imgYard} alt={selectedYard.nameCourt} style={{ width: "100%" }} />
                                    </div>
                                    <div style={{ width: "50%", paddingLeft: "20px" }}>
                                        <p>ID: {selectedYard.id}</p>
                                        <p>Tên sân: {selectedYard.nameCourt}</p>
                                        <p>Cơ sở: {selectedYard.CoSo}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
