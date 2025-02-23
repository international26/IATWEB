import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ContactUsContent from "../components/Contact/ContactUsContent";

const ContactUs = () => {
  return (
    <>
      <PageBanner bannerTitle="Contact Us" pageName="Contact Us" />

      <ContactUsContent />
    </>
  );
};

export default ContactUs;
