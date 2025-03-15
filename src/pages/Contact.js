import ContactImage from "../assets/contact.svg";

const Contact = ({ data }) => {
  return (
    <section id="contact">
      <div className="section-container">
        <div className="left-content">
          <h2>Contact</h2>
          <p>{data?.description}</p>
        </div>
        <div className="right-content">
          <img src={ContactImage} alt="ContactImage" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
