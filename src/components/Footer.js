import React from "react";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import facebook from "../assets/facebookDark.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-bar">
      <img className="logos" src={phone} />
      <span className="footer-text">0785 8761 633</span>
      <img className="logos" src={email} />
      <span className="footer-text">astrengthinyou@gmail.com</span>
      <img className="logos" src={facebook} style={{ width: "50px", height: "50px" }} />
      <span className="footer-text">www.facebook.com/astrengthinyou</span>
    </div>
  );
};

export default Footer;
