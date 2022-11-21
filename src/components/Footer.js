import React from "react";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import facebook from "../assets/facebook-sml.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-bar">
      <div>
        <img src={facebook} />
      </div>
      <div>
        <img className="logos" src={phone} /> 07858761633
      </div>
      <p>
        <img className="logos" src={email} />
        astrengthinyou@gmail.com
      </p>
    </div>
  );
};

export default Footer;
