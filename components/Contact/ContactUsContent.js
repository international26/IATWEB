import React from "react";
import ContactInfo from "./ContactInfo";
import GoogleMap from "./GoogleMap";

const ContactUsContent = () => {
  return (
    <section className="contact-wrap ptb-100">
      <div className="container">
        <ContactInfo />
        
        <GoogleMap />
      </div>
    </section>
  );
};

export default ContactUsContent;
