const Home = ({ data }) => {
  return (
    <div className="page">
      <h1>Welcome to My Portfolio</h1>
      <p>{data?.description || "No data available"}</p>
    </div>
  );
};

export default Home;
