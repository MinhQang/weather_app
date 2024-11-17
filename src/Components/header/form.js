import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = (props) => (
    <form onSubmit={props.loadWeather} className="p-3">
        <div className="form-group mb-3">
            <input type="text" name="city" placeholder="City" className="form-control" aria-label="default input example"/>
        </div>
        <div className="form-group mb-3">
        <input type="text" name="country" placeholder="Country" className="form-control" aria-label="default input example"/>
        </div>
        <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-success">Kiểm tra thời tiết</button>
        </div>
    </form>
);  

export default Form;