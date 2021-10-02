import "./vendor/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 vh-100 nav-base">
      <div className="border-bottom">
        <i className="bx bx-circle fs-1 mb-2"> </i>
      </div>
      <ul class="nav nav-pills fw-bold  flex-column mb-auto">
        <li>
          <a href="#/" className="nav-link d-flex align-content-center">
            <i className="bx bxs-dashboard fs-3 me-2"></i>
            <span className="fs-6 mt-1">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#/" className="nav-link d-flex align-content-center">
            <i className="bx bxs-wallet-alt fs-3 me-2"></i>
            <span className="fs-6 mt-1">Funds</span>
          </a>
        </li>
        <li>
          <a href="#/" className="nav-link d-flex align-content-center">
            <i className="bx bx-archive fs-3 me-2"></i>
            <span className="fs-6 mt-1">Projects</span>
          </a>
        </li>
        <li>
          <a href="#/" className="nav-link d-flex align-content-center">
            <i className="bx bx-abacus fs-3 me-2"></i>
            <span className="fs-6 mt-1">Settings</span>
          </a>
        </li>
      </ul>
      <div className="d-flex align-content-center gap-3 border-top">
        <i className="bx bx-log-out fs-4 icon-color mt-3"></i>
        <span className="icon-color fs-6 mt-3">Logout</span>
      </div>
    </div>
  );
}
export default App;
