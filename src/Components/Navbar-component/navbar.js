import { Component } from "react";
import logo from "./vv-nav-logo.png";
import "./navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid nav-item">
                <nav className="row justify-content-between nav-logo ">
                    {/* logo */}
                    <div className="col-9 col-md-5  d-flex justify-content-center">
                        <img className="img-fluid  logo" src={logo} alt="" ></img>
                    </div>
                    {/* nav items for big screen */}
                    <div className="col-6 d-none d-md-flex justify-content-end text-light" >
                        <a className="text-decoration-none " href="/">Home</a>
                        <a className="text-decoration-none " href="/">Services</a>
                        <a className="text-decoration-none " href="/">About</a>

                    </div>
                    {/* menu Icon for small screens */}
                    <div className="col-3 d-flex align-items-center d-md-none menu-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>

                </nav>
            </div>
        )
    }
}

export default Navbar;