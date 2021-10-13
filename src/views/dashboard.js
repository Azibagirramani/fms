import Cards from "../components/Cards";
const Dashboard = () => {
  const cardContent = [
    {
      value: 200,
      header: "Pending request",
      bgColor: "#FB8500",
      percentage: "+30%",
      icon: "bx-time-five",
    },
    {
      value: 220,
      header: "Approved request",
      bgColor: "#01B3D3",
      percentage: "+30%",
      icon: "bxs-time",
    },
    {
      value: 256,
      header: "Disbursed funds",
      bgColor: "#02BC77",
      percentage: "+30%",
      icon: "bxs-down-arrow-circle",
    },
    {
      value: 256,
      header: "Rejected Request",
      bgColor: "#E63946",
      percentage: "+30%",
      icon: "bxs-x-circle",
    },
    {
      value: 100,
      header: "Expended",
      bgColor: "#073B4C",
      percentage: "+30%",
      icon: "bxs-up-arrow-circle",
    },
  ];
  return (
    <>
      <div className="row">
        {cardContent.map((content) => {
          return (
            <>
              <div className="col">
                <Cards
                  bgColor={content.bgColor}
                  header={content.header}
                  percentage={content.percentage}
                  value={content.value}
                  icon={content.icon}
                />
              </div>
            </>
          );
        })}
      </div>

      <div className="card mt-5 shadow-lg border-0">
        <div className="row card-header bg-transparent m-0">
          <div className="col-md-9">
            <p className="fw-light">Projects</p>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control flex-shrink-1 form-control-sm rounded-pill"
            />
          </div>
        </div>
        <div className="card-body p-0">
          <table class="table table-borderless">
            <thead class="bg-light">
              <tr className="">
                <th scope="col">S/N</th>
                <th scope="col">Project name</th>
                <th scope="col">Project Manager</th>
                <th scope="col">Supervisor</th>
                <th scope="col">Start Date</th>
                <th scope="col">Amount Allocated</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Lorem ipsum dolor sit amet</td>
                <td>dolor sit amet</td>
                <td>dolor sit amet</td>
                <td>dolor sit amet</td>
                <td>dolor sit amet</td>
                <td className="status-container">
                  <span className="bar"></span>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </>
  );
};

export default Dashboard;
