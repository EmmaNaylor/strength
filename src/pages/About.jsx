import React from "react";
import "../styles/about.css";
import strengthLogo from "../assets/strengthLogo.png";
import jacky from "../assets/jacky.jpg";
import FHT from "../assets/FHT-Logo.png"

const About = () => {
  return (
    <div className="outer-about">
      <img className="main-logo-about" src={strengthLogo} />
      <section className="about-section">
        <h3 className="welcome">About Me</h3>
        <img className="jacky-image" src={jacky} />
        <p className="about-text">
        I am a healthcare professional with over 30 years of experience and I have been a holistic
        practitioner for over 20.
        </p>
        <p className="about-text">
        I have seen many changes in &quot;health&quot; over my career and firmly believe
        that there is a need for Integrative medicine now much more so than
        ever before. Integrative medicine is an approach to health care combining
        the benefits of conventional treatments (medicines and surgeries) with
        complementary therapies.
        </p>
        <p className="about-text">
        As well as using therapies, I can assist you in learning and understanding
        the importance of self-care and utilising it in daily life to manage your conditions and to live well.
        </p>
        <p className="about-text">
        By means of education, research and evidence-based practise, I apply a
        holistic person centred approach to aid people with chronic and complex
        conditions
        </p>
        <p className="about-text">
        I can provide a range of therapeutic routes to wellness as an advocate for
        natural medicine and a holistic approach to our everyday wellness.
        Beginning with nutrition and our attitude towards food and hydration,
        through exercise and movement, meditation, craniosacral therapy and reiki
        and seichem healing.
        </p>
        {/* <p className="about-text">
          To this end, I provide a range of therapeutic routes to wellness as an
          advocate for natural medicine and a holistic approach to our everyday
          wellness. Starting with nutrition and our attitude towards food and
          hydration, through exercise and movement, meditation, massage therapy,
          craniosacral therapy and reiki and seichem healing.
        </p>
        <p className="about-text">
          To start your journey to total wellness, contact me to book an initial
          consultation.
        </p> */}
      </section>
      <img className="main-logo-about" src={FHT} style={{marginTop: "40px"}} />
    </div>
  );
};

export default About;
