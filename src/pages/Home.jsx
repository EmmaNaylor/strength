import React from "react";
import strengthLogo from "../assets/strengthLogo.png";
import Conditions from "../components/Conditions";
import ConditionsLargerScreen from "../components/ConditionsLargerScreen";
import ConditionCarousel from "../components/ConditionCarousel";
import "../styles/home.css";
import styled from "styled-components";

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
    width: 100%;
    height: 100%;
    margin: auto;
    margin-left: calc(50% + 88px) !important;
    transform: translateX(-50%);
  }
  @media screen and (min-width: 1000px) {
    width: 80%;
  }
  @media screen and (min-width: 1200px) {
    width: 90%;
  }
`;

const Home = () => {
  return (
    <div className="outer-home">
      <img className="main-logo" src={strengthLogo} />
      <section className="welcome-section">
        <h3 className="main-heading">Welcome to A Strength In You</h3>
        <p className="welcome-text">
          A Holistic Practice for your Wellness in Darlington, incorporating
          North Yorkshire, and Teesside.
        </p>
        <div className="treatment-separator"></div>
      </section>
      <section className="condition-section">
        <h3 className="main-heading">Conditions We Treat</h3>
        <p className="welcome-text">
          It is discussed in the NICE guidelines how complementary therapies can
          assist in the treatment of chronic or life-limiting conditions such as
          fibromyalgia, multiple sclerosis, mental health problems (i.e. mild
          depression and anxiety) weight problems, musculoskeletal problems, or
          a history of substance misuse (including alcohol and drugs).
        </p>
        <p className="welcome-text">
          A Strength In You treats a wide range of conditions to help support
          for your daily health and wellness including:
        </p>
      </section>
      <ConditionCarousel />
      <MobileWrapper>
        <Conditions />
      </MobileWrapper>
      <DesktopWrapper>
        <ConditionsLargerScreen />
      </DesktopWrapper>
    </div>
  );
};

export default Home;
