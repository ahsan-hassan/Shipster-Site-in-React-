import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Navbar';
import Slider from './components/Slider';
import Card_section from './components/Card_section';


function App() {
  return (
    <div>
    <NavBar/>
    <Slider /><br></br>
    <Card_section />
    </div>
  );
}

export default App;
