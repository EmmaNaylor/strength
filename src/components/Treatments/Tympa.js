import React from "react";
import strengthLogo from "../../assets/strengthLogo.png";
import ears1 from '../../assets/tympa-wide.jpeg'
import ears2 from '../../assets/tympa-zoom.jpeg'
import BookingButton from "../BookingButton";
import "../../styles/treatments.css";
import TympaAccordion from "./TympaAccordion";
import styled from "styled-components";
import Loss from "../Loss";
import LossLargerScreen from "../LossLargerScreen";

const MobileWrapper = styled.div`
  display: none;
  @media screen and (max-width: 619px) {
    display: block;
  }
`;

const DesktopWrapper = styled.div`
  display: none;
  @media screen and (min-width: 620px) {
    display: block;
  }
`;

const Colonic = () => {
  return (
    <div className="outer-treatments">
      <img className="main-logo-treatments" src={strengthLogo} />
      <section className="treatment-section">
        <h3 className="treatment-heading">Ear Examination and Microsuction</h3>
        <p className="treatment-text">
        During your appointment your clinician will be able to assess your ears, and if wax is present, gently remove
it with microsuction. Microsuction is the gold standard of wax removal and is considered safer than other methods
such as irrigation.
        </p>
        <p className="treatment-text">
        Once wax has been removed a hearing screening can be performed. This will identify whether you have a level of
hearing loss. If you do have a hearing loss your clinician may refer you to an audiologist for further investigation.
However, in many cases, the initial problem could’ve simply been down to the presence of wax itself.
        </p>
      </section>
      <div className="ear-phone-image-container">
          <img className="wide-treatment-image" src={ears1} />
      </div>
      <MobileWrapper>
          <Loss />
        </MobileWrapper>
        <DesktopWrapper>
          <LossLargerScreen />
        </DesktopWrapper>
            <p className="treatment-text">
            These can be signs that a change has occurred in your
ears and you should get them checked.
            </p>
      <section className="treatment-section">
        <div className="treatment-separator"></div>
        <TympaAccordion />
      </section>
      <div className="treatment-separator"></div>
      {/* <div className="wide-image-container">
          <img className="wide-treatment-image" src={ears2} />
      </div> */}
        <h3 className="treatment-heading">
          How do I book my session with you?
        </h3>
        <p className="treatment-text">
          Use our Contact form to book a session with me.
      </p>
      <BookingButton />
        <div className="treatment-separator"></div>
    </div>
  );
};

export default Colonic;
