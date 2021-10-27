import { Switch, Route, useRouteMatch } from "react-router-dom";

// views components
import Dashboard from "../views/dashboard";
import Project from "../views/Project";

// partial components
import Footer from "./Footer";
import TopNav from "./TopNav";
import SideBar from "./Links";

function Main() {
  let { path, url } = useRouteMatch();
  return (
    <div id="page-top">
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopNav />
            <div className="container-fluid">
              <Switch>
                <Route exact path={path} component={Dashboard} />
                <Route path={`${url}/projects`} component={Project} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Main;
