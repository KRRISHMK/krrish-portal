import React from "react";
import ContactUsShow from "./ContactUsShow";
import FooterText from "./FooterText";
import PaymentShow from "./PaymentShow";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <div>
      <ContactUsShow />
      <PaymentShow />
      <SocialIcon />
      <FooterText />
    </div>
  );
};

export default Footer;
