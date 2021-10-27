import { Link, useRouteMatch } from "react-router-dom";

function Links() {

  let { path, url } = useRouteMatch()
  return (
    <ul
      class="navbar-nav bg-dark sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div classNameName="sidebar-brand-text mx-3">FMS</div>
      </a>
      <li className="nav-item">
        <Link to="/dashboard" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Funds</span>
        </a>
      </li>
      <li className="nav-item">
        <Link to={`${url}/projects`} className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Projects</span>
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Settings</span>
        </a>
      </li>
    </ul>
  );
}

export default Links;
