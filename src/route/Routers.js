import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import MenuNav from '../component/MenuNav';
import Home from "../page/Home"

const Routers = () => {
    return (
        <div>
            <MenuNav />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default Routers