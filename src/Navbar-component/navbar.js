import { Component } from "react";
import logo from "../images/vv-nav-logo.png";
import "./navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid nav-item">
                <nav className="row justify-content-between nav-logo ">
                    <div className="col-5 d-flex justify-content-center">
                        <img className="img-fluid  logo" src={logo} alt="" ></img>
                    </div>                 
                       <div className="col-6 d-flex justify-content-end text-light" >
                        <a className="text-decoration-none text-dark " href="">Home</a>
                        <a className="text-decoration-none text-dark " href="">Services</a>
                        <a className="text-decoration-none text-dark " href="">About</a>

                    </div>

                </nav>
            </div>
        )
    }
}

export default Navbar;