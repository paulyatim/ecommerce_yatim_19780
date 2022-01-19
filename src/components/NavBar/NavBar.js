import '../../App.css';
import CartWidget from './CartWidget';
import {Link} from "react-router-dom";

function NavBar() {
    
    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-light">
            <div className="container-fluid">
                <Link to="/cart"><CartWidget/></Link>
                <Link to="/" className="navbar-brand" id="pageTitle">
                    <span style={{color:'rgb(236,162,173)'}}>Do</span>-<span style={{color:'rgb(137,55,41)'}}>Nuts!</span>
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
                    </ul> 
                </div>
            </div>
        </nav>
    );
}

export default NavBar;