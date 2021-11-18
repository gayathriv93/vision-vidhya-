import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar-component/navbar';
import Bannercomponent from './Bannercomponent/Bannercomponent';
import Testimonal from './Testimonal-component/Testimonal';
import FooterBanner from './Footer-banner/Footer-banner';
import Footer from './Footer/Footer';
import Offers from './Our-Offers/Offers';

function App() {
  return (
    <div>
      <Navbar ></Navbar>
      <Bannercomponent></Bannercomponent>
      <Offers></Offers>
      <Testimonal></Testimonal>
      <FooterBanner></FooterBanner>
      <Footer></Footer>
    </div>
  );
}

export default App;
