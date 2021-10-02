import { Fragment, useRef } from "react";
function Milestones() { 
  let file = useRef(null)
  function openUpload(){
    const open_upload = file.current
    open_upload.click()
  }


  return (
    <Fragment>
      <div className="">
        <div className="d-flex px-5 mt-4 flex-column">
          <div className="d-flex m-0 p-0 justify-content-between align-items-center">
            <div className="d-flex gap-3 border-start border-primary border-5">
              <i class="bx bxs-check-square ms-2 fs-3 icon-color-plus"></i>
              <div className="d-flex flex-column">
                <p className="m-0 p-0 fw-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  quaerat asperiores
                </p>
                <p>
                  <span className="icon-color-plus">Completed</span> 1/23/2021 -
                  1/23/2021
                </p>
              </div>
            </div>
            <i
              className="bx button bxs-plus-square ms-2 fs-3 icon-color-plus"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            ></i>
          </div>
          <div className="ps-5 mt-4 d-flex justify-content-between flex-column flex-lg-row">
            <i className="bx bx-circle text-secondary fs-3"></i>
            <div className="flex-fill ms-1">
              <p className="fw-bold">
                Lore nter beyreacat <span className="fw-light">1/23/2021</span>
              </p>
              <p className="fw-bold">N1000.000</p>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                quaerat asperiores nulla alias impedit quod debitis suscipit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                quaerat asperiores nulla alias impedit quod debitis suscipit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                quaerat asperiores nulla alias impedit quod debitis suscipit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                quaerat asperiores nulla alias impedit quod debitis suscipit
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                quaerat asperiores nulla alias impedit quod debitis suscipit
              </p>
              <div>
                <div className="d-flex">
                  Download:{" "}
                  <span className="d-flex">
                    <i class="bx bxs-file-doc text-danger fs-3"></i>
                    <i class="bx bxs-file-pdf text-secondary fs-3"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex gap-4">
              <i class="bx bx-trash text-danger fs-3"></i>
              <i class="bx bx-edit text-primary fs-3"></i>
            </div>
          </div>
        </div>
        <div className="py-4 border-top mt-5 px-5">
          <div className="d-flex justify-content-between align-items-center border-5 gap-2 border-start border-secondary">
            <div className="d-flex align-items-center">
              <i className="bx bxs-square ms-2 fs-3"></i>
              <p className="mt-3 ms-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit{" "}
              </p>
            </div>
            <i className="bx bxs-plus-circle ms-2 fs-3 icon-color-plus"></i>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-white py-3 px-5">
          <div className="d-flex gap-5">
            <button className="btn btn-primary rounded-pill px-4 fw-bold">
              Suspend Project
            </button>
            <button className="btn btn-danger rounded-pill px-4 fw-bold">
              Stop Project
            </button>
          </div>
          <button className="btn btn-primary rounded-pill px-4 fw-bold">
            Save and Continue
          </button>
        </div>
      </div>

      {/* popup modal  */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content px-3">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Milestone Report
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p className="fw-bold">
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <p><span className="fw-bold">Date:</span> 1/12/2021</p>
              <form>
                <div className="row gy-4">
                  <div className="col-md-3 fw-bold">Amount Spent:</div>
                  <div className="col-md-7">
                    <input type="text" class="form-control" />
                  </div>
                  <div className="col-md-2">
                    <select class="form-select rounded">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="my-3">
                  <label for="description" class="form-label fw-bold">
                    Description
                  </label>
                  <textarea className="form-control w-100" />
                </div>

                <div onClick={openUpload} className="d-flex rounded border align-items-center flex-column upload-background mt-2 rounded-5">
                  <i className="bx bx-cloud-upload upload-icon-size icon-color"></i>
                  <p className="icon-color">
                    Drag and drop, or{" "}
                    <span className="text-primary">BROWSE</span> your file
                  </p>
                  <input className="d-none" type="file" id="myFile" name="filename" ref={file}/>
                </div>

                <div className="mt-3">
                  <div className="d-flex gap-3">
                    <i class="bx bxs-file-doc text-danger fs-3"></i>
                    <p>
                      Lorem Lorem ipsum dolor sit amet consectetur adipisicing
                      elit{" "}
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <i class="bx bxs-file-pdf text-primary fs-3"></i>
                    <p>
                      Lorem Lorem ipsum dolor sit amet consectetur adipisicing
                      elit{" "}
                    </p>
                  </div>
                </div>
                <div class="modal-footer border-0">
                  <button type="button" class="btn btn-primary fw-bold px-4 rounded-pill">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Milestones;
