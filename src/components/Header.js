function Header() {
  return (
    <>
      <div className="py-2 mt-2 shadow-sm px-4  d-flex justify-content-between">
        <p className="fs-6 fw-bold">Dashboard</p>
        <div className="d-flex gap-1">
          <i className="bx bx-bell text-secondary fs-3">
          </i>
        </div>
      </div>
    </>
  );
}


export default Header