import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreaEquipo from "./Components/CreaEquipo";
import LoginProvider from "./Context/LoginProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <LoginProvider>
            <Route exact path="/" component={Home} />
            <Route exact path="/creaEquipo" component={CreaEquipo} />
          </LoginProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
