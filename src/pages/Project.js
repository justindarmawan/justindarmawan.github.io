import ProjectImage from "../assets/project.svg";

const Project = ({ data }) => {
  return (
    <section id="project">
      <div className="section-container">
        <div className="left-content">
          <h2>Projects</h2>
          <p>{data?.description}</p>
        </div>
        <div className="right-content">
          <img src={ProjectImage} alt="ProjectImage" />
        </div>
      </div>
    </section>
  );
};

export default Project;
