import React from "react";
import "../styles/headerBar.css";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import facebook from "../assets/facebookDark.png";
import { IconContext } from "react-icons/lib";
import { MdPhone, MdEmail, MdFacebook } from "react-icons/md";

const HeaderBar = () => {
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="header-bar">
        <MdPhone />
        <span className="header-text">0785 8761 633</span>
        <a href="mailto:astrengthinyou@gmail.com">
          {" "}
          <MdEmail />
        </a>
        <a href="mailto:astrengthinyou@gmail.com" target="_blank">
          <span className="header-text">astrengthinyou@gmail.com</span>
        </a>
        <a href="https://www.facebook.com/astrengthinyou" target="_blank">
          <img
            className="header-logo"
            src={facebook}
            style={{ width: "20px", height: "20px" }}
          />
        </a>
      </div>
    </IconContext.Provider>
  );
};

export default HeaderBar;
