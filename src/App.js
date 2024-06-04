import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./utils/Account/Register";
import Login from "./utils/Login";
import GuestPage from "./page/guest/GuestPage";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<GuestPage />} />
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
