import React, { useEffect } from "react";
import strengthLogo from "../assets/strengthLogo.png";
import Conditions from "../components/Conditions";
import ConditionsLargerScreen from "../components/ConditionsLargerScreen";
import ConditionCarousel from "../components/ConditionCarousel";
import AllTreatmentsWide from "../components/Treatments/AllTreatmentsWide";
import FHT from "../assets/FHT-Logo.png"
import "../styles/home.css";
import styled from "styled-components";

const MobileWrapper = styled.div`
  display: none;
  @media screen and (max-width: 1199px) {
    display: block;
  }
`;

const DesktopWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

const Home = () => {
  return (
    <div className="outer-home">
      <img className="main-logo" src={strengthLogo} />
      <section className="welcome-section">
        <h3 className="welcome">Welcome to A Strength In You</h3>
        <p className="welcome-text">
          A Holistic Practice for your Wellness in Darlington, incorporating
          North Yorkshire, and Teesside. <a href="https://www.healthcentre.org.uk" target="_blank" className="health-registered">UK Health Centre<br /> registered</a>
        </p>
        <div className="treatment-separator"></div>
        <h3 className="main-heading">Conditions We Treat</h3>
        <p className="welcome-text">
          A Strength In You has many modalities that can help alleviate some of
          the symptoms of:
        </p>
        </section>
        <section className="condition-section">
        <MobileWrapper>
          <Conditions />
        </MobileWrapper>
        <DesktopWrapper>
          <ConditionsLargerScreen />
        </DesktopWrapper>
        <p className="welcome-text">
        It is discussed in the NICE guidelines how complementary therapies can assist in the treatment of chronic or life-limiting conditions such as fibromyalgia, multiple sclerosis, mental health problems (i.e. mild depression and anxiety) weight concerns and musculoskeletal problems.
        </p>
        <h3 className="main-heading">Available Treatments</h3>
      </section>
      <div>
        <AllTreatmentsWide />
      </div>
      <img className="main-logo-about" src={FHT} style={{marginTop: "40px"}} />
      {/* <ConditionCarousel /> */}
    </div>
  );
};

export default Home;
