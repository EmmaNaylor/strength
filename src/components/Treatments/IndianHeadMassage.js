import React from "react";
import { useNavigate } from "react-router-dom";
import strengthLogo from "../../assets/strengthLogo.png";
import indian from "../../assets/indian.jpg";
import Button from "react-bootstrap/Button";
import "../../styles/treatments.css";

const IndianHeadMassage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="outer-treatments">
      <img className="main-logo-treatments" src={strengthLogo} />
      <section className="treatment-section">
        <h3 className="treatment-heading">Indian Head Massage</h3>
        <p className="treatment-text">
          Traditionally performed seated and fully clothed , however some
          clients like the use of oil and prefer to have their shoulders bare.
        </p>
      </section>
      <div className="wide-image-container" style={{width: "70%"}}>
        <img className="wide-treatment-image" src={indian} />
      </div>
      <section className="treatment-section">
        <p className="treatment-text">
          It is a very relaxing head, neck, shoulder and facial massage with
          many therapeutic benefits
        </p>
        <div className="treatment-grid">
          <ul className="treatment-list">
            <li className="treatment-item">
              It can improve skin tone and colour
            </li>
            <li className="treatment-item">
              Increase circulation to the scalp increasing hair condition and
              growth
            </li>
            <li className="treatment-item">
              Facial muscles feel relaxed and soothed
            </li>
            <li className="treatment-item">
              Mobility and flexibility of neck and shoulder joints can be
              improved
            </li>
            <li className="treatment-item">
              Circulation to the upper body can be improved by the movement of
              lactic acid. Muscular tension is also reduced as is inflammation
              and pain.
            </li>
            <li className="treatment-item">
              Stress induced muscular spasms can be alleviated
            </li>
            <li className="treatment-item">
              As the circulatory system is stimulated the delivery of nutrients
              and oxygen is improved as are the removal of toxins and wastes
            </li>
            <li className="treatment-item">
              The lymphatic circulatory system is greatly heightened thus
              reducing the risk of infections within the body
            </li>
            <li className="treatment-item">
              As the effects of stress are released from the body with the
              treatment, improved sleep, reduction of anxiety, slowing of heart
              rate, energy level and concentration increase are all documented
              benefits
            </li>
          </ul>
        </div>
      </section>
      <section className="treatment-section">
        <p className="treatment-text">
          It is discussed in the NICE guidelines how complementary therapies can
          assist in the treatment of chronic or life-limiting conditions such as
          fibromyalgia, multiple sclerosis, mental health problems (i.e. mild
          depression and anxiety) weight problems, musculoskeletal problems, or
          a history of substance misuse (including alcohol and drugs).
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

export default IndianHeadMassage;
