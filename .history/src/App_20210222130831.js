import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Navbar';
import Slider from './components/Slider';
import Card_section from './components/Card_section';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './pages/Login';

function App() {
  return (
    <div>
    <Router>
    <NavBar/>

<Switch>
    <Route path="/pages/Login">
        <Login />
    </Route>
    <Route path="/">
    <Slider /><br></br>
<Card_section />
    </Route>
</Switch>


<Footer />
    </Router>
    </div>
  );
}

export default App;
