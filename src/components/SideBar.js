import { Link } from 'react-router-dom'
function SideBar() {
  return (
    <>
      <div class="d-flex flex-column flex-shrink-0 p-3 vh-100 nav-base">
        <div className="border-bottom">
          <i className="bx bx-circle fs-1 mb-2"> </i>
        </div>
        <ul class="nav nav-pills fw-bold  flex-column mb-auto">
          <li>
            <Link to="/" className="nav-link d-flex align-content-center">
              <i className="bx bxs-dashboard fs-3 me-2"></i>
              <span className="fs-6 mt-1">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/fund" className="nav-link d-flex align-content-center">
              <i className="bx bxs-wallet-alt fs-3 me-2"></i>
              <span className="fs-6 mt-1">Funds</span>
            </Link>
          </li>
          <li>
            <Link to="/project" className="nav-link d-flex align-content-center">
              <i className="bx bx-archive fs-3 me-2"></i>
              <span className="fs-6 mt-1">Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="nav-link d-flex align-content-center">
              <i className="bx bx-abacus fs-3 me-2"></i>
              <span className="fs-6 mt-1">Settings</span>
            </Link>
          </li>
        </ul>
        <div className="d-flex align-content-center gap-3 border-top">
          <i className="bx bx-log-out fs-4 icon-color mt-3"></i>
          <span className="icon-color fs-6 mt-3">Logout</span>
        </div>
      </div>
    </>
  );
}

export default SideBar;
