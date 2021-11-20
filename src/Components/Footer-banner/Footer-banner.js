import { Component } from "react";
import './Footer-banner.css'

class FooterBanner extends Component {
    render() {
        return (
            <div className="container-fluid footer-banner-bg py-5">
                <section className="row text-center py-5">
                    <div className="bigtext pb-4">Your Vision.Our Passion.</div>
                    <div className="smalltext pb-4">Educational consulting expertise to buid your future.</div>
                    <div className="pb-4"><button className="contact-btn">Contact Us</button></div>
                </section>
            </div>
        )
    }
}
export default FooterBanner;