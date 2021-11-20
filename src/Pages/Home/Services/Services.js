import { Component } from 'react';
import ServiceComp from './Service-Component/ServiceComp';
import './Services.css';
class OurService extends Component {
    constructor(props){
        super(props);
        this.state={servicedata:[{logo:'bi bi-person-lines-fill',text:"Profile Evaluation"},
        {logo:'bi bi-people-fill',text:"Application and Admission"},
        {logo:'bi bi-person-x-fill',text:"Blocked Account & Health Insurance"},
        {logo:'bi bi-briefcase-fill',text:"Visa and Travel"}]}
    }
    render() {
        return (
            <div className="container-fluid offer-container py-5">
                <div className="container">
                    <h1 className="fw-bold py-5">Our Services</h1>
                    <div className="row">
                        {
                            this.state.servicedata.map((x) => {
                                return (
                                    <div className="col-12 col-md-6 col-lg-3 ">
                                        <ServiceComp s={x}></ServiceComp>
                                    </div>);
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default OurService;