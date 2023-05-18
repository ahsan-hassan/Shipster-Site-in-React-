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
      <NavBar/>
      <Slider />
      <Card_section />
      <Footer />
    </div>
  );
}

export default App;
