import Offers from "./Our-Offers/Offers";
import Services from "./Services/Services";
import Testimonal from "./Testimonal-component/Testimonal";
import Bannercomponent from "./Bannercomponent/Bannercomponent";
import OurService from "./Services/Services";
import Facilitybanner from "./Facility-Banner/Facilitybanner";

function Home() {
    return (
        <div>
            <Bannercomponent></Bannercomponent>
            <Facilitybanner></Facilitybanner>
            <OurService></OurService>
            <Offers></Offers>
            <Testimonal></Testimonal>
        </div>)
}
export default Home;