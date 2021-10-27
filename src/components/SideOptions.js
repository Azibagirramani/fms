import { NavLink } from "react-router-dom";
const SideOptions = () => {
  const logout = () => {
    alert("logout");
  };
  return (
    <div>

      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-light" style={{
        width: "280px",
        position: "fixed",
        backgroundColor: "white",
        width: "250px",
        height: "100vh",
        transition: "all 0.8s ease-in-out"
      }}>
        <a href="/" className=" d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className=" text-light fw-bold logo flex-start rounded-pill pt-1 px-2">
            FMS
         </span>
        </a>
        <hr />
        <ul className="side-nav nav nav-pills flex-column mb-auto">

          <li>
            <NavLink to="/" exact>
              <i className="bx-fw bx  bx bx-credit-card pt-1"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Funds">
              <i className="bx-fw bx  bx bx-credit-card pt-1"></i>
              <span>Funds</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Projects">
              <i className="bx-fw bx bx bx-gift pt-1"></i>
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Settings">
              <i className="bx-fw bx bx-slider bx-rotate-90 ps-2"></i>
             Settings
           </NavLink>
          </li>
        
        </ul>
        <hr />
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>boss</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>


    </div>

    // <div className="side_options">
    //   <div className="border-bottom d-flex " style={{ height: "90%" }}>
    //     <p className=" text-light fw-bold logo flex-start rounded-pill pt-2 px-3">
    //       FMS
    //     </p>
    //   </div>

    //   <div className="navigation">
    //     <nav>
    //       <NavLink to="/" exact>
    //         <span className="h-5">
    //           <i className="bx-fw bx bx-border-all"></i>
    //           Dashboard
    //         </span>
    //       </NavLink>

    //       <NavLink to="/Funds">
    //         <i className="bx-fw bx  bx bx-credit-card pt-1"></i>
    //         <span>Funds</span>
    //       </NavLink>
    //       <NavLink to="/Projects">
    //         <i className="bx-fw bx bx bx-gift pt-1"></i>
    //         <span>Projects</span>
    //       </NavLink>
    //       <NavLink to="/Settings">
    //         <i className="bx-fw bx bx-slider bx-rotate-90 ps-2"></i>
    //         Settings
    //       </NavLink>
    //     </nav>
    //   </div>

    //   <div className="border-top  logout d-flex" onClick={logout}>
    //     <i className="bx bx-log-out pe-2 bx-md  "></i>
    //     <span className="pt-1">logout </span>
    //   </div>
    // </div>
  );
};

export default SideOptions;
