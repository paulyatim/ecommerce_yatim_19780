import React from 'react'
import '../../App.css';
import CartWidget from './CartWidget';
import {Link} from "react-router-dom"

function NavBar() {
    
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/cart"><CartWidget/></Link>
                <Link to="/" className="navbar-brand" id="pageTitle">
                    Do-Nuts!
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category" className="nav-link">
                                Our Donuts!
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
