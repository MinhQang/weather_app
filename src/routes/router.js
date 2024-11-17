import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import View from "../Components/view";
import Titles from "../Components/header/titles";
import weatherForm from "../Components/weatherCheck/weatherForm";

function Router() {
    return (
        <div>
            <Router>
                <navbar/>
                <Switch>
                    <Route path="/weatherForm" element={}/>
                </Switch>
            </Router>
        </div>
    )
}