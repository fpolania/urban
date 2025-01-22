import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Urban from "./component/Urban";
import React from "react";
import UrbanBTS from "./component/UrbanBoostp";

const MyRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Urban />}></Route>
            <Route path="UrbanBT" element={<UrbanBTS />}></Route>
        </Routes>
    </Router>
)
export default MyRoutes;