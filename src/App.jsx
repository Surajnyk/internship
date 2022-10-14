import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss"
import Navbar from "./components/Navbar/Navbar";
import Contents from "./components/Navbar/Contents";
import Home from "./components/Navbar/Home";
import Background from "./components/Header/Background";

function App() {
return (
    <BrowserRouter>
    <Navbar />
    <Background />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contents" element={<Contents />} />
    </Routes>
    </BrowserRouter>

);
}

export default App;