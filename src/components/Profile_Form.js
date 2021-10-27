import { Fragment } from "react";

const Profile_Form=()=> {
  return (
   <Fragment>
        <div className="col-sm-5 offset-sm-2 col-md-7 offset-md-0">
      <div className="card">
        <div className="card-header">Personal Information</div>
      </div>
      <div className="container p-0 px-3 m-3 mx-0">
        <div className="mb-3 row ">
          <label for="inputFullName" className="col-sm-3 col-form-label">
            Full Name
          </label>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="inputFullName" />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputDate" className="col-sm-3 col-form-label">
            Date of Birth
          </label>
          <div className="col-sm-8">
            <input type="date" className="form-control" id="inputDate" />
          </div>
        </div>

        <div className="mb-3 row">
          <label for="inputAddress" className="col-sm-3 col-form-label">
            Address
          </label>
          <div className="col-sm-8">
            <input type="text" className="form-control" id="inputAddress" />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Contact</div>
      </div>
      <div className="container p-0 px-3 m-3 mx-0">
        <div className="mb-3 row">
          <label for="inputEmail" className="col-sm-3 col-form-label">
            Email
          </label>
          <div className="col-sm-8">
            <input type="email" className="form-control" id="inputEmail" />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPhone" className="col-sm-3 col-form-label">
            Phone
          </label>
          <div className="col-sm-8">
            <input type="number" className="form-control" id="inputPhone" />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header m-10">Security</div>
      </div>
      <div className="container p-0 px-3 m-3 mx-0">
        <div className="mb-3 row">
          <label for="inputOldPassword" className="col-sm-3 col-form-label">
            Old Password
          </label>
          <div className="col-sm-8">
            <input type="password" className="form-control" id="inputOldPassword" />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputNewPassword" className="col-sm-3 col-form-label">
            New Password
          </label>
          <div className="col-sm-8">
            <input type="password" className="form-control" id="inputNewPassword" />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputConfirmPassword" className="col-sm-3 col-form-label">
            Confirm Password
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control"
              id="inputConfirmPassword"
            />
          </div>
        </div>
      </div>
      <div className="container p-0 px-3 m-3 mx-0">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-success btn-lg rounded-pill px-5 fw-bold">
            Save Changes
          </button>
        </div>
      </div>
    </div>
   </Fragment>
  );
}

export default Profile_Form;