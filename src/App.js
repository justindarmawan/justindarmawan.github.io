import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Job from "./pages/Job";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import "./styles/global.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://flask-firebase-be.onrender.com/homepage")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data.home} />} />
        <Route
          path="/education"
          element={<Education data={data.education} />}
        />
        <Route path="/job" element={<Job data={data.job} />} />
        <Route path="/project" element={<Project data={data.project} />} />
        <Route path="/contact" element={<Contact data={data.contact} />} />
      </Routes>
    </Router>
  );
}

export default App;
