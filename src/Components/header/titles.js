import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

const Titles = () => {
    const [open, setOpen] = useState(false);
        return(
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <Link className="navbar-brand" to="../src/Components/view.js">Weather</Link>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" onClick={() => setOpen(false)}>Tin tức</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" onClick={() => setOpen(false)}>Bản đồ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" onClick={() => setOpen(false)}>Kiểm tra</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" onClick={() => setOpen(false)}>Xu hướng</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

export default Titles;