import React from "react";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import facebook from "../assets/facebookDark.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="disclaimer">
        <p>
          No therapy or treatment will be undertaken by A Strength In You
          without an assessment and possible examination. We have the right to
          refuse a treatment if deemed not beneficial or for therapeutic
          reasons. All therapies and treatments are to support or enhance
          wellness and are not cures for conditions.
        </p>
      </div>
      {/* <div className="footer-background">
        <div className="flex">
          <div className="footer-bar">
            <img className="logos" src={phone} />
            <span className="footer-text">0785 8761 633</span>
            <a href="mailto:astrengthinyou@gmail.com">
              <img className="logos" src={email} />
            </a>
            <a href="mailto:astrengthinyou@gmail.com" target="_blank">
              <span className="footer-text">astrengthinyou@gmail.com</span>
            </a>
            <a href="https://www.facebook.com/astrengthinyou" target="_blank">
              <img
                className="logos"
                src={facebook}
                style={{ width: "50px", height: "50px" }}
              />
            </a>
            <a href="https://www.facebook.com/astrengthinyou" target="_blank">
              <span className="footer-text">
                www.facebook.com/astrengthinyou
              </span>
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Footer;
