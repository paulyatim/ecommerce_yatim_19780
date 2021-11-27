import React from 'react'
import logo from '../../logo.svg';
import '../../App.css';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <CartWidget/>
                <a className="navbar-brand" href="{#}" id="pageTitle">
                    <img src={logo} className="App-logo" alt="logo" />
                    E-Commerce Yatim
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="{#}">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="{#}">Page 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="{#}">Page 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="{#}">Page 3</a>
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
