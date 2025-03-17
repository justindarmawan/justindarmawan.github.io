import { useSwipeable } from "react-swipeable";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../pages/Home";
import Education from "../pages/Education";
import Job from "../pages/Job";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";

const pages = ["/", "/education", "/job", "/project", "/contact"];

function MobileMode({ data }) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = pages.indexOf(location.pathname);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleNavigation = (path) => {
    setFadeIn(false);
    setTimeout(() => {
      navigate(path);
      setFadeIn(true);
    }, 300);
  };

  const handleSwipe = (direction) => {
    setFadeIn(false);
    setTimeout(() => {
      if (direction === "left" && currentIndex < pages.length - 1) {
        navigate(pages[currentIndex + 1]);
      } else if (direction === "right" && currentIndex > 0) {
        navigate(pages[currentIndex - 1]);
      }
      setFadeIn(true);
    }, 300);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  return (
    <div {...handlers} className="swipe-container">
      <Navbar onNavigate={handleNavigation} />
      <div className={`container ${fadeIn ? "show" : ""}`}>
        <Routes>
          <Route path="/" element={<Home data={data?.home} />} />
          <Route
            path="/education"
            element={<Education data={data?.education} />}
          />
          <Route path="/job" element={<Job data={data?.job} />} />
          <Route path="/project" element={<Project data={data?.project} />} />
          <Route path="/contact" element={<Contact data={data?.contact} />} />
        </Routes>
      </div>
    </div>
  );
}

export default MobileMode;
