import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header"
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Routing(props) {
    return (
        <Router>
            <Header />
            <Routes>
                <Route index path="/" element={<Home/>} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/user" element={<User />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default Routing