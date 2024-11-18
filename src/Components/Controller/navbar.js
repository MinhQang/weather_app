import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Titles from "../header/titles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./news";
import Map from "./map";
import Check from "./check";
import Trend from "./trend";

class Navbar extends React.Component {

    render(){

        return(
            <div>
                <BrowserRouter>
                    <Titles />
                    <Routes>
                        {/* <Route path="/" element={<Home />}/> */}
                        <Route path="/news" element={<News />}/>
                        <Route path="/map" element={<Map />}/>   
                        <Route path="/check" element={<Check />}/>
                        <Route path="/trend" element={<Trend />}/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default Navbar;