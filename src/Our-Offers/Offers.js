import { Component } from "react";
import './Offers.css';

class Offers extends Component {
    render() {
        return (
            <div className="container-fluid container-bg py-5">
                <section className="container">
                    <h1 className="text-light fw-bold banner-heading pb-5">Our Offers</h1>
{/* offers */}
                    <div className="row ">
<div className="col border rounded bg-light p-2">
<h4 className="fw-bold">STANDARD PLAN</h4>
</div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Offers;