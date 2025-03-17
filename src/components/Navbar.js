import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import IconImage from "../assets/icon.png";

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (path, id) => {
    if (isMobile) {
      onNavigate(path);
    } else {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={IconImage} alt="Logo" className="logo" />
      </div>

      <div className="nav-container">
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li className={location.pathname === "/" ? "active" : ""}>
            <a
              onClick={() => handleNavigation("/", "home")}
              className="nav-text"
            >
              Home
            </a>
          </li>
          <li className={location.pathname === "/education" ? "active" : ""}>
            <a
              onClick={() => handleNavigation("/education", "education")}
              className="nav-text"
            >
              Skills & Knowledge
            </a>
          </li>
          <li className={location.pathname === "/job" ? "active" : ""}>
            <a
              onClick={() => handleNavigation("/job", "job")}
              className="nav-text"
            >
              Experience
            </a>
          </li>
          <li className={location.pathname === "/project" ? "active" : ""}>
            <a
              onClick={() => handleNavigation("/project", "project")}
              className="nav-text"
            >
              Projects
            </a>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <a
              onClick={() => handleNavigation("/contact", "contact")}
              className="nav-text"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
