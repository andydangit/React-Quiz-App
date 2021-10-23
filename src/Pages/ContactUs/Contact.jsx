import React from "react";

import ContactUsId from "../ContactUs/ContactUsId";

const ContactUs = () => {
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href =
    "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);

  return (
    <div>
      <ContactUsId />
    </div>
  );
};

export default ContactUs;
