import React from "react";
import "../styles/about.css";
import strengthLogo from "../assets/strengthLogo.png";
import FHT from "../assets/FHT-Logo.png"

const About = () => {
  return (
    <div className="outer-about">
      <img className="main-logo-about" src={strengthLogo} />
      <section className="about-section">
        <h3 className="main-heading-about">About Me</h3>
        <p className="about-text">
          I’m Jacky Burrows and I’m a holistic practitioner providing various
          methods of support for your daily health and wellness.
        </p>
        <p className="about-text">
          I am one of three Therapists in the country to hold the NHS
          Certificate in Complementary Therapy in the Occupational Health
          pathway, from the Natural Health School, Harrogate and District NHS
          Foundation Trust.
        </p>
        <p className="about-text">
          In 2000, I began to formally study natural medicine after a lengthy
          illness of my own. I gained many qualifications in nutrition,
          counselling, massage and personal training, whilst also working
          full-time in the National Health Service as a practitioner.
        </p>
        <p className="about-text">
          This is why I can provide you with a truly holistic approach to your
          health and wellness, with a background in both traditional and natural
          medicine. I can advise you specifically, on your condition and in your
          best interests.
        </p>
        <p className="about-text">
          As a healthcare professional with over 25 years experience I have
          become very frustrated and upset with the lack of time a professional
          can spend with a patient in a consultation. I do not believe that in a
          ten-minute appointment you can adequately discuss the real reason why
          a person has come to access some help and perform a thorough
          examination. I wish to spend an appropriate amount of time with a
          person, discuss their thoughts, feelings, and goals to see if we,
          together, can plan a care regime to help them.
        </p>
        <p className="about-text">
          To this end, I provide a range of therapeutic routes to wellness as an
          advocate for natural medicine and a holistic approach to our everyday
          wellness. Starting with nutrition and our attitude towards food and
          hydration, through exercise and movement, meditation, massage therapy,
          craniosacral therapy and reiki and seichem healing.
        </p>
        <p className="about-text">
          To start your journey to total wellness, contact me to book an initial
          consultation.
        </p>
      </section>
      <img className="main-logo-about" src={FHT} style={{marginTop: "40px"}} />
    </div>
  );
};

export default About;
