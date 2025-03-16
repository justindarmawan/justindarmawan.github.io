import { useState } from "react";
import "../styles/Job.css";
import WorkImage from "../assets/work.svg";

const Job = ({ data }) => {
  const [openJob, setOpenJob] = useState(0);

  const toggleJob = (index) => {
    setOpenJob(openJob === index ? null : index);
  };

  return (
    <section id="job">
      <div className="jobs-container">
        <div className="left-content">
          <h2>{data?.work_experience.title}</h2>
          {data?.work_experience.jobs.map((job, index) => (
            <div key={index} className="accordion-item">
              <button
                className="accordion-header"
                onClick={() => toggleJob(index)}
                disabled={openJob === index}
              >
                {job.position} - {job.company}
                <span className={`arrow ${openJob === index ? "open" : ""}`}>
                  ▼
                </span>
              </button>
              <div
                className={`accordion-content ${
                  openJob === index ? "open" : ""
                }`}
              >
                <p>
                  {job.location} ({job.period})
                </p>
                <ul>
                  {job.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="right-content">
          <img src={WorkImage} alt="WorkImage" />
        </div>
      </div>
    </section>
  );
};

export default Job;
