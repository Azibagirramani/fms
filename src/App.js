import "./vendor/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div className="mt-5 container border d-flex justify-content-between">
        <p className="fs-6 fw-bold">Dashboard</p>
        <div className="d-flex  gap-1">
          <i className="bx bx-bell text-secondary fs-3 position-relative">
            <span class="position-absolute top-0 start-0 translate-middle badge bg-danger">
              <span class="visually-hidden">unread messages</span>
            </span>
          </i>
        </div>
      </div>
    </>
  );
}
export default App;
