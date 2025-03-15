import { useState } from "react";
import "../styles/Contact.css";
import ContactImage from "../assets/contact.svg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! I'll get back to you soon. 😊");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="left-content">
          <h2>📩 Let’s Build Something Great Together!</h2>
          <p>
            I’d love to hear from you! Whether you have a project idea, a
            question, or just want to say hi, feel free to reach out.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              style={{ resize: "none", width: "100%", height: "150px" }}
            />
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-links">
            <p>Or reach me at:</p>
            <ul>
              <li>
                📧{" "}
                <a href="mailto:jdarmawan.jd@gmail.com">
                  jdarmawan.jd@gmail.com
                </a>
              </li>
              <li>
                🔗{" "}
                <a href="https://www.linkedin.com/in/justin-darmawan">
                  LinkedIn
                </a>
              </li>
              <li>
                💻 <a href="https://github.com/justindarmawan">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-content">
          <img src={ContactImage} alt="ContactImage" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
