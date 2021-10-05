// import './App.css';
import "./assets/styles/all.css";
import "./vendor/custom.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import SideOptions from "./components/SideOptions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Funds from "./views/Funds";
import Settings from "./views/Settings";
import Project from "./views/Project";

function App() {
  return (
    <Router>
      <div className="App">
        <SideOptions />
        <main className="content">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/funds">
              <Funds />
            </Route>
            <Route exact path="/projects">
              <Project />
            </Route>
            <Route exact path="/Settings">
              <Settings />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
