import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter,Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar-component/navbar';
import FooterBanner from './Components/Footer-banner/Footer-banner';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar ></Navbar>
        <Switch>
          <Route path='/Home' component={Home} />
          {/* <Route path='/Services' component={Services} /> */}
          <Route path='/About' component={About} />
          {/* <Route path='/Contactus' component={ContactUs} /> */}
          <Route exact path='/' component={Home} />

        </Switch>
        <FooterBanner></FooterBanner>
        <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
