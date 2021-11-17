import { Component } from "react";
import './Bannercomponent.css';
import topimg from '../images/young-smiling-stu.png';



class Initial extends Component {
    render() {
        return (
            <div className="container-fluid position-relative ">
                <div className="row bg-color ">
                    <div className="col-4">
                        <section className="positioning">
                            <div className="row d-flex align-items-center h-100 w-100" >
                                <span className="dummy-button " ></span>
                                <h1 className="big-head fw-bold text-white mt-4">Study in Germany</h1>
                                <span className="text-light small-head mt-3">One of the leading study destinations</span>
                                <div>
                                    <button className="btn contact-btn mt-5">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className="col-8 img-bg position-relative">
                        <img src={topimg} alt="" className="img-position"></img>
                    </section>
                </div>
            </div>

        )
    }
}

export default Initial;