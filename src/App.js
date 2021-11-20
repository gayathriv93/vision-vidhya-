import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar-component/navbar';
import FooterBanner from './Components/Footer-banner/Footer-banner';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Navbar ></Navbar>
      <Home></Home>
      <FooterBanner></FooterBanner>
      <Footer></Footer>
    </div>
  );
}

export default App;
