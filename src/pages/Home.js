import "../styles/Home.css";
import HomeImage from "../assets/home.svg";

const Home = ({ data }) => {
  return (
    <section id="home">
      <div className="section-container">
        <div className="left-content">
          <h2>{data?.title}</h2>
          <p>{data?.subtitle}</p>
        </div>
        <div className="right-content">
          <img src={HomeImage} alt="HomeImage" />
        </div>
      </div>
    </section>
  );
};

export default Home;
