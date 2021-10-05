import Milestones from "../components/Milestones";

const Project = () => {
  const status = "on going";
  const percentage = 30;

  return (
    <div className="my-5 px-5 container">
      <div className="card shadow-lg">
        <div className="card-header pb-1 pt-3 px-5 bg-white m-0 align-items-center d-flex justify-content-between">
          <p classNam="fw-bold">Lorem ipsum dolor sit</p>
          <p className="text-warning">
            {status} <span className="fw-bold">{percentage}</span>
          </p>
        </div>
        <div className="card-body px-5 scrollable-content">
          <div id="ptoject-header">
          <p className="fw-bold">
            Project Manager Name:{" "}
            <span className="fw-light">Lorem ipsum dolor sit</span>
          </p>
          <p className="fw-bold">
            Supervisor Name:{" "}
            <span className="fw-light">Lorem ipsum dolor sit</span>
          </p>
          <p className="fw-bold">
            Date: <span className="fw-light">1/23/4030</span>
          </p>
          <div className="mt-4">
            <p className="fw-bold">Purpose</p>
            <p className="">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              quaerat asperiores nulla alias impedit quod debitis suscipit
              consectetur vero fuga eius at nostrum laborum rem, sapiente nobis,
              inventore dolorum officiis blanditiis est ipsum ipsa facilis?
              Consequatur quis officiis dignissimos assumenda.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              quaerat asperiores nulla alias impedit quod debitis suscipit
              consectetur vero fuga eius at nostrum laborum rem, sapiente nobis,
              inventore dolorum officiis blanditiis est ipsum ipsa facilis?
              Consequatur quis officiis dignissimos assumenda.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              quaerat asperiores nulla alias impedit quod debitis suscipit
              consectetur vero fuga eius at nostrum laborum rem, sapiente nobis,
              inventore dolorum officiis blanditiis est ipsum ipsa facilis?
              Consequatur quis officiis dignissimos assumenda.
            </p>
          </div>
        </div>
        </div>
        <div className="px-5 pt-3 card-footer">
          <p className="fw-bold fs-6">Milestones</p>
        </div>
        <div className="card-body p-0">
        <Milestones />
        </div>
      </div>
    </div>
  );
};

export default Project;
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias maiores odit expedita nostrum impedit quasi molestias labore pariatur ratione placeat.
