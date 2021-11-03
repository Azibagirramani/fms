import loginImage from "../assets/img/login.svg"
function Login() {
  return (
    <>
      <div className="default-background vh-100 d-flex justify-content-center align-items-center">
        <div className="container default-background">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block d-flex align-content-center justify-content-center">
                      <img src={loginImage} alt="login" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">Welcome To FMS</h1>
                        </div>
                        <form className="">
                          <div className="mb-3">
                            <div class="form-floating mb-3">
                              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                              <label for="floatingInput">Email address</label>
                            </div>
                          </div>
                          <div className="mb-3">
                            <div class="form-floating mb-3">
                              <input type="password" class="form-control" id="floatingInput" placeholder="password" />
                              <label for="floatingInput">Password</label>
                            </div>
                          </div>
                          <div className="mb-3">
                            <div className="custom-control">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck"
                              />
                              <label
                                className="custom-control-label ms-2"
                                for="customCheck"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <a
                            href="index.html"
                            className="btn btn-dark text-uppercase fw-bold btn-user btn-block rounded-0"
                          >
                            Login
                          </a>
                        </form>
                        <hr />
                        <div className="text-center">
                          <a className="small text-dark" href="#/">
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                    </div>
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


export default Login