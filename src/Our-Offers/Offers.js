import { Component } from "react";
import './Offers.css';

class Offers extends Component {
    render() {
        return (
            <div className="container-fluid container-bg py-5">
                <section className="container">
                    <h1 className="text-light fw-bold banner-heading pb-5">Our Offers</h1>
                    {/* offers */}
                    <div className="row  ">
                        {/* Standard Plan */}
                        <div className="col-12 col-md-6 col-lg-3 justify-content-center">
                        <div className="border rounded pt-5 pb-2 mb-4 px-2 hovering" style={{width:'99%'}}>
                        <h4 className="card-heading px-2">STANDARD PLAN</h4>
                                <div className="row py-4 px-2 inner-text">
                                    <span className="pb-3">Whats Included : </span>
                                    <span className="pb-3"><i class="bi bi-chevron-right"></i> Complete Guidance</span>
                                    <span className="pb-3"><i class="bi bi-chevron-right"></i> SOP & LOR Provided</span>
                                    <span className="pb-3"><i class="bi bi-chevron-right"></i> 5 Applications Allowed</span>
                                    <span className="pb-3"><i class="bi bi-chevron-right"></i> Visa & Travel Guidance</span>
                                </div>
                                <section className="row border bg py-3 mt-3 mx-auto ">
                                    <div className="col-6 d-flex justify-content-start card-heading"> ₹50000</div>
                                    <div className="col-6 d-flex justify-content-end card-heading "> Go <i class="bi bi-arrow-right"></i></div>

                                </section>      
                        </div>
                        </div>
                        {/* Premium Plan */}
                        <div className="col-12 col-md-6 col-lg-3">
                        <div className="border rounded pt-5 pb-2 mb-4 hovering px-2" style={{width:'99%'}}>
                            <h4 className="card-heading px-2">PREMIUM PLAN</h4>
                            <div className="row py-4 px-2 inner-text">
                                <span className="pb-3">Whats Included : </span>
                                <span className="pb-3"><i class="bi bi-chevron-right"></i> Complete Guidance</span>
                                <span className="pb-3"><i class="bi bi-chevron-right"></i> All Documents Provided</span>
                                <span className="pb-3"><i class="bi bi-chevron-right"></i> Application Notary Service </span>
                                <span className="pb-3"><i class="bi bi-chevron-right"></i> Visa & Travel Guidance</span>
                            </div>
                            <section className="row border bg py-3 mt-3 mx-auto ">
                                <div className="col-6 d-flex justify-content-start card-heading"> ₹50000</div>
                                <div className="col-6 d-flex justify-content-end card-heading "> Go <i class="bi bi-arrow-right"></i></div>

                            </section>
                        </div>
                        </div>
                        {/* Delux Plan */}
                       <div className="col-12 col-md-6 col-lg-3">
                       <div className="border rounded pt-5 pb-2 mb-4 hovering px-2" style={{width:'99%'}}>
                            <h4 className="card-heading px-2">DELUX PLAN</h4>
                            <div className="row py-4 px-2 inner-text">
                                <span className="pb-3">Whats Included : </span>
                                <span className="pb-3"><i class="bi bi-chevron-right"></i> Complete Guidance</span>
                                <span className="pb-3"><i class="bi bi-chevron-right"></i> SOP & LOR Provided</span>
                                <span className="pb-3"><i class="bi bi-chevron-right"></i> 5 Applications Allowed</span>
                                <span className="pb-3"><i class="bi bi-chevron-right"></i> Visa & Travel Guidance</span>
                            </div>
                            <section className="row border bg py-3 mt-3 mx-auto">
                                <div className="col-6 d-flex justify-content-start card-heading"> ₹100000</div>
                                <div className="col-6 d-flex justify-content-end card-heading "> Go <i class="bi bi-arrow-right"></i></div>

                            </section>
                        </div>
                       </div>
                        {/* Platinum Plan */}
                       <div className="col-12 col-md-6 col-lg-3">
                       <div className="border rounded pt-5 pb-2 mb-4 hovering px-2" style={{width:'99%'}}>
                            <h4 className="card-heading px-2">PLATINUM PLAN</h4>
                            <div className="row py-4 px-2 inner-text">
                                <span className="pb-3">Whats Included : </span>
                                <span className="pb-3"><i class="bi bi-chevron-right"></i> Complete Guidance</span>
                                <span className="pb-3"><i class="bi bi-chevron-right"></i> SOP & LOR Provided</span>
                                <span className="pb-3"><i class="bi bi-chevron-right"></i> 5 Applications Allowed</span>
                                <span className="pb-3"><i class="bi bi-chevron-right"></i> Visa & Travel Guidance</span>
                            </div>
                            <section className="row border bg py-3 mt-3 mx-auto">
                                <div className="col-6 d-flex justify-content-start card-heading"> ₹150000</div>
                                <div className="col-6 d-flex justify-content-end card-heading "> Go <i class="bi bi-arrow-right"></i></div>

                            </section>
                        </div>
                       </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Offers;