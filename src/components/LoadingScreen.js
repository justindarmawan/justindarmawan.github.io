import "../styles/LoadingScreen.css";
import LoadingVideo from "../assets/loading.mp4";

const LoadingScreen = ({ fadeOut }) => {
  return (
    <div className={`loading-container ${fadeOut ? "fade-out" : ""}`}>
      <video autoPlay loop muted className="loading-video">
        <source src={LoadingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoadingScreen;
