import React from "react";
import { useNavigate } from "react-router-dom";
import strengthLogo from "../../assets/strengthLogo.png";
import nutrition from "../../assets/nutrition-long.jpg";
import Button from "react-bootstrap/Button";
import "../../styles/treatments.css";

const Nutrition = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="outer-treatments">
      <img className="main-logo-treatments" src={strengthLogo} />
      <section className="treatment-section">
        <h3 className="treatment-heading">Nutritional Therapy</h3>
        <p className="treatment-text">
          Nutrition has always been my passion, I firmly believe that
          nutritional intake, water, exercise, daylight and sleep is the optimum
          solution for our body’s needs. The word diet is a “dirty word” to me,
          purely because of the misconception of it. So many people associate
          the word with restriction and weight loss. The definition I prefer is:
        </p>
        <p className="treatment-text">
          <b>
            Nutrition should be considered in terms of its qualities and
            composition and its effect on health.
          </b>
        </p>
        <p className="treatment-text">
          I look at nutritional intake as being either helpful or unhelpful. A
          qualified nutritional therapist promotes good health, performance, and
          personal care through the application of <b>scientific nutrition</b>.
          Nutritional therapy may help clients to improve their sense of health
          and well-being. I also work with other healthcare professionals to
          support people with chronic conditions.
        </p>
        <p className="treatment-text">
          <i>
            Your first consultation will include a full health and nutrition
            questionnaire to supply a thorough background on medical history,
            health concerns, symptoms, lifestyle and nutritional intake. You
            will be expected to keep a specialised diary for a typical week,
            this will enable me to devise a personalised nutrition and lifestyle
            programme for you to follow.
          </i>
        </p>
        <h3 className="treatment-heading">Health Coach</h3>
        <p className="treatment-text">
          Book your individual consultation using my contact form
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
      <img className="thin-wide-treatment-image" src={nutrition} />
    </div>
  );
};

export default Nutrition;
