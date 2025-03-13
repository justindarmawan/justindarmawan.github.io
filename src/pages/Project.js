const Project = ({ data }) => {
  return (
    <div className="page">
      <h1>Projects</h1>
      <ul>
        {data?.map((project, index) => <li key={index}>{project}</li>) ||
          "No data available"}
      </ul>
    </div>
  );
};

export default Project;
