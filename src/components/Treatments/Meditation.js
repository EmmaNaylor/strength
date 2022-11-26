import React from "react";
import { useNavigate } from "react-router-dom";
import strengthLogo from "../../assets/strengthLogo.png";
import meditation from "../../assets/meditation.jpg";
import Button from "react-bootstrap/Button";
import "../../styles/treatments.css";

const Meditation = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="outer-treatments">
      <img className="main-logo-treatments" src={strengthLogo} />
      <section className="treatment-section">
        <h3 className="treatment-heading">Meditation</h3>
        <p className="treatment-text">
          My meditation classes can be guided one to one or with a group,
          informing how to engage in a mental exercise to focus your attention
          and intentions to attain a heightened level of awareness to properly
          relax and close yourself off from the every day stresses that may
          affect you.
        </p>
        <p className="treatment-text">
          I will tailor every meditation session to the individual (or needs of
          the specific group), for those not used to meditation the sessions
          will be shorter. All sessions start with relaxational breathing. If
          you wish to discuss your feelings after each session this can be
          scheduled into the time spent.
        </p>
      </section>
      <section className="treatment-section">
        <div className="wide-image-container">
          <img className="wide-treatment-image" src={meditation} />
        </div>
        <h3 className="treatment-heading">What is Meditation?</h3>
        <p className="treatment-text">
          Meditation is a very personal experience and is many different things
          to each person.
        </p>
        <p className="treatment-text">
          Depending on what you want from your encounter, we could focus on
          individual aspects of health, personal growth or healing.
        </p>
      </section>
      <section className="treatment-section">
        <h3 className="treatment-heading">When will I feel the benefit?</h3>
        <p className="treatment-text">
          Generally you will feel the benefit of a meditation session
          immediately. As you repeat your practice and extend the length of your
          meditation sessions you will experience deeper and longer benefits.
        </p>
      </section>
      <section className="treatment-section">
        <h3 className="treatment-heading">
          What are the medical or scientific benefits and support for
          meditation?
        </h3>
        <p className="treatment-text">
          When we meditate we learn to relax and this reduces our worry. As we
          reach the state of relaxation less adrenaline rushes through out
          bodies which allows the parasympathetic nervous system to function
          which stimulates cell regeneration, increases bloodflow to the heart,
          slows the heart rate, eases muscular tension, improves cognitive
          function and aids concentration. As the flow of blood is improved and
          less fight or flight chemicals are being released into the body the
          function of the entire body improves. All the cells become more
          oxygenated which cleanses and detoxifies the system. NICE (National
          Institute for Care Excellence) recommends meditation for many
          illnesses.
        </p>
      </section>
      <div className="button-container">
        <Button
          variant="outline-success"
          className="book"
          onClick={handleClick}
        >
          Book
        </Button>
      </div>
    </div>
  );
};

export default Meditation;
