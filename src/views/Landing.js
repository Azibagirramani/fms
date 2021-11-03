import "../vendor/navbar.css";
import "../vendor/landing.css";
import Hero from "../assets/img/heroImage.svg";
import Success from "../assets/img/sucessOnline.svg";
import { Link } from "react-router-dom"

function NavigationBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container">
        <a className="navbar-brand" href="#/">
          LOGO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                Developer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                Product
              </a>
            </li>
            <ul className="nav-item p-0">
            <Link to="/login" className="nav-link">
            Log in
            </Link>
          </ul>
          </ul>
          <button
            className="nav-link btn btn-outline-dark text-dark border-2 py-2 m-4"
            href="#/"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
    </>
  );
}

function HeroSection() {
  return (
    <>
      <div className="">
        <div className="container my-5">
          <div className="d-flex flex-column mt-lg-4 gap-1 flex-lg-row justify-content-between">
            <div className="col-md-5">
              <h1 className="display-1 fw-600">A Better Way to Manage funds</h1>
              <p className="py-3 default-font-dark-color fs-1-4 fw-base">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi officia assumenda voluptatum a ducimus optio placeat
                soluta
              </p>

              <div className="col-md-9">
                <div className="input-group border border-dark border-2 rounded">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <span
                    className="input-group-text btn btn-dark py-lg-3"
                    id="basic-addon2"
                  >
                    Sign up for free
                  </span>
                </div>
              </div>
            </div>
            <div className="right-hero-area flex-grow-1">
              <img src={Hero} className="img-fluid" alt="hero" />
            </div>
            <div className="d-flex align-items-center">
              <i className="bx bx-start"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Choices() {
  return (
    <>
      <div className="position-relative">
        <div className="container default-margin-top-2x ">
          {" "}
          <div className="row w-100 mt-5">
            <div className="col-md-6 left-hero-area left-choice d-flex flex-column align-items-center py-5">
              <h2 className="default-header-2x-weight fs-2-2 col-md-8">
                A wide Choice of Ways to Send Money Online from the UK
              </h2>
              <p className="mt-4 col-md-8 text-left lh-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci facere hic voluptas in temporibus ea Adipisci facere hic voluptas in temporibus ea
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="row row-cols-2 p-5 gy-lg-5 gx-lg-5">
                <div className="col">
                  <h5>Bank</h5>
                  <h3 className="fw-bold mb-3">Transfer</h3>
                  <p className="default-font-dark-color">
                    Send a secure bank transfer directly to hundreds
                  </p>
                  <div className="d-flex align-items-center gap-3 div-icon-margin-bt">
                    <p className="text-dark fs-5 fw-600">Learn more</p>
                    <i class="bi bi-arrow-right h2"></i>
                  </div>
                </div>
                <div className="col">
                  <h5>Bank</h5>
                  <h3 className="fw-bold mb-3">Transfer</h3>
                  <p>Send a secure bank transfer directly to hundreds</p>
                  <div className="d-flex align-items-center gap-3 div-icon-margin-bt">
                    <p className="text-dark fs-5 fw-600">Learn more</p>
                    <i class="bi bi-arrow-right h2"></i>
                  </div>
                </div>
                <div className="col">
                  <h5>Bank</h5>
                  <h3 className="fw-bold mb-3">Transfer</h3>
                  <p>Send a secure bank transfer directly to hundreds</p>
                  <div className="d-flex align-items-center gap-3 div-icon-margin-bt">
                    <p className="text-dark fs-5 fw-600">Learn more</p>
                    <i class="bi bi-arrow-right h2"></i>
                  </div>
                </div>
                <div className="col">
                  <h5>Bank</h5>
                  <h3 className="fw-bold mb-3">Transfer</h3>
                  <p>Send a secure bank transfer directly to hundreds</p>
                  <div className="d-flex align-items-center gap-3 div-icon-margin-bt">
                    <p className="text-dark fs-5 fw-600">Learn more</p>
                    <i class="bi bi-arrow-right h2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function FastSecure() {
  return (
    <div className="container default-margin-top">
      <div className="row gx-5">
        <div className="col-md-6">
          <img src={Success} alt="sunset" className="img-fluid" />
        </div>
        <div className="col-md-6 px-5">
          <div className="col-md-12">
            <h1 className="display-4 text-justify default-header-weight">
              Lorem ipsum dolor, sit amet consect officia
            </h1>
            <p className="mt-4 text-justify lh-lg">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt, in temporibus? Enim molestiae, mollitia nisi consectetur
              nihil facilis fuga iusto hic magnam, facere alias ad, nobis
              nostrum. Quod
            </p>
            <button className="mt-4 btn btn-dark py-3 px-3">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Faqs() {
  return (
    <div className="container default-margin-tb-2x">
      <div className="text-center">
        <h1 className="display-4 text-justify default-header-weight">
          Facts & Questions
        </h1>
        <p className="fs-4">
          Have a question? Read through our FAQ below. If you can't find an
          answer, <br></br> please email our support team. We're here to help.
        </p>
      </div>
      <div className="d-flex justify-content-center default-2x-margin-top">
        <div
          className="accordion col-md-10"
          id="accordionPanelsStayOpenExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button default-font-dark-color"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                What is the purpose of an FAQ
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <p className="default-font-dark-color fs-6 text-justify">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                  fugit omnis similique voluptas beatae, vel, accusamus corporis
                  dolorem harum, voluptatum temporibus explicabo? Vero
                  temporibus laborum repellendus perspiciatis! Eum harum
                  perferendis sed qui fugiat, quam optio doloremque consectetur
                  facilis eius obcaecati quod in. Soluta aut quaerat, fugit
                  labore, reiciendis architecto quae voluptas delectus deserunt
                  vero repellendus impedit quia, eius ducimus iusto aliquam
                  nesciunt praesentium quo? Ea aut, excepturi accusantium illum
                  facilis nemo nesciunt omnis ab porro eaque quo iste ad
                  laudantium sunt qui similique blanditiis deleniti a ut
                  provident atque? Et sequi dolorem voluptates fugit quo,
                  tenetur voluptatem magnam facere. Exercitationem?
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed default-font-dark-color"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                What is an FAQ document
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <p className="default-font-dark-color fs-6 text-justify">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                  fugit omnis similique voluptas beatae, vel, accusamus corporis
                  dolorem harum, voluptatum temporibus explicabo? Vero
                  temporibus laborum repellendus perspiciatis! Eum harum
                  perferendis sed qui fugiat, quam optio doloremque consectetur
                  facilis eius obcaecati quod in. Soluta aut quaerat, fugit
                  labore, reiciendis architecto quae voluptas delectus deserunt
                  vero repellendus impedit quia, eius ducimus iusto aliquam
                  nesciunt praesentium quo? Ea aut, excepturi accusantium illum
                  facilis nemo nesciunt omnis ab porro eaque quo iste ad
                  laudantium sunt qui similique blanditiis deleniti a ut
                  provident atque? Et sequi dolorem voluptates fugit quo,
                  tenetur voluptatem magnam facere. Exercitationem?
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed default-font-dark-color"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Cookies?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                <p className="default-font-dark-color fs-5 text-justify">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                  fugit omnis similique voluptas beatae, vel, accusamus corporis
                  dolorem harum, voluptatum temporibus explicabo? Vero
                  temporibus laborum repellendus perspiciatis! Eum harum
                  perferendis sed qui fugiat, quam optio doloremque consectetur
                  facilis eius obcaecati quod in. Soluta aut quaerat, fugit
                  labore, reiciendis architecto quae voluptas delectus deserunt
                  vero repellendus impedit quia, eius ducimus iusto aliquam
                  nesciunt praesentium quo? Ea aut, excepturi accusantium illum
                  facilis nemo nesciunt omnis ab porro eaque quo iste ad
                  laudantium sunt qui similique blanditiis deleniti a ut
                  provident atque? Et sequi dolorem voluptates fugit quo,
                  tenetur voluptatem magnam facere. Exercitationem?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer container py-5 position-relative">
      <div className="square-clip position-absolute"></div>
      <div className="card border-0 p-5 default-background shadow">
        <div className="row">
          <div className="col">
            <h6 className="">Send Money</h6>
            <nav className="nav default-nav flex-column">
              <a className="nav-link" aria-current="page" href="#/">
                Help
              </a>
              <a className="nav-link" href="#/">
                Contact
              </a>
              <a className="nav-link" href="#/">
                Fees
              </a>
              <a className="nav-link" href="#/">
                Security
              </a>
              <a className="nav-link" href="#/">
                App Shop
              </a>
              <a className="nav-link" href="#/">
                Feedback
              </a>
            </nav>
          </div>
          <div className="col">
            <h6 className="">Send Money</h6>
            <nav className="nav default-nav flex-column">
              <a className="nav-link" aria-current="page" href="#/">
                Mobile apps
              </a>
              <a className="nav-link" href="#/">
                About us
              </a>
              <a className="nav-link" href="#/">
                Directors
              </a>
              <a className="nav-link" href="#/">
                News
              </a>
              <a className="nav-link" href="#/">
                Blogs
              </a>
            </nav>
          </div>
          <div className="col">
            <h6 className="">Send Money</h6>
            <nav className="nav default-nav flex-column">
              <a className="nav-link" aria-current="page" href="#/">
                What we do
              </a>
              <a className="nav-link" href="#/">
                Benefits
              </a>
              <a className="nav-link" href="#/">
                Mobile apps
              </a>
              <a className="nav-link" href="#/">
                About us
              </a>
              <a className="nav-link" href="#/">
                News
              </a>
              <a className="nav-link" href="#/">
                Blogs
              </a>
            </nav>
          </div>
          <div className="col">
            <h6 className="">Resources</h6>
            <nav className="nav default-nav flex-column">
              <a className="nav-link" aria-current="page" href="#/">
                FAQ
              </a>
              <a className="nav-link" href="#/">
                Get Started with FAQs
              </a>
              <a className="nav-link" href="#/">
                Your account
              </a>
              <a className="nav-link" href="#/">
                Cash collection{" "}
              </a>
              <a className="nav-link" href="#/">
                Bank transfer
              </a>
              <a className="nav-link" href="#/">
                Airtime top-up
              </a>
            </nav>
          </div>
          <div className="col">
            <h6 className="">Legal</h6>
            <nav className="nav default-nav flex-column">
              <a className="nav-link" aria-current="page" href="#/">
                Privacy policy
              </a>
              <a className="nav-link" href="#/">
                Cookie policy
              </a>
              <a className="nav-link" href="#/">
                Financial statement
              </a>
              <a className="nav-link" href="#/">
                Sitemap
              </a>
            </nav>
          </div>
        </div>
      </div>
      <p className="mt-5 col-md-4 default-font-size-1x">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic
        repellat deserunt debitis quam ut dolorum assumenda. Adipisci dolorem,
        voluptatibus quis dolore, ipsum temporibus,
      </p>
    </div>
  );
}

function Landing() {
  return (
    <>
      <div className="default-background pt-4 position-relative">
        <NavigationBar />
        <HeroSection />
        <Choices />
        <FastSecure />
        <Faqs />
        <Footer />
      </div>
    </>
  );
}

export default Landing;
