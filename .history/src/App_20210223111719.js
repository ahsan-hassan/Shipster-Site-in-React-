import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './pages/Login';
import TrackDelivery from './pages/TrackDelivery';
import HomePage from './pages/HomePage';

function App() {
  return (
            <Router>           
                    <div>
                        <NavBar/>
                            <Switch>
                        <Route path="/pages/login_page">
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
