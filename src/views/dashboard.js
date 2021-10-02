import { useState } from "react";

const { default: Charts } = require("../components/Charts");

const Dashboard = () => {
  const [projects, SetProjects] = useState([
    {
      title: " Pending Request",
      amount: "50",
      rate: "25%",
      backgroundColor: "rgb(251, 133, 0)",
      icon: "bx-time-five",
    },
    {
      title: " Approved Request",
      amount: "231",
      rate: "25%",
      backgroundColor: "rgb(1,179,211)",
      icon: "bx-check-circle",
    },
    {
      title: " Disbursed Funds",
      amount: "155k",
      rate: "25%",
      backgroundColor: "rgb(2,188,119)",
      icon: " bx-down-arrow-circle",
    },
    {
      title: " Rejected Request",
      amount: "4234",
      rate: "25%",
      backgroundColor: "rgb(230,57,70)",
      icon: "bx-x-circle",
    },
    {
      title: " Expended ",
      amount: "4234k",
      rate: "25%",
      backgroundColor: "rgb(7,59,76)",
      icon: "bx-up-arrow-circle",
    },
  ]);
  return (
    <div className="p-4">
      <div className="row">
        {projects.map((project, index) => (
          <div
            key={project.index}
            className="col cards text-white mb-3"
            style={{ backgroundColor: `${project.backgroundColor}` }}
          >
            <div className="cards-header ">{project.title}</div>
            <div className="card-body p-3 d-flex justify-content-between">
              <div className="ps-2">
                <p className="fs-3 fw-bold">{project.amount}</p>
                <p className="fs-6">{project.rate}</p>
              </div>
              <div>
                <i
                  class={`bx bx-time-five bx-lg pt-4 ${project.backgroundColor}`}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Charts></Charts>
    </div>
  );
};

export default Dashboard;
