import './App.css'
import Navbar from "./layout/Navbar.jsx";
import Home from "./pages/Home.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddUser from "./users/AddUser.jsx";

function App() {

    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/adduser" element={<AddUser/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App
