import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Titles from "./header/titles";
import { BrowserRouter } from 'react-router-dom';

class View extends React.Component {

    render(){

        return(
            <div>
                <BrowserRouter>
                    <Titles/>
                </BrowserRouter>
            </div>
        )
    }
}

export default View;