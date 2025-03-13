const Education = ({ data }) => {
  return (
    <div className="page">
      <h1>Education</h1>
      <ul>
        {data?.map((edu, index) => <li key={index}>{edu}</li>) ||
          "No data available"}
      </ul>
    </div>
  );
};

export default Education;
