import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/HomePage';
import Login_page from './pages/Login_page';
import Track_page from './pages/Track_page';
import Signup from './pages/Signup';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Login_form from './components/login_form';
import SignupForm from './components/SignupForm';

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
                        <Route exact path="/pages/Login_page" component={withRouter(Login_form)} />
                        <Route exact path="/profile" component={withRouter(SignupForm)} />
                        </Switch>
                    </div>
                </Router> 
  );
}

export default App;
