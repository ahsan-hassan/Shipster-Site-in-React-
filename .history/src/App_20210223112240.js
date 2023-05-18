import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './pages/Login';
import TrackDelivery from './pages/TrackDelivery';
import HomePage from './pages/HomePage';
import Login_page from './pages/Login_page';
import NavBar from './components/Navbar';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
            <Router>           
                    <div>
                        <NavBar/>
                            <Switch>
                        <Route path="/pages/login_page">
                            <Login_page/>
                        </Route>
                        <Route path="/">
                          <HomePage/>
                        </Route>
                        </Switch>
                    </div>
                </Router> 
  );
}

export default App;
