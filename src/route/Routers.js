import React from 'react'
import { Routes, Route } from "react-router-dom";
import MenuNav from '../component/MenuNav';
import Home from "../page/Home"
import PlaceDetail from "../page/PlaceDetail"

const Routers = () => {
    return (
        <div>
            <MenuNav />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/place-detail/:id" element={<PlaceDetail/>} />
            </Routes>
        </div>
    )
}

export default Routers



