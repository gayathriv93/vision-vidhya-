import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar-component/navbar';
import Bannercomponent from './Bannercomponent/Bannercomponent';

function App() {
  return (
    <div>
      <Navbar ></Navbar>

      <Bannercomponent></Bannercomponent>
    </div>
  );
}

export default App;
