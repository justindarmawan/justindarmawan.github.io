const Contact = ({ data }) => {
  return (
    <div className="page">
      <h1>Contact</h1>
      <p>Email: {data?.email || "No email available"}</p>
    </div>
  );
};

export default Contact;
