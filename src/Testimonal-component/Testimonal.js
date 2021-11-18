import { Component } from "react";
import Testimonalinner from "./Testimonal-inner-component/Testimonal-inner-comp";
import './Testimonal.css';

class Testimonal extends Component {
    render() {
        return (
            <div className="testimonal py-5 ">

                <section className="container h-100">
                <h1 className="testimonal-head row pt-5">Testimonials</h1>

                    <div className="row justify-content-around align-items-center h-100 py-5 position-relative">
                        {
                            [0, 0, 0].map(() => {
                                return (
                                    <div className="col-12 col-md-4 my-4">
                                        <Testimonalinner ></Testimonalinner>

                                    </div>);
                            })
                        }

                    </div>

                </section>

            </div>
        )
    }
}

export default Testimonal;