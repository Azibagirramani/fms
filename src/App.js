import Dashboard from "./views/Main";
import Landing from "./views/Landing";
import Login from "./views/Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/" >
          <Landing />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
