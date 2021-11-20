import { Component } from "react";
import './Footer.css';
import logo from './vv-nav-logo.png'

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid connect-bg p-5">
                <div className="row">
                    {/* logo */}
                    <div className="col-12 col-md-3 d-flex justify-content-start text-light align-items-center h-100">
                        <img className="img-fluid " src={logo} alt="logo" ></img>
                    </div>
                    {/* Services */}
                    <div className="col-12 col-md-3 d-flex justify-content-start text-light">
                        <div >
                            <div className="footer-headings pb-3">Services</div>
                            <div className="pb-3">
                                <a className="text-decoration-none fw-normal  mx-0" href="/">Profile Evaluation</a>

                            </div>
                            <div className="pb-3">
                                <a className="text-decoration-none fw-normal mx-0" href="/">Application and admission</a>
                            </div>
                            <div className="pb-3">
                                <a className="text-decoration-none fw-normal  mx-0" href="/">Blocked account and Health Insurance</a>
                            </div>
                            <div className="pb-3">
                                <a className="text-decoration-none fw-normal  mx-0" href="/">Visa and travel</a>
                            </div>
                        </div>

                    </div>
                    {/* Offers */}
                    <div className="col-12 col-md-3 d-flex justify-content-start text-light">
                        <div >
                            <div className="footer-headings pb-3">Our Offers</div>
                            <div className="pb-3">
                                <a className="text-decoration-none fw-normal  mx-0" href="/"> Standard Plan - ₹50000 </a>

                            </div>
                            <div className="pb-3">
                                <a className="text-decoration-none fw-normal mx-0" href="/">Premium Plan - ₹80000</a>
                            </div>
                            <div className="pb-3">
                                <a className="text-decoration-none fw-normal  mx-0" href="/">Deluxe Plan - ₹100000 </a>
                            </div>
                            <div className="pb-3">
                                <a className="text-decoration-none fw-normal  mx-0" href="/">Platinum - ₹150000</a>
                            </div>
                        </div>
                    </div>
                    {/* connect */}
                    <div className="col-12 col-md-3 text-light card px-5 py-2  bg-dark" >
                        <div className="footer-headings pb-3">Connect</div>
                        {/* social buttons */}
                        <div className="row pb-4">
                            <i className="bi bi-facebook col-2 mx-2"></i>
                            <i className="bi bi-twitter col-2 mx-2"></i>
                            <i className="bi bi-instagram col-2 mx-2"></i>
                            <i className="bi bi-linkedin col-2 mx-1"></i>
                        </div>
                        <div className="row pb-4">
                            We bring the Years, global experience, and stamina to guide our students new and often disruptive realities.
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
export default Footer;