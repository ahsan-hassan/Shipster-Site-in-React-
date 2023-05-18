import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './pages/Login';
import TrackDelivery from './pages/TrackDelivery';

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
                        <Slider /><br></br>
                            <Card_section />
                            <Footer />
                        </Route>
                        </Switch>
                    </div>
                </Router> 
  );
}

export default App;
