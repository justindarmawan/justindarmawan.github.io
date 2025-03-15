import { useState } from "react";
import "../styles/Education.css";
import EduImage from "../assets/edu.svg";

const Education = ({ data }) => {
  const [openCategory, setOpenCategory] = useState(0);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <section id="education">
      <div className="skills-container">
        <div className="left-content">
          <h2>{data?.education.title}</h2>
          <p>
            <strong>{data?.education.university}</strong> -{" "}
            {data?.education.degree} ({data?.education.year})
          </p>
          <ul>
            {data?.education.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>

        <div className="right-content">
          <h2>{data?.skills.title}</h2>
          {data?.skills.categories.map((category, index) => (
            <div key={index} className="accordion-item">
              <button
                className="accordion-header"
                onClick={() => toggleCategory(index)}
                disabled={openCategory === index}
              >
                {category.name}
                <span
                  className={`arrow ${openCategory === index ? "open" : ""}`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`accordion-content ${
                  openCategory === index ? "open" : ""
                }`}
              >
                <ul>
                  {category.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
