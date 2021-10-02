import UserData from "../components/UserData";
const Settings = () => {
  return (
    <div className="my-5 px-5 container">
      <div className="card px-0 shadow-lg">
        <div class="row">
          <div class="col-sm-5 col-md-5">
            <div className="my-5 px-0 conatiner align-items-center d-flex-column justify-content-center">
              <div class="row">
                <div class="col-xl-12 d-flex justify-content-center">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                    alt="Profile_Picture"
                    class="_setting_avatar"
                  />
                </div>
              </div>
              <div class="row px-2 m-3">
                <h4 className="fw-bold d-flex align-items-center justify-content-center text-secondary">
                  Change Profile Picture
                </h4>
              </div>
              <div class="row px-2 m-4">
                <button className="btn btn-success btn-lg rounded-pill gap-2 px-5 fw-bold d-flex align-items-center justify-content-center">
                  Use Camera <i class="bx bxs-camera fs-2 icon-cam"></i>
                </button>
              </div>
              <div class="row px-2 m-4">
                <button className="btn btn-success btn-lg rounded-pill gap-2 px-5 fw-bold d-flex align-items-center justify-content-center">
                  Upload Image<i class="bx bxs-image fs-2 icon-img"></i>
                </button>
              </div>
            </div>
          </div>
          <UserData/>
        </div>
      </div>
    </div>
  );
};

export default Settings;
