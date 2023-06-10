import React from "react";
import { useNavigate } from "react-router-dom";
import strengthLogo from "../../assets/strengthLogo.png";
import nutrition from "../../assets/green-juice.jpeg";
import BookingButton from "../BookingButton";
import "../../styles/treatments.css";

const Nutrition = () => {
  return (
    <div className="outer-treatments">
      <img className="main-logo-treatments" src={strengthLogo} />
      <section className="treatment-section">
        <h3 className="treatment-heading">Nutritional Assessment and Guidance</h3>
        <p className="treatment-text">
          Nutrition has always been my passion. The word diet is a “dirty word” to me,
          purely because of the misconception of it. So many people associate
          the word with restriction and weight loss. I prefer to say:
        </p>
        <p className="treatment-text">
          <b style={{ color: "#036c7b", }}>
            Nutrition should be considered in terms of its qualities and
            composition and its effect on health.
          </b>
        </p>
        <p className="treatment-text">
          I look at nutritional intake as being either helpful or unhelpful. A
          qualified nutritional therapist promotes good health, performance, and
          personal care through the application of{" "}
          <b style={{ color: "#036c7b" }}>scientific nutrition</b>. Nutritional
          therapy may help clients to improve their sense of health and
          well-being. I also work with other healthcare professionals to support
          people with chronic conditions.
        </p>
        <p className="treatment-text">
          <b style={{ color: "#036c7b" }}>
            Your first consultation will include a full health and nutrition
            questionnaire to supply a thorough background on medical history,
            health concerns, symptoms, lifestyle and nutritional intake. You
            will be expected to keep a specialised journal for a typical week,
            this will enable me to devise a personalised nutritional
            programme for you to follow.
          </b>
        </p>
        <div className="phone-image-container">
        <img className="wide-treatment-image" src={nutrition} />
        </div>
      </section>
      <div className="treatment-separator"></div>
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

export default Nutrition;
