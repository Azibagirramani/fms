import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./vendor/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Dashboard from "./views/dashboard";
import Project from "./views/Project";
// import Fund from "views/Funds"
// import Settings from "views/Settings"
function App() {
  return (
    <Router>
      <div className="d-flex vh-100">
        <div className="sider-bar">
          <SideBar />
        </div>
        <div className="right-side-content">
          <div className="header">
            <Header />
          </div>
          <div className="main-content">
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/project">
                <Project />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
