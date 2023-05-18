import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/HomePage';
import Login_page from './pages/Login_page';
import Track_page from './pages/Track_page';
import Signup from './pages/Signup';
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
                        <Route path="/pages/Login_page">
                            <Login_page/>
                        </Route>
                        <Route path="/pages/Track_page">
                            <Track_page/>
                        </Route>
                        <Route path="/">
                          <HomePage/>
                        </Route>
                        <Route path="/pages/Signup">
                            <Signup/>
                        </Route>
                        </Switch>
                    </div>
                </Router> 
  );
}

export default App;
