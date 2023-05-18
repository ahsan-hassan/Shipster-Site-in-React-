import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Navbar';
import Slider from './components/Slider';
import { Card } from 'react-bootstrap';


function App() {
  return (
    <div>
    <NavBar/>
    <Slider />
    <Card />
    </div>
  );
}

export default App;
