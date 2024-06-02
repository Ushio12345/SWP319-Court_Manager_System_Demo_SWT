import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuestPage from "./page/guest/GuestPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GuestPage />} />
            </Routes>
        </Router>
    );
}

export default App;
