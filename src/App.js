import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Job from "./pages/Job";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MobileMode from "./components/MobileMode";
import "./styles/global.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch("https://flask-firebase-be.onrender.com/homepage")
      .then((response) => response.json())
      .then((result) => {
        setData({
          ...result,
          home: JSON.parse(result.home),
          education: JSON.parse(result.education),
          job: JSON.parse(result.job),
        });
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setLoading(false);
            setTimeout(() => setShowContent(true), 100);
          }, 500);
        }, 2500);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) return <LoadingScreen fadeOut={fadeOut} />;

  return (
    <Router>
      <Navbar />
      {isMobile ? (
        <MobileMode data={data} />
      ) : (
        <div className={`container ${showContent ? "show" : ""}`}>
          <section id="home">
            <Home data={data?.home} />
          </section>
          <section id="education">
            <Education data={data?.education} />
          </section>
          <section id="job">
            <Job data={data?.job} />
          </section>
          <section id="project">
            <Project data={data?.project} />
          </section>
          <section id="contact">
            <Contact data={data?.contact} />
          </section>
        </div>
      )}
    </Router>
  );
}

export default App;
