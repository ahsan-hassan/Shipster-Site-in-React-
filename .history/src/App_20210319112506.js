import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/HomePage';
import Login_page from './pages/Login_page';
import Track_page from './pages/Track_page';
import Headerdemo from './components/Headerdemo'
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Signup from './pages/Signup';
import ContactUs from './pages/ContactUs'
import OrderSummary from './pages/OrderSummary';


function App() {
  return (
            <Router>           
                    <div>
                        <Headerdemo />
                            <Switch>
                                <Route path="/pages/ContactUs">
                                    <ContactUs/>
                                </Route>
                                </Route>
                                <Route path="/pages/Login_page">
                                    <Login_page/>
                                </Route>
                                <Route path="/pages/Signup">
                                    <Signup/>
                                </Route>
                                <Route path="/pages/Track_page">
                                    <Track_page/>
                                </Route>
                                <Route path="/pages/OrderSummary">
                                    <Track_page/>
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