import './Facilitybanner.css';
import fbanner from './Facilitybanner.png';
function Facilitybanner() {
    return (
        <div className="row container-fluid facility-container">
            <img className="img-fluid" src={fbanner} alt="/"></img>
        </div>
    )
}
export default Facilitybanner;