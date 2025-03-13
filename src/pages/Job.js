const Job = ({ data }) => {
  return (
    <div className="page">
      <h1>Job Experience</h1>
      <ul>
        {data?.map((job, index) => <li key={index}>{job}</li>) ||
          "No data available"}
      </ul>
    </div>
  );
};

export default Job;
