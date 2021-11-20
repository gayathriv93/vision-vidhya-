import { Component } from "react";
import OfferPlan from "./Offer-plan/Offer-plan";
import './Offers.css';

class Offers extends Component {
    render() {
        return (
            <div className="container-fluid container-bg py-5">
                <section className="container">
                    <h1 className="text-light fw-bold banner-heading pb-5">Our Offers</h1>
                    {/* offers */}
                    <a href="/" className="row justify-content-center text-decoration-none text-dark ">
                    {
                        [0, 0, 0,0].map(() => {
                            return (
                                <div className="col-12 col-md-6 col-lg-3 ">
                                    <OfferPlan></OfferPlan>
                                </div>);
                        })
                    } 
                        </a>                      
                                    </section>
            </div>
        )
    }
} 

export default Offers;