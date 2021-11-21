import { Component } from 'react/cjs/react.production.min';
import './ServiceComp.css';
class ServiceComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row justify-content-center mb-4" style={{ width: '99%' }}>
                {/* Standard Plan */}
                <div className="col-12 justify-content-center service-container p-0" >
                    <div className="px-3 py-5 service-head bg-light">
                        <div ><i class={this.props.s.logo} style={{ width: '35px' }} ></i></div>
                        {/* <div>Profile Evaluation</div> */}
                        <div style={{ maxHeight: '40px' }}>{this.props.s.text}</div>
                    </div>
                    <a href="/" className="row d-flex align-items-center text-decoration-none text-dark px-4 py-3">
                        <div className="col-6 d-flex justify-content-start fs-5 fw-normal"> LearnMore</div>
                        <div className="col-6 d-flex justify-content-end ">  <i class="bi bi-arrow-right"></i></div>

                    </a>
                </div>

            </div>
        )
    }

}

export default ServiceComp;