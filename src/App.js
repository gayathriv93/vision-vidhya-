import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch,BrowserRouter,Route, Redirect} from 'react-router-dom';
import Navbar from './Navbar-component/navbar';
import Initial from './Initial-Component/Initialcomponent';

function App() {
  return (
   <div>
     <Initial></Initial>
      {/* <Navbar /> */}
     
   </div>
  );
}

export default App;
