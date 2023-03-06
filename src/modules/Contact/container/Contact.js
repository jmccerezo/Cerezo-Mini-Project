import React from "react";
import ContactCards from "../component/ContactCards";
import ContactForm from "../component/ContactForm";

const Contact = () => {
  return (
    <div className="page-container">
      <div className="h-one-container">
        <h1>Contact Us</h1>
      </div>
      <ContactCards />
      <ContactForm />
    </div>
  );
};

export default Contact;
