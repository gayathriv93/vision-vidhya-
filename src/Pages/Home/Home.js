import Offers from "./Our-Offers/Offers";
import Services from "./Services/Services";
import Testimonal from "./Testimonal-component/Testimonal";
import Bannercomponent from "./Bannercomponent/Bannercomponent";
import OurService from "./Services/Services";

function Home() {
    return (
        <div>
            <Bannercomponent></Bannercomponent>
<OurService></OurService>  
          <Offers></Offers>
            <Testimonal></Testimonal>
        </div>)
}
export default Home;