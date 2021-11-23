import './Aboutme.css';
import businessman from './businessman.png';
function Aboutme() {
    return (
        <div className="info-container container-fluid h-auto">
            <div className="row container">
                <div className="col-12 col-md-6 my-auto text-center">
                    <h1 className="fw-bold about-head-text">About Me</h1>
                    <p className="fs-5">
                        My name is Hariprasad Aleswaram and I have done my Masters in Germany.
                        Along with a full time job holder, I am a Guide and an Entrepreneur in the digital creative world.
                    </p>
                </div>
                <div className="col-6 d-none d-md-block ">
                    <img className="about-image" src={businessman} alt="/"></img>
                </div>

            </div>
        </div>
    )
}
export default Aboutme;