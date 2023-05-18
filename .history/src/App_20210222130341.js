import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Navbar';
import Slider from './components/Slider';
import Card_section from './components/Card_section';
import Footer from './components/Footer';


function App() {
  return (
    <div>
    <NavBar/>

    <Switch>
                        <Route path="/pages/Login">
                            <Login />
                        </Route>
                    </Switch>
    <Slider /><br></br>
    <Card_section />
    <Footer />
    </div>
  );
}

export default App;
