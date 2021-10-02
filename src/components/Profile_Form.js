import { Fragment } from "react";

const Profile_Form=()=> {
  return (
   <Fragment>
        <div class="col-sm-5 offset-sm-2 col-md-7 offset-md-0">
      <div class="card">
        <div class="card-header">Personal Information</div>
      </div>
      <div className="container p-0 px-3 m-3 mx-0">
        <div class="mb-3 row ">
          <label for="inputFullName" class="col-sm-3 col-form-label">
            Full Name
          </label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="inputFullName" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputDate" class="col-sm-3 col-form-label">
            Date of Birth
          </label>
          <div class="col-sm-8">
            <input type="date" class="form-control" id="inputDate" />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="inputAddress" class="col-sm-3 col-form-label">
            Address
          </label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="inputAddress" />
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">Contact</div>
      </div>
      <div className="container p-0 px-3 m-3 mx-0">
        <div class="mb-3 row">
          <label for="inputEmail" class="col-sm-3 col-form-label">
            Email
          </label>
          <div class="col-sm-8">
            <input type="email" class="form-control" id="inputEmail" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPhone" class="col-sm-3 col-form-label">
            Phone
          </label>
          <div class="col-sm-8">
            <input type="number" class="form-control" id="inputPhone" />
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header m-10">Security</div>
      </div>
      <div className="container p-0 px-3 m-3 mx-0">
        <div class="mb-3 row">
          <label for="inputOldPassword" class="col-sm-3 col-form-label">
            Old Password
          </label>
          <div class="col-sm-8">
            <input type="password" class="form-control" id="inputOldPassword" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputNewPassword" class="col-sm-3 col-form-label">
            New Password
          </label>
          <div class="col-sm-8">
            <input type="password" class="form-control" id="inputNewPassword" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputConfirmPassword" class="col-sm-3 col-form-label">
            Confirm Password
          </label>
          <div class="col-sm-8">
            <input
              type="password"
              class="form-control"
              id="inputConfirmPassword"
            />
          </div>
        </div>
      </div>
      <div className="container p-0 px-3 m-3 mx-0">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
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