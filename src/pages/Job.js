import WorkImage from "../assets/work.svg";

const Job = ({ data }) => {
  return (
    <section id="job">
      <div className="section-container">
        <div className="left-content">
          <h2>Work Experience</h2>
          <p>{data?.description}</p>
        </div>
        <div className="right-content">
          <img src={WorkImage} alt="WorkImage" />
        </div>
      </div>
    </section>
  );
};

export default Job;
