const Cards = ({projects}) => {
    return ( 
        <div className="cards_container row ">
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
     );
}
 
export default Cards;