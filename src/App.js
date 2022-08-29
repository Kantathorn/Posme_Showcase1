import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from './pages/Home'
import Barscan from './pages/BarcodeScanner'
import QRgen from './pages/QRApp'

function App() {
  return (
    <div className="App">
      <div className="App-body">
        
        <Router>
          <div>

            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/prompay_generator">
                <QRgen/>
              </Route>
              <Route path="/barcode_scanner">
                <Barscan/>
              </Route>
            </Switch>

          </div>
        </Router>

      </div>
    </div>
  );
}

export default App;
