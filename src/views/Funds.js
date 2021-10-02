const Funds = () => {
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="d-flex justify-content-between px-lg-5">
          <button className="btn button-bg-color rounded-pill">
            {" "}
            New Request <i className="bx bx-plus"></i>
          </button>
          <div className="d-flex gap-4">
            <select
              class="form-select rounded-pill form-select-sm"
            >
              <option selected>All status</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <input className="form-control rounded-pill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
