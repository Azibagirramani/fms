import { useState } from "react";
import Cards from "../components/cards";
import FundsTable from "../components/fundsTable";

const { default: Charts } = require("../components/Charts");

const Dashboard = () => {
  const [projects, SetProjects] = useState([
    {
      title: " On-going projects",
      amount: "50",
      rate: "25%",
      backgroundColor: "rgb(251, 133, 0)",
      icon: "bx-time-five",
    },
    {
      title: " Completed Project",
      amount: "231",
      rate: "25%",
      backgroundColor: "rgb(1,179,211)",
      icon: "bx-check-circle",
    },
    {
      title: " Approved Request",
      amount: "155k",
      rate: "25%",
      backgroundColor: "rgb(2,188,119)",
      icon: " bx-down-arrow-circle",
    },
    {
      title: " Closed Request",
      amount: "4234",
      rate: "25%",
      backgroundColor: "rgb(230,57,70)",
      icon: "bx-x-circle",
    },
   
  ]);
  return (
    <div className="p-5">
      <div>
        <div className="px-3">
          <Cards projects={projects} />

        </div>
        <div className="px-2 bg-white">
          <div style={{wordWrap: "break-word", overflow: "hidden"}}>
            <div className="d-flex justify-content-between p-3">
              <div>
                projects
              </div>

              <div>
                <input type="search" placeholder="Search" name="gsearch" />
              </div>

            </div>
            <FundsTable />
          </div>


        </div>
        <div>
          <Charts></Charts>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;
