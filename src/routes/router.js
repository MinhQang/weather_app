import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Titles from "../Components/header/titles";
import News from "../Components/header/news";
import Map from "../Components/header/map";
import Check from "../Components/header/check";
import Trend from "../Components/header/trend";
import { TiArchive } from "react-icons/ti";

function Router() {
    return (
        <div>
            <Router>
                <Titles/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/" element={<Home />}/>   
                    <Route path="/" element={<Home />}/>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </Router>
        </div>
    )
}