import { NavLink } from "react-router-dom";
const SideOptions = () => {
  return (
    <div>
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <span class="fs-4">Sidebar</span>
      </a>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#/" class="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="#/" class="nav-link link-dark">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#/" class="nav-link link-dark">
            Orders
          </a>
        </li>
        <li>
          <a href="#/" class="nav-link link-dark">
            Products
          </a>
        </li>
        <li>
          <a href="#/" class="nav-link link-dark">
            Customers
          </a>
        </li>
      </ul>
      <div class="dropdown">
        <a
          href="#/"
          class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <strong>mdo</strong>
        </a>
        <ul
          class="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser2"
        >
          <li>
            <a class="dropdown-item" href="#/">
              New project...
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideOptions;
