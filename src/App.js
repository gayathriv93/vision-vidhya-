import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar-component/navbar';
import Bannercomponent from './Bannercomponent/Bannercomponent';
import Testimonal from './Testimonal-component/Testimonal';
import FooterBanner from './Footer-banner/Footer-banner';

function App() {
  return (
    <div>
      <Navbar ></Navbar>
      <Bannercomponent></Bannercomponent>
      <Testimonal></Testimonal>
      <FooterBanner></FooterBanner>
    </div>
  );
}

export default App;
