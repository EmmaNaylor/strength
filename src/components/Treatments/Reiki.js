import React from "react";
import { useNavigate } from "react-router-dom";
import strengthLogo from "../../assets/strengthLogo.png";
import reiki1 from "../../assets/reiki-1.jpg";
import reiki2 from "../../assets/reiki-2.jpg";
import reiki3 from "../../assets/reiki-3.jpg";
import Button from "react-bootstrap/Button";
import "../../styles/treatments.css";
import styled from "styled-components";

const DesktopWrapper = styled.div`
  display: none;
  @media screen and (min-width: 960px) {
    display: inline-block;
  }
`;

const Reiki = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="outer-treatments">
      <img className="main-logo-treatments" src={strengthLogo} />
      <section className="treatment-section">
        <h3 className="treatment-heading">Reiki and Seichem Healing</h3>
        <p className="treatment-text">
          Reiki means ‘universal life energy’. A balanced flow of energy is said
          to provide a sense of wellbeing and spiritual renewal.Those who
          practice Reiki are said to draw upon universal healing energy, Seichem
          incorporates the energies from the four elements earth air fire and
          water , which is then transferred to the client by visualisation and
          intent by gently placing their hands on, or just above the body .
        </p>
      </section>
      <div className="small-image-container">
        <img className="treatment-image" src={reiki1} />
      </div>
      <div className="small-image-container">
        <img className="treatment-image" src={reiki2} />
      </div>
      <DesktopWrapper>
        <div className="small-image-container">
          <img className="treatment-image" src={reiki3} />
        </div>
      </DesktopWrapper>
      <section className="treatment-section">
        <h3 className="treatment-heading">What to Expect</h3>
        <p className="treatment-text">
          Reiki and Seichem is a non-invasive therapy. Your practitioner will
          use energy flow from their hands to rebalance each of your energy
          centres. You will remain fully clothed, lying on a massage couch or
          sitting on a chair. The practitioner will either place their hands on
          or above your body, using their intuition to guide energy flow. Your
          whole body may be treated or just specific parts, depending on where
          imbalances are thought to lie. Reiki and Seichem may also be used
          remotely, with the recipient’s consent.
        </p>
      </section>
      <section className="treatment-section">
        <h3 className="treatment-heading">Benefits of Reiki and Seichem</h3>
        <p className="treatment-text">
          Reiki and Seichem is often described as a very relaxing and peaceful
          treatment, which helps to restore a sense of balance and well-being
          within the mind and body. Due to the very gentle nature of this
          treatment, it is often used to support those receiving conventional
          medical care in hospitals, hospices or at home.
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

export default Reiki;
