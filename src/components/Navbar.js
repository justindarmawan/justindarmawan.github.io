import { useState } from "react";
import "../styles/Navbar.css";
import IconImage from "../assets/icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={IconImage} alt="Logo" className="logo" />
      </div>

      <div className="nav-container">
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a onClick={() => scrollToSection("home")} className="nav-text">
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("education")}
              className="nav-text"
            >
              Skills & Knowledge
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("job")} className="nav-text">
              Experience
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("project")} className="nav-text">
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("contact")} className="nav-text">
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
