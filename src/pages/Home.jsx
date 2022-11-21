import React from "react";
import strengthLogo from "../assets/strengthLogo.png";
import Conditions from "../components/Conditions"
import ConditionCarousel from "../components/ConditionCarousel"
import "../styles/home.css";

const Home = () => {
  return (
    <div className="outer-home">
      <img className="main-logo" src={strengthLogo} />
      <section className="welcome-section">
        <h3 className="main-heading">Welcome to A Strength In You</h3>
        <p className="welcome-text">
          A Holistic Practice for your Wellness in Northallerton, incorporating
          North Yorkshire, and Teesside.
        </p>
      </section>
      <section className="condition-section">
        <h3 className="main-heading">Conditions We Treat</h3>
        <p className="welcome-text">
          It is discussed in the NICE guidelines how complementary therapies can
          assist in the treatment of chronic or life-limiting conditions such as
          fibromyalgia, multiple sclerosis, mental health problems (i.e. mild
          depression and anxiety) weight problems, musculoskeletal problems, or a
          history of substance misuse (including alcohol and drugs).
        </p>
        <p className="welcome-text">
          A Strength In You treats a wide range of conditions to help support for
          your daily health and wellness including:
        </p>
      </section>
      <ConditionCarousel />
      <Conditions />
    </div>
  );
};

export default Home;
